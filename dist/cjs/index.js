"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var src_exports = {};
__export(src_exports, {
  ONS: () => ONS
});
module.exports = __toCommonJS(src_exports);
var import_getContractAddress = require("./contracts/getContractAddress");
var import_contracts = __toESM(require("./contracts/index"));
var import_GqlManager = __toESM(require("./GqlManager"));
var import_singleCall = __toESM(require("./utils/singleCall"));
var import_writeTx = __toESM(require("./utils/writeTx"));
const graphURIEndpoints = {
  1: "https://api.thegraph.com/subgraphs/name/ensdomains/ens",
  3: "https://api.thegraph.com/subgraphs/name/ensdomains/ensropsten",
  4: "https://api.thegraph.com/subgraphs/name/ensdomains/ensrinkeby",
  5: "https://api.thegraph.com/subgraphs/name/opnamesdev/ons-goerli",
  10: "https://api.thegraph.com/subgraphs/name/opnamesdev/ons-op",
  420: "https://api.thegraph.com/subgraphs/name/opnames/onsgoerli"
};
class ONS {
  constructor(options) {
    this.getContractAddress = import_getContractAddress.getContractAddress;
    this.gqlInstance = new import_GqlManager.default();
    this.checkInitialProvider = async () => {
      if (!this.initialProvider) {
        return;
      }
      await this.setProvider(this.initialProvider);
    };
    this.forwardDependenciesFromArray = (dependencies) => Object.fromEntries(
      dependencies.map((dep) => [dep, this[dep]])
    );
    this.importGenerator = (path, dependencies, exportName = "default", subFunc, passthrough) => {
      if (subFunc === "batch") {
        return (...args) => ({ args, ...passthrough });
      }
      const thisRef = this;
      const mainFunc = async function(...args) {
        var _a, _b;
        await thisRef.checkInitialProvider();
        let mod = await import(
          /* webpackMode: "lazy", webpackChunkName: "[request]", webpackPreload: true, webpackExclude: /.*\.ts$/ */
          `./functions/${path}`
        );
        if ((_a = mod.default) == null ? void 0 : _a[exportName]) {
          mod = mod.default;
        }
        if (subFunc !== "combine") {
          const writeable = subFunc === "write" || subFunc === "populateTransaction";
          const func = subFunc && !writeable ? mod[exportName][subFunc] : mod[exportName];
          let dependenciesToForward2 = thisRef.forwardDependenciesFromArray(dependencies);
          if (writeable) {
            const options = args[1] || {};
            const signer = options.signer || ((_b = thisRef.provider) == null ? void 0 : _b.getSigner(options.addressOrIndex));
            const populate = subFunc === "populateTransaction";
            if (!signer) {
              throw new Error("No signer specified");
            }
            delete options.addressOrIndex;
            delete options.signer;
            dependenciesToForward2 = { ...dependenciesToForward2, signer };
            return func(dependenciesToForward2, args[0], options).then(
              (0, import_writeTx.default)(signer, populate)
            );
          }
          return func(dependenciesToForward2, ...args);
        }
        const dependenciesToForward = thisRef.forwardDependenciesFromArray(dependencies);
        return (0, import_singleCall.default)(
          thisRef.provider,
          dependenciesToForward,
          mod[exportName],
          ...args
        );
      };
      if (subFunc === "combine") {
        mainFunc.raw = this.importGenerator(
          path,
          dependencies,
          exportName,
          "raw"
        );
        mainFunc.decode = this.importGenerator(
          path,
          dependencies,
          exportName,
          "decode"
        );
        mainFunc.batch = this.importGenerator(
          path,
          dependencies,
          exportName,
          "batch",
          { raw: mainFunc.raw, decode: mainFunc.decode }
        );
      } else if (subFunc === "write") {
        mainFunc.populateTransaction = this.importGenerator(
          path,
          dependencies,
          exportName,
          "populateTransaction"
        );
      }
      return mainFunc;
    };
    this.generateFunction = (path, dependencies, exportName = "default") => this.importGenerator(path, dependencies, exportName);
    this.generateWriteFunction = (path, dependencies, exportName = "default") => this.importGenerator(
      path,
      dependencies,
      exportName,
      "write"
    );
    this.generateRawFunction = (path, dependencies, exportName = "default") => this.importGenerator(
      path,
      dependencies,
      exportName,
      "combine"
    );
    this.setProvider = async (provider) => {
      this.provider = provider;
      const network = (await this.provider.getNetwork()).chainId;
      if (this.options && this.options.graphURI) {
        this.graphURI = this.options.graphURI;
      } else {
        this.graphURI = graphURIEndpoints[network];
      }
      await this.gqlInstance.setUrl(this.graphURI);
      this.contracts = new import_contracts.default(
        this.provider,
        this.getContractAddress(String(network))
      );
    };
    this.withProvider = (provider) => {
      const newONS = new ONS(this.options);
      newONS.initialProvider = provider;
      return newONS;
    };
    this.batch = this.generateRawFunction(
      "initialGetters",
      ["multicallWrapper"],
      "batch"
    );
    this.getProfile = this.generateFunction(
      "initialGetters",
      [
        "contracts",
        "gqlInstance",
        "getName",
        "resolverMulticallWrapper",
        "multicallWrapper",
        "_getAddr",
        "_getContentHash",
        "_getText"
      ],
      "getProfile"
    );
    this.getRecords = this.generateFunction(
      "initialGetters",
      ["getProfile"],
      "getRecords"
    );
    this.getName = this.generateRawFunction(
      "initialGetters",
      ["contracts"],
      "getName"
    );
    this.getResolver = this.generateRawFunction(
      "getResolver",
      ["contracts"]
    );
    this.getWrapperData = this.generateRawFunction(
      "getWrapperData",
      ["contracts"]
    );
    this.getHistory = this.generateFunction(
      "getHistory",
      ["gqlInstance"],
      "getHistory"
    );
    this.getContentHash = this.generateRawFunction(
      "initialGetters",
      ["contracts", "universalWrapper"],
      "getContentHash"
    );
    this._getContentHash = this.generateRawFunction(
      "initialGetters",
      ["contracts"],
      "_getContentHash"
    );
    this.getAddr = this.generateRawFunction(
      "initialGetters",
      ["contracts", "universalWrapper"],
      "getAddr"
    );
    this._getAddr = this.generateRawFunction(
      "initialGetters",
      ["contracts"],
      "_getAddr"
    );
    this.getText = this.generateRawFunction(
      "initialGetters",
      ["contracts", "universalWrapper"],
      "getText"
    );
    this._getText = this.generateRawFunction(
      "initialGetters",
      ["contracts"],
      "_getText"
    );
    this.getOwner = this.generateRawFunction(
      "initialGetters",
      ["contracts", "multicallWrapper", "gqlInstance"],
      "getOwner"
    );
    this.getExpiry = this.generateRawFunction(
      "initialGetters",
      ["contracts", "multicallWrapper"],
      "getExpiry"
    );
    this.getSubnames = this.generateFunction(
      "initialGetters",
      ["gqlInstance"],
      "getSubnames"
    );
    this.getNames = this.generateFunction(
      "initialGetters",
      ["gqlInstance"],
      "getNames"
    );
    this.getPrice = this.generateRawFunction(
      "initialGetters",
      ["contracts", "multicallWrapper"],
      "getPrice"
    );
    this.getDNSOwner = this.generateFunction(
      "getDNSOwner",
      []
    );
    this.supportsTLD = this.generateFunction(
      "initialGetters",
      ["getOwner", "provider"],
      "supportsTLD"
    );
    this.getAvailable = this.generateRawFunction(
      "getAvailable",
      ["contracts"]
    );
    this.universalWrapper = this.generateRawFunction(
      "initialGetters",
      ["contracts"],
      "universalWrapper"
    );
    this.resolverMulticallWrapper = this.generateRawFunction("initialGetters", ["contracts"], "resolverMulticallWrapper");
    this.multicallWrapper = this.generateRawFunction(
      "initialGetters",
      ["contracts"],
      "multicallWrapper"
    );
    this.setName = this.generateWriteFunction("setName", [
      "contracts"
    ]);
    this.setRecords = this.generateWriteFunction(
      "setRecords",
      ["contracts", "provider", "getResolver"]
    );
    this.setRecord = this.generateWriteFunction("setRecord", [
      "contracts",
      "provider",
      "getResolver"
    ]);
    this.setResolver = this.generateWriteFunction(
      "setResolver",
      ["contracts"]
    );
    this.transferName = this.generateWriteFunction(
      "transferName",
      ["contracts"]
    );
    this.transferController = this.generateWriteFunction("transferController", ["contracts"]);
    this.wrapName = this.generateWriteFunction("wrapName", [
      "contracts",
      "getExpiry"
    ]);
    this.unwrapName = this.generateWriteFunction(
      "unwrapName",
      ["contracts"]
    );
    this.burnFuses = this.generateWriteFunction("burnFuses", [
      "contracts"
    ]);
    this.importDNSSECName = this.generateWriteFunction(
      "importDNSSECName",
      ["contracts", "provider", "signer"]
    );
    this.createSubname = this.generateWriteFunction(
      "createSubname",
      ["contracts", "getExpiry"]
    );
    this.deleteSubname = this.generateWriteFunction(
      "deleteSubname",
      ["contracts"]
    );
    this.transferSubname = this.generateWriteFunction(
      "transferSubname",
      ["contracts", "getExpiry"]
    );
    this.commitName = this.generateWriteFunction(
      "commitName",
      ["contracts"]
    );
    this.registerName = this.generateWriteFunction(
      "registerName",
      ["contracts"]
    );
    this.renewNames = this.generateWriteFunction(
      "renewNames",
      ["contracts"]
    );
    this.renewNameWithData = this.generateWriteFunction("renewNames", ["contracts"], "renewNameWithData");
    this.options = options;
    this.getContractAddress = (options == null ? void 0 : options.getContractAddress) || import_getContractAddress.getContractAddress;
  }
}
