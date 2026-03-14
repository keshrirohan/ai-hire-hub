import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[90vh] bg-[#09090b] flex flex-col items-center justify-center p-6 relative overflow-hidden">
  
  {/* Subtitle / Badge */}
  <div className="animate-in fade-in slide-in-from-top-4 duration-1000">
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-6">
      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
      The Future of Freelancing
    </span>
  </div>

  {/* Main Heading */}
  <div className="text-center max-w-3xl relative z-10 animate-in fade-in zoom-in duration-700">
    <h1 className="text-6xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-[0.9]">
      AI Hire <span className="text-zinc-500 font-light italic">Hub</span>
    </h1>
    
    <p className="text-zinc-500 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
      Architect your vision with precision. Our AI-powered engine plans, 
      vets, and manages your projects from concept to execution.
    </p>

    {/* Action Buttons */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Link href="/ai">
        <button className="w-full sm:w-auto bg-zinc-100 hover:bg-white text-zinc-950 px-8 py-4 rounded-xl font-bold transition-all active:scale-95 shadow-xl shadow-white/5 flex items-center justify-center gap-2">
          Create Project
          <span className="text-lg">→</span>
        </button>
      </Link>

      <Link href="/projects">
        <button className="w-full sm:w-auto bg-transparent border border-zinc-800 hover:border-zinc-600 text-zinc-300 px-8 py-4 rounded-xl font-bold transition-all active:scale-95">
          View Projects
        </button>
      </Link>

      <Link href="/trust">
        <button className="w-full sm:w-auto bg-zinc-900/50 hover:bg-zinc-800 border border-indigo-500/20 text-indigo-400 px-8 py-4 rounded-xl font-bold transition-all active:scale-95 flex items-center justify-center gap-2">
          Check Freelancer
        </button>
      </Link>
    </div>
  </div>

  {/* Visual Background Elements (Subtle Glows) */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
</div>
  );
}
