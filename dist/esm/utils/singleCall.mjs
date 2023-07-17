// src/utils/singleCall.ts
var singleCall_default = async (provider, onsData, func, ...data) => func.raw(onsData, ...data).then((rawData) => provider.call({ ...rawData, ccipReadEnabled: true })).catch(() => null).then((ret) => func.decode(onsData, ret, ...data));
export {
  singleCall_default as default
};
