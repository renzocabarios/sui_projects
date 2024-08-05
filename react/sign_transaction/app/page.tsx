"use client";
import {
  ConnectButton,
  useCurrentAccount,
  useSignAndExecuteTransaction,
} from "@mysten/dapp-kit";
import { Transaction } from "@mysten/sui/transactions";
import { useState } from "react";

export default function Home() {
  const { mutate: signAndExecuteTransaction } = useSignAndExecuteTransaction();
  const [digest, setDigest] = useState("");
  const currentAccount = useCurrentAccount();

  return (
    <main className="flex min-h-screen flex-col relative">
      <div className="sticky top-0 right-0 bg-slate-200 w-full flex items-center justify-between p-4">
        <p className="text-2xl font-medium">SUI Scaffold</p>
        <ConnectButton />
      </div>

      <div className="flex flex-col gap-4 items-center justify-center min-h-[70vh]">
        {currentAccount && (
          <>
            <div>
              <button
                className="p-4 bg-slate-500 rounded-2xl text-white"
                onClick={() => {
                  signAndExecuteTransaction(
                    {
                      transaction: new Transaction(),
                      chain: "sui:devnet",
                    },
                    {
                      onSuccess: (result) => {
                        console.log("executed transaction", result);
                        setDigest(result.digest);
                      },
                      onError: (error, variables, context) => {
                        console.log(error, variables, context);
                      },
                    }
                  );
                }}
              >
                Sign and execute transaction
              </button>
            </div>
            <div>Digest: {digest}</div>
          </>
        )}
      </div>
    </main>
  );
}
