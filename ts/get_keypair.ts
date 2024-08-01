import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import "dotenv/config";

(async () => {
  const nemonic = process.env.KEYPAIR_PHRASE ?? "";
  const keyPair = Ed25519Keypair.deriveKeypair(nemonic);
  console.log(keyPair.getPublicKey().toSuiAddress());
})();
