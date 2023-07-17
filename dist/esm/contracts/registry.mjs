// src/contracts/registry.ts
import { ONSRegistry__factory } from "../generated/factories/ONSRegistry__factory.mjs";
var registry_default = (provider, address) => ONSRegistry__factory.connect(address, provider);
export {
  registry_default as default
};
