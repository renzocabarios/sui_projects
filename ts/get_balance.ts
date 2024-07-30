import { CoinBalance, getFullnodeUrl, SuiClient } from "@mysten/sui/client";
import { getFaucetHost, requestSuiFromFaucetV1 } from "@mysten/sui/faucet";
import { MIST_PER_SUI } from "@mysten/sui/utils";

const MY_ADDRESS =
  "0xfbb2095bc94f37d1635d07608101bf44528be017016d64de512d7645910f0244";
const suiClient = new SuiClient({ url: getFullnodeUrl("testnet") });

function balance(balance: CoinBalance) {
  return Number.parseInt(balance.totalBalance) / Number(MIST_PER_SUI);
}

(async () => {
  const walletBalance = await suiClient.getBalance({ owner: MY_ADDRESS });
  console.log(`${MY_ADDRESS} has a balance of`, balance(walletBalance));
})();
