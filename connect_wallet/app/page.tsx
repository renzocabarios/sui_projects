"use client";
import { ConnectButton } from "@mysten/dapp-kit";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative">
      <div className="sticky top-0 right-0 bg-slate-200 w-full flex items-center justify-between p-4">
        <p className="text-2xl font-medium">SUI Scaffold</p>
        <ConnectButton />
      </div>
    </main>
  );
}
