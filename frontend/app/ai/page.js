"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AIPage() {
  const router = useRouter();

  const [idea, setIdea] = useState("");
  const [result, setResult] = useState("");

  const generate = async () => {
    const res = await fetch("http://localhost:5000/api/ai/generate", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ idea }),
    });

    const data = await res.json();

    setResult(data);
  };

  const saveProject = async () => {
    if (!result) {
      alert("Generate the project plan first");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/projects/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: idea,
          idea: idea,
          milestones: result,
        }),
      });

      const data = await res.json();

      console.log("Project Saved:", data);

      // redirect to hire page
      window.location.href = `/hire/${data._id}`;
    } catch (error) {
      console.error(error);
      alert("Error saving project");
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] flex items-center justify-center p-4 sm:p-8 font-sans selection:bg-indigo-500/30">
      <div className="w-full max-w-2xl bg-[#121214] rounded-xl border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
        {/* Minimalist Tab Header */}
        <div className="flex items-center gap-4 px-6 py-4 border-b border-white/5 bg-[#18181b]/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-white/10" />
            <div className="w-3 h-3 rounded-full bg-white/10" />
            <div className="w-3 h-3 rounded-full bg-white/10" />
          </div>
          <span className="text-[11px] font-medium tracking-[0.2em] text-zinc-500 uppercase">
            Project Initialization
          </span>
        </div>

        <div className="p-6 sm:p-10 space-y-10">
          {/* Input Section */}
          <div className="space-y-4">
            <div className="space-y-1">
              <h2 className="text-xl font-semibold text-zinc-100 tracking-tight">
                Scope your project
              </h2>
              <p className="text-sm text-zinc-500">
                Briefly describe the core functionality and goals.
              </p>
            </div>

            <textarea
              rows={4}
              className="w-full bg-[#18181b] border border-white/10 rounded-lg p-4 text-zinc-200 focus:ring-1 focus:ring-zinc-400 focus:border-zinc-400 outline-none transition-all placeholder:text-zinc-700 resize-none text-sm leading-relaxed"
              placeholder="e.g., A real-time collaboration tool for remote designers..."
              onChange={(e) => setIdea(e.target.value)}
            />

            <button
              className="w-full bg-zinc-100 hover:bg-white text-zinc-950 font-semibold py-3 px-6 rounded-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2 text-sm"
              onClick={generate}
            >
              Generate Planning
            </button>
          </div>

          {/* Results Section */}
          {result && (
            <div className="space-y-4 animate-in fade-in duration-700">
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-zinc-400">
                  Architectural Roadmap
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-500 border border-white/5">
                  v1.0.4
                </span>
              </div>

              <div className="bg-[#18181b] border border-white/5 rounded-lg overflow-hidden">
                <div className="p-5 overflow-auto max-h-[300px] scrollbar-hide">
                  <pre className="text-sm text-zinc-300 font-mono whitespace-pre-wrap leading-7">
                    {result}
                  </pre>
                </div>
              </div>

              <button
                className="w-full bg-transparent border border-zinc-700 hover:border-zinc-400 hover:bg-zinc-800 text-zinc-100 font-medium py-3 px-6 rounded-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2 text-sm shadow-sm"
                onClick={saveProject}
              >
                Finalize & Save Project
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
