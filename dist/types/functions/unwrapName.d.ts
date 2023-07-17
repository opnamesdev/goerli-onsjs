import { ONSArgs } from '../index';
export default function ({ contracts, signer }: ONSArgs<'contracts' | 'signer'>, name: string, { newController, newRegistrant, }: {
    newController: string;
    newRegistrant?: string;
}): Promise<import("ethers").PopulatedTransaction>;
