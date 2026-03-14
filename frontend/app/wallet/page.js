"use client";

import { useState } from "react";

export default function WalletPage() {
  const [amount, setAmount] = useState("");
  const [success, setSuccess] = useState(false);

  const pay = () => {
    if (!amount) {
      alert("Enter amount");
      return;
    }

    setSuccess(true);
  };

  return (
    <div className="min-h-[80vh] bg-[#09090b] flex items-center justify-center p-6 text-zinc-300">
      <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-white tracking-tight">
            Recharge Wallet
          </h1>
          <p className="text-zinc-500 text-sm mt-2 font-medium uppercase tracking-widest">
            Secure Payment Portal
          </p>
        </div>

        {/* Recharge Card */}
        <div className="bg-[#121214] border border-white/5 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="text-6xl font-bold font-mono italic">₹</span>
          </div>

          <div className="relative z-10 space-y-6">
            <div>
              <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-3 ml-1">
                Amount to Add (INR)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 font-medium">
                  ₹
                </span>
                <input
                  type="number"
                  className="w-full bg-[#09090b] border border-white/10 rounded-2xl py-4 pl-10 pr-4 text-white text-xl font-mono focus:ring-1 focus:ring-zinc-400 focus:border-zinc-400 outline-none transition-all placeholder:text-zinc-800"
                  placeholder="0.00"
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            </div>

            <button
              className="w-full bg-zinc-100 hover:bg-white text-zinc-950 font-bold py-4 rounded-2xl transition-all active:scale-[0.98] shadow-lg shadow-white/5 flex items-center justify-center gap-2"
              onClick={pay}
            >
              Proceed to Payment
            </button>

            <p className="text-[10px] text-zinc-600 text-center uppercase tracking-tighter">
              Encrypted via 256-bit SSL security
            </p>
          </div>
        </div>

        {/* Success Message */}
        {success && (
          <div className="mt-6 bg-[#064e3b]/20 border border-emerald-500/20 p-6 rounded-3xl animate-in zoom-in-95 duration-500 flex items-center gap-4">
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <svg
                className="w-6 h-6 text-emerald-950"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <h2 className="font-bold text-white text-sm">
                Transfer Confirmed
              </h2>
              <p className="text-emerald-400 text-xs font-mono">
                ₹{amount} successfully added.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
