import { BatchFunctionResult, ONSArgs, RawFunction } from '../index';
declare const _default: {
    raw: ({ multicallWrapper }: ONSArgs<"multicallWrapper">, ...items: BatchFunctionResult<RawFunction>[]) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ multicallWrapper }: ONSArgs<"multicallWrapper">, data: string, ...items: BatchFunctionResult<RawFunction>[]) => Promise<any[] | undefined>;
};
export default _default;
