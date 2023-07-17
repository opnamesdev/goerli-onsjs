import { ONSArgs } from '..';
declare const _default: {
    raw: ({ contracts }: ONSArgs<"contracts">, name: string) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts }: ONSArgs<"contracts">, data: string) => Promise<boolean | undefined>;
};
export default _default;
