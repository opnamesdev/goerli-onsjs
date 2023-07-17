import { BigNumber } from 'ethers';
import { ONSArgs } from '../index';
declare const _default: {
    raw: ({ contracts, multicallWrapper }: ONSArgs<"contracts" | "multicallWrapper">, nameOrNames: string | string[], duration: number, legacy?: boolean | undefined) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts, multicallWrapper }: ONSArgs<"contracts" | "multicallWrapper">, data: string, _nameOrNames: string | string[], _duration: number, legacy?: boolean | undefined) => Promise<{
        base: BigNumber;
        premium: BigNumber;
    }>;
};
export default _default;
