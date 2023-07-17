import { ONSArgs } from '../index';
type ContractOption = 'registrar' | 'nameWrapper';
type Args = {
    contract?: ContractOption;
};
declare const _default: {
    raw: (onsArgs: ONSArgs<"contracts" | "multicallWrapper">, name: string, { contract }?: Args) => Promise<{
        to: string;
        data: string;
    }>;
    decode: (onsArgs: ONSArgs<"contracts" | "multicallWrapper">, data: string, name: string, { contract }?: Args) => Promise<{
        expiry: Date;
        gracePeriod: null;
    } | {
        expiry: Date | null;
        gracePeriod: number;
    } | {
        expiry: null;
        gracePeriod: null;
    }>;
};
export default _default;
