import { BigNumber } from 'ethers';
import { ONSArgs } from '../index';
declare const _default: {
    raw: ({ contracts }: ONSArgs<"contracts">, name: string) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts }: ONSArgs<"contracts">, data: string) => Promise<{
        fuseObj: import("../utils/fuses").CurrentFuses;
        expiryDate: Date;
        rawFuses: BigNumber;
        owner: any;
    } | undefined>;
};
export default _default;
