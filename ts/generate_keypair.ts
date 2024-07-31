import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";

(async () => {
  const keypair = new Ed25519Keypair();
  console.log(keypair);
})();
