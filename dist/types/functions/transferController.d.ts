import { ethers } from 'ethers';
import { ONSArgs } from '../index';
export default function ({ contracts, signer }: ONSArgs<'contracts' | 'signer'>, name: string, { newOwner, isOwner, }: {
    newOwner: string;
    isOwner: boolean;
}): Promise<ethers.PopulatedTransaction>;
