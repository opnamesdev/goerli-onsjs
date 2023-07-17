// src/functions/getExpiry.ts
import { solidityKeccak256 } from "ethers/lib/utils.js";
import { namehash } from "../utils/normalise.mjs";
var getRegistrarExpiry = async ({ contracts, multicallWrapper }, labels) => {
  if (labels.length > 2 || labels[1] !== "op") {
    throw new Error("Only .op names have expiry dates on the registrar");
  }
  const baseRegistrar = await contracts?.getBaseRegistrar();
  const expiryCall = baseRegistrar.interface.encodeFunctionData("nameExpires", [
    solidityKeccak256(["string"], [labels[0]])
  ]);
  const gracePeriodCall = baseRegistrar.interface.encodeFunctionData("GRACE_PERIOD");
  return multicallWrapper.raw([
    {
      to: baseRegistrar.address,
      data: expiryCall
    },
    {
      to: baseRegistrar.address,
      data: gracePeriodCall
    }
  ]);
};
var getWrapperExpiry = async ({ contracts }, labels) => {
  const nameWrapper = await contracts?.getNameWrapper();
  const expiryCall = nameWrapper.interface.encodeFunctionData("getData", [
    namehash(labels.join("."))
  ]);
  return {
    to: nameWrapper.address,
    data: expiryCall
  };
};
var getContractToUse = (contract, labels) => {
  if (contract)
    return contract;
  if (labels.length === 2 && labels[1] === "op") {
    return "registrar";
  }
  return "nameWrapper";
};
var raw = async (onsArgs, name, { contract } = {}) => {
  const labels = name.split(".");
  const contractToUse = getContractToUse(contract, labels);
  return contractToUse === "nameWrapper" ? getWrapperExpiry(onsArgs, labels) : getRegistrarExpiry(onsArgs, labels);
};
var decodeRegistrarExpiry = async ({ contracts, multicallWrapper }, data) => {
  const result = await multicallWrapper.decode(data);
  const baseRegistrar = await contracts?.getBaseRegistrar();
  try {
    const [nameExpires] = baseRegistrar.interface.decodeFunctionResult(
      "nameExpires",
      result[0].returnData
    );
    const [gracePeriod] = baseRegistrar.interface.decodeFunctionResult(
      "GRACE_PERIOD",
      result[1].returnData
    );
    return {
      expiry: nameExpires > 0 ? new Date(nameExpires * 1e3) : null,
      gracePeriod: gracePeriod.toNumber() * 1e3
    };
  } catch {
    return {
      expiry: null,
      gracePeriod: null
    };
  }
};
var decodeWrapperExpiry = async ({ contracts }, data) => {
  const nameWrapper = await contracts?.getNameWrapper();
  try {
    const [, , expiry] = nameWrapper.interface.decodeFunctionResult(
      "getData",
      data
    );
    return {
      expiry: new Date(expiry * 1e3),
      gracePeriod: null
    };
  } catch {
    return {
      expiry: null,
      gracePeriod: null
    };
  }
};
var decode = async (onsArgs, data, name, { contract } = {}) => {
  if (data === null) {
    return {
      expiry: null,
      gracePeriod: null
    };
  }
  const labels = name.split(".");
  const contractToUse = getContractToUse(contract, labels);
  return contractToUse === "nameWrapper" ? decodeWrapperExpiry(onsArgs, data) : decodeRegistrarExpiry(onsArgs, data);
};
var getExpiry_default = {
  raw,
  decode
};
export {
  getExpiry_default as default
};
