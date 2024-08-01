import { getFullnodeUrl, SuiClient } from "@mysten/sui/client";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { Transaction } from "@mysten/sui/transactions";
import "dotenv/config";

(async () => {
  const suiClient = new SuiClient({ url: getFullnodeUrl("testnet") });
  const keypair = getKeypair();

  const tx = new Transaction();
  const [coin] = tx.splitCoins(tx.gas, [100]);

  tx.transferObjects(
    [coin],
    "0xf690dd6c6f5885a0f57379b00671bd9f6a6c5b1b8190e553514572a4687d412e"
  );

  const result = await suiClient.signAndExecuteTransaction({
    signer: keypair,
    transaction: tx,
  });

  console.log(result);
})();

function getKeypair() {
  const nemonic = process.env.KEYPAIR_PHRASE ?? "";
  return Ed25519Keypair.deriveKeypair(nemonic);
}
