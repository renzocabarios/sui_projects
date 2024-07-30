import { CoinBalance, getFullnodeUrl, SuiClient } from "@mysten/sui/client";
import { MIST_PER_SUI } from "@mysten/sui/utils";

const MY_ADDRESS =
  "0xfbb2095bc94f37d1635d07608101bf44528be017016d64de512d7645910f0244";
const suiClient = new SuiClient({ url: getFullnodeUrl("testnet") });

(async () => {
  const myCoins = await suiClient.getCoins({
    owner: MY_ADDRESS,
  });

  console.log("My Coins");
  console.log(myCoins);
})();
