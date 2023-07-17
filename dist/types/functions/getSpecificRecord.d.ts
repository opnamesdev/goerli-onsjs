import { ONSArgs } from '../index';
export declare const _getContentHash: {
    raw: ({ contracts }: ONSArgs<'contracts'>, name: string) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts }: ONSArgs<'contracts'>, data: string) => Promise<{
        protocolType?: undefined;
        decoded?: undefined;
        error?: undefined;
    } | {
        protocolType: null;
        decoded: any;
        error?: undefined;
    } | {
        protocolType: string | undefined;
        decoded: any;
        error: any;
    } | undefined>;
};
export declare const getContentHash: {
    raw: ({ contracts, universalWrapper }: ONSArgs<'contracts' | 'universalWrapper'>, name: string) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts, universalWrapper }: ONSArgs<'contracts' | 'universalWrapper'>, data: string) => Promise<{
        protocolType?: undefined;
        decoded?: undefined;
        error?: undefined;
    } | {
        protocolType: null;
        decoded: any;
        error?: undefined;
    } | {
        protocolType: string | undefined;
        decoded: any;
        error: any;
    } | undefined>;
};
export declare const _getText: {
    raw: ({ contracts }: ONSArgs<'contracts'>, name: string, key: string) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts }: ONSArgs<'contracts'>, data: string) => Promise<string | undefined>;
};
export declare const getText: {
    raw: ({ contracts, universalWrapper }: ONSArgs<'contracts' | 'universalWrapper'>, name: string, key: string) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts, universalWrapper }: ONSArgs<'contracts' | 'universalWrapper'>, data: string) => Promise<string | undefined>;
};
export declare const _getAddr: {
    raw: ({ contracts }: ONSArgs<'contracts'>, name: string, coinType?: string | number, bypassFormat?: boolean) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts }: ONSArgs<'contracts'>, data: string, _name: string, coinType?: string | number) => Promise<string | {
        coin: string;
        addr: string;
    } | undefined>;
};
export declare const getAddr: {
    raw: ({ contracts, universalWrapper }: ONSArgs<'contracts' | 'universalWrapper'>, name: string, coinType?: string | number) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts, universalWrapper }: ONSArgs<'contracts' | 'universalWrapper'>, data: string, _name: string, coinType?: string | number) => Promise<string | {
        coin: string;
        addr: string;
    } | undefined>;
};
