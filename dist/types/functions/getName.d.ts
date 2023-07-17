import { ONSArgs } from '../index';
declare const _default: {
    raw: ({ contracts }: ONSArgs<"contracts">, address: string) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts }: ONSArgs<"contracts">, data: string, address: string) => Promise<{
        name: undefined;
        match?: undefined;
        reverseResolverAddress?: undefined;
        resolverAddress?: undefined;
    } | {
        name: any;
        match: boolean;
        reverseResolverAddress: any;
        resolverAddress: any;
    }>;
};
export default _default;
