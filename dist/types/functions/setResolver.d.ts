import { ONSArgs } from '../index';
export default function ({ contracts, signer }: ONSArgs<'contracts' | 'signer'>, name: string, { contract, resolver, }: {
    contract: 'registry' | 'nameWrapper';
    resolver?: string;
}): Promise<import("ethers").PopulatedTransaction>;
