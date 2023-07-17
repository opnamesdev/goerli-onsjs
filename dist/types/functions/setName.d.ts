import { ONSArgs } from '../index';
export default function ({ contracts, signer }: ONSArgs<'contracts' | 'signer'>, name: string, { address, resolver, }?: {
    address?: string;
    resolver?: string;
}): Promise<import("ethers").PopulatedTransaction>;
