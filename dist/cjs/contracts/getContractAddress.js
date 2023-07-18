"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var getContractAddress_exports = {};
__export(getContractAddress_exports, {
  getContractAddress: () => getContractAddress
});
module.exports = __toCommonJS(getContractAddress_exports);
const addresses = {
  BaseRegistrarImplementation: {
    '1': '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85',
    '3': '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85',
    '4': '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85',
    '5': '0x8e2b5A1b524d287deCfFa4642CA4908eb128EabF', // goerli
    '10': '0x8e2b5A1b524d287deCfFa4642CA4908eb128EabF',
    '420': '0xbE416295d2c3afA7A903886a7725a3ed06A382f6', //
  },
  DNSRegistrar: {
    '1': '0x58774Bb8acD458A640aF0B88238369A167546ef2',
    '3': '0xdB328BA5FEcb432AF325Ca59E3778441eF5aa14F',
    '5': '0xC621C34395d730AF1f675181dB340cA2557dF00d', // goerli
    '10': '0xC621C34395d730AF1f675181dB340cA2557dF00d',
    '420': '0xCF3B5F6d635A6D2B824155A662d04C7526e8cee1', //
  },
  ETHRegistrarController: {
    '1': '0x283af0b28c62c092c9727f1ee09c02ca627eb7f5',
    '3': '0xa5627AB7Ae47063B533622C34FEBDb52d3281dF8',
    '4': '0x283af0b28c62c092c9727f1ee09c02ca627eb7f5',
    '5': '0x2eB50643fa16Bc4d41a865B0dE0035cF3c821Ad6', // goerli
    '10': '0x2eB50643fa16Bc4d41a865B0dE0035cF3c821Ad6',
    '420': '0x27A1CeB6E2c5F75fa7F4286421C94D00ec94D9e2', //
  },
  Multicall: {
    "1": "",
    "5": "0xcA11bde05977b3631167028862bE2a173976CA11",
    "10": "0xcA11bde05977b3631167028862bE2a173976CA11",
    "420": "0x75601B8Cb52a057A033a584749A43b32Dac5629d",
  },
  NameWrapper: {
    '1': '0x0000000000000000000000000000000000000000',
    '3': '0xF82155e2a43Be0871821E9654Fc8Ae894FB8307C',
    '4': '0x0000000000000000000000000000000000000000',
    '5': '0x86260ad23921180715c64F31423875449C84b796', // goerli
    '10': '0x86260ad23921180715c64F31423875449C84b796',
    '420': '0x4A7c7a621834aE33282AE71e403b94Ac11024070', //
  },
  PublicResolver: {
    '1': '0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41',
    '3': '0x13F0659Ee6bb7484C884FEeFb7F75C93951ef837',
    '5': '0x461f5D15E66d47f51760f15E721a2Ffd9c105a20', // goerli
    '10': '0x461f5D15E66d47f51760f15E721a2Ffd9c105a20',
    '420': '0xE00545a7060AAF1278aAF28B7330e879A0976815', //
  },
  ONSRegistryWithFallback: {
    '1': '0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e',
    '3': '0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e',
    '4': '0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e',
    '5': '0x198AC64bb74146913d5a27229CD495CC2faDD5B4', // goerli
    '10': '0x198AC64bb74146913d5a27229CD495CC2faDD5B4',
    '420': '0xf81dC90085379ACC1B5c3C876F92A6cE55dB53F0', //
  },
  ONSRegistry: {
    '1': '0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e',
    '3': '0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e',
    '4': '0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e',
    '5': '0x198AC64bb74146913d5a27229CD495CC2faDD5B4', // goerli
    '10': '0x198AC64bb74146913d5a27229CD495CC2faDD5B4',
    '420': '0xf81dC90085379ACC1B5c3C876F92A6cE55dB53F0', //
  },
  ReverseRegistrar: {
    '1': '0x084b1c3C81545d370f3634392De611CaaBFf8148',
    '3': '0x806246b52f8cB61655d3038c58D2f63Aa55d4edE',
    '5': '0xd29E89c4151ca7972fC4665Ffe7B2a23357Bcbf7', // goerli
    '10': '0xd29E89c4151ca7972fC4665Ffe7B2a23357Bcbf7',
    '420': '0xeD9CF0954b15c70dcc87B90c9fcffc4C1F2C3EAD', //
  },
  UniversalResolver: {
    '1': '0x580AF46E06DaaD47eb5940526FD64d95b815Cb70',
    '3': '0x74e20bd2a1fe0cdbe45b9a1d89cb7e0a45b36376',
    '4': '0x74e20bd2a1fe0cdbe45b9a1d89cb7e0a45b36376',
    '5': '0x212D0282aA469F766108d9Bd770aEC70eBA91CbD', // goerli
    '10': '0xd06eb2aD389f09820894577d655cF033d2FDb376',
    '420': '0xB4cD223437CaFA7CC346DB45e581B5715EbC13cd', //
  },
  BulkRenewal: {
    '1': '0xfF252725f6122A92551A5FA9a6b6bf10eb0Be035',
    '3': '0x051b02245D826757EfaF5C6209D4D79FB39FBC45',
    '5': '0x65495fe08192fF1A503C89fF3Ccf21E0CA8Ce214', // goerli
    '10': '0x65495fe08192fF1A503C89fF3Ccf21E0CA8Ce214',
    '420': '0xF6b0D723c738efe52e335549Db017ED7cDD1fDeD', //
  }
};
const getContractAddress = (networkId) => (contractName) => {
  try {
    return typeof addresses[contractName] === "string" ? addresses[contractName] : addresses[contractName][networkId];
  } catch {
    throw new Error(
      `No address for contract ${contractName} on network ${networkId}`
    );
  }
};
