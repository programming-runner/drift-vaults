import { PublicKey } from '@solana/web3.js';
import * as anchor from '@coral-xyz/anchor';

export function getVaultAddressSync(
	programId: PublicKey,
	encodedName: number[]
) {
	return PublicKey.findProgramAddressSync(
		[
			Buffer.from(anchor.utils.bytes.utf8.encode('vault')),
			Buffer.from(encodedName),
		],
		programId
	)[0];
}

export function getVaultDepositorAddressSync(
	programId: PublicKey,
	vault: PublicKey
) {
	return PublicKey.findProgramAddressSync(
		[
			Buffer.from(anchor.utils.bytes.utf8.encode('vault_depositor')),
			vault.toBuffer(),
		],
		programId
	)[0];
}
