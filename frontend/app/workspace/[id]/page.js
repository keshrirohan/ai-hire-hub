"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function WorkspacePage() {
  const { id } = useParams();

  const [project, setProject] = useState(null);

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/projects/all")
      .then((res) => res.json())

      .then((data) => {
        const p = data.find((p) => p._id === id);

        setProject(p);
      });
  }, []);

  const sendMessage = () => {
    if (!input) return;

    const newMessage = {
      text: input,
      sender: "Client",
    };

    setMessages([...messages, newMessage]);

    setInput("");
  };

  if (!project) return <p className="p-10">Loading workspace...</p>;

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-300 font-sans p-6 lg:p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LEFT PANEL: Project Details */}
        <div className="lg:col-span-7 space-y-8">
          <div className="border-b border-white/5 pb-6">
            <div className="flex items-center gap-2 mb-2 text-indigo-400">
              <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Active Workspace
              </span>
            </div>
            <h1 className="text-4xl font-black text-white tracking-tight leading-none mb-3">
              {project.title}
            </h1>
            <p className="text-zinc-500 text-sm max-w-md italic">
              Infrastructure and milestone tracking environment.
            </p>
          </div>

          <div className="space-y-4 max-h-[calc(100vh-250px)] overflow-y-auto pr-2 custom-scrollbar">
            {project.milestones.map((m, index) => (
              <div
                key={index}
                className="bg-[#121214] border border-white/5 rounded-2xl p-6 transition-all hover:bg-[#18181b]"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-white text-lg tracking-tight leading-tight">
                    {m.title}
                  </h3>
                  <span
                    className={`text-[10px] font-bold px-2 py-1 rounded border ${
                      m.status === "Completed"
                        ? "border-emerald-500/20 text-emerald-500 bg-emerald-500/5"
                        : "border-zinc-700 text-zinc-500 bg-zinc-800/50"
                    }`}
                  >
                    {m.status.toUpperCase()}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="space-y-1">
                    <p className="text-zinc-600 font-medium uppercase tracking-tighter">
                      Freelancer
                    </p>
                    <p className="text-zinc-200 font-mono">
                      {m.assignedTo || "Unassigned"}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-zinc-600 font-medium uppercase tracking-tighter">
                      Timeline
                    </p>
                    <p className="text-zinc-200 font-mono">5 Days Remaining</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL: Chat Panel */}
        <div className="lg:col-span-5 flex flex-col h-[calc(100vh-80px)] bg-[#121214] border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-white/5 bg-[#18181b]/50">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              Project Chat
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </h2>
          </div>

          {/* Message Feed */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#0c0c0e]/50 custom-scrollbar">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex flex-col ${m.sender === "You" ? "items-end" : "items-start"}`}
              >
                <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-1 px-1">
                  {m.sender}
                </span>
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    m.sender === "You"
                      ? "bg-zinc-100 text-zinc-950 font-medium rounded-tr-none"
                      : "bg-[#18181b] border border-white/5 text-zinc-300 rounded-tl-none"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-6 bg-[#18181b]/50 border-t border-white/5">
            <div className="flex gap-2">
              <input
                className="flex-1 bg-[#09090b] border border-white/10 rounded-xl px-4 py-3 text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-500 transition-all placeholder:text-zinc-700"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                className="bg-zinc-100 hover:bg-white text-zinc-950 px-6 py-3 rounded-xl font-bold text-sm transition-all active:scale-95 shadow-lg shadow-white/5"
                onClick={sendMessage}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
