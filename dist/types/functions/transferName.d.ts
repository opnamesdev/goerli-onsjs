import { ethers } from 'ethers';
import { ONSArgs } from '../index';
export default function ({ contracts, signer }: ONSArgs<'contracts' | 'signer'>, name: string, { newOwner, contract, reclaim, }: {
    newOwner: string;
    contract: 'registry' | 'nameWrapper' | 'baseRegistrar';
    reclaim?: boolean;
}): Promise<ethers.PopulatedTransaction>;
