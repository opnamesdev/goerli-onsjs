import { ethers } from 'ethers';
import { ONSArgs } from '../index';
type Args = {
    contract: 'registry' | 'nameWrapper';
};
export default function ({ contracts, signer }: ONSArgs<'contracts' | 'signer' | 'getExpiry'>, name: string, { contract }: Args): Promise<ethers.PopulatedTransaction>;
export {};
