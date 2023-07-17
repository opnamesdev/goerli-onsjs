import { ONSArgs } from '../index';
import { FuseProps } from '../utils/fuses';
export default function ({ contracts, signer }: ONSArgs<'contracts' | 'signer'>, name: string, props: FuseProps): Promise<import("ethers").PopulatedTransaction>;
