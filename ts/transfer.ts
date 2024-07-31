import { Transaction } from "@mysten/sui/transactions";

// TODO
(async () => {
  const tx = new Transaction();
  const [coin] = tx.splitCoins(tx.gas, [100]);

  console.log(tx);
  console.log(coin);
})();
