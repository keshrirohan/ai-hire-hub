"use client";

import { useState } from "react";

export default function TrustPage() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const check = async () => {
    const res = await fetch("http://localhost:5000/api/trust/check", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ text }),
    });

    const data = await res.json();

    setResult(data);
  };

  return (
    <div className="min-h-screen bg-[#09090b] flex items-center justify-center p-4 sm:p-8 text-zinc-300">
      <div className="w-full max-w-3xl bg-[#121214] border border-white/5 rounded-2xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.6)] overflow-hidden">
        {/* Top Navigation-style Header */}
        <div className="px-8 py-5 border-b border-white/5 bg-[#18181b]/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/40" />
            </div>
            <h1 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] ml-2">
              Quality Assurance Module
            </h1>
          </div>
          <span className="text-[10px] font-mono text-zinc-600">
            v2.1.0-stable
          </span>
        </div>

        <div className="p-8 sm:p-10 space-y-8">
          {/* Input Section */}
          <div className="space-y-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-semibold text-white tracking-tight">
                Source Analysis
              </h2>
              <p className="text-sm text-zinc-500">
                Input proposal text or repository documentation for
                verification.
              </p>
            </div>

            <textarea
              placeholder="Paste freelancer proposal or GitHub description..."
              className="w-full h-48 bg-[#09090b] border border-white/5 rounded-xl p-5 text-zinc-300 text-sm focus:ring-1 focus:ring-zinc-500 outline-none transition-all placeholder:text-zinc-700 resize-none leading-relaxed font-mono"
              onChange={(e) => setText(e.target.value)}
            />

            <button
              className="w-full bg-zinc-100 hover:bg-white text-zinc-950 font-bold py-3.5 rounded-xl transition-all active:scale-[0.98] shadow-lg flex items-center justify-center gap-2 text-sm"
              onClick={check}
            >
              Run Diagnostic Check
            </button>
          </div>

          {/* Result Section */}
          {result && (
            <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-700">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">
                  Audit Report Generated
                </span>
                <div className="h-px flex-1 bg-emerald-500/10" />
              </div>

              <div className="bg-[#18181b] border border-emerald-500/10 rounded-xl p-6 shadow-inner">
                <pre className="whitespace-pre-wrap text-sm text-zinc-300 font-mono leading-7 selection:bg-emerald-500/20">
                  {result}
                </pre>
              </div>

              <div className="flex justify-center">
                <p className="text-[10px] text-zinc-600 font-medium">
                  Report finalized at {new Date().toLocaleTimeString()}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
