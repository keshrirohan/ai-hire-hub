"use client";
import { useState } from "react";

export default function Chat() {
  const [idea, setIdea] = useState("");
  const [response, setResponse] = useState("");

  const generate = async () => {
    const res = await fetch("http://localhost:5000/api/ai/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idea }),
    });

    const data = await res.json();

    setResponse(data);
  };

  return (
    <div className="min-h-screen bg-[#09090b] flex items-center justify-center p-6 text-zinc-400 font-sans">
      <div className="w-full max-w-xl bg-[#121214] border border-zinc-800 rounded-xl shadow-2xl overflow-hidden">
        {/* Minimalist Header */}
        <div className="px-6 py-4 border-b border-zinc-800 bg-[#18181b]/50 flex justify-between items-center">
          <h1 className="text-sm font-medium text-zinc-100 uppercase tracking-tight">
            Project Scoper
          </h1>
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-zinc-800" />
            <div className="w-2 h-2 rounded-full bg-zinc-800" />
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Input Group */}
          <div className="space-y-4">
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                className="flex-1 bg-[#18181b] border border-zinc-800 rounded-lg px-4 py-2.5 text-zinc-200 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 transition-all placeholder:text-zinc-600"
                placeholder="Describe your project idea..."
                onChange={(e) => setIdea(e.target.value)}
              />
              <button
                className="bg-zinc-100 hover:bg-white text-zinc-950 text-sm font-semibold px-5 py-2.5 rounded-lg transition-all active:scale-[0.97]"
                onClick={generate}
              >
                Generate
              </button>
            </div>
          </div>

          {/* Response Area */}
          {response && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">
                  Analysis Output
                </span>
                <div className="h-[1px] flex-1 bg-zinc-800" />
              </div>

              <div className="bg-[#18181b]/30 border border-zinc-800/50 rounded-lg p-5">
                <p className="text-sm text-zinc-300 leading-relaxed whitespace-pre-wrap">
                  {response}
                </p>
              </div>

              {/* Secondary Action */}
              <button
                className="w-full bg-transparent border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 text-zinc-200 text-sm font-medium py-3 rounded-lg transition-all flex items-center justify-center gap-2"
                onClick={saveProject}
              >
                Save Specification
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
