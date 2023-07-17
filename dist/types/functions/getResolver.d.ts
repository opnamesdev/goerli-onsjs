import { ONSArgs } from '../index';
declare const _default: {
    raw: ({ contracts }: ONSArgs<"contracts">, name: string) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts }: ONSArgs<"contracts">, data: string) => Promise<any>;
};
export default _default;
