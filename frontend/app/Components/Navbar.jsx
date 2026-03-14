"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [wallet, setWallet] = useState(500);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#09090b] border-b border-white/5 sticky top-0 z-50 backdrop-blur-md">
      {/* LEFT: Logo */}
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="w-8 h-8 bg-zinc-100 rounded-lg flex items-center justify-center transition-transform group-hover:rotate-6">
          <div className="w-4 h-4 bg-zinc-950 rounded-sm" />
        </div>
        <span className="text-xl font-black tracking-tighter text-white">
          AI Hire <span className="text-zinc-500 font-light italic">Hub</span>
        </span>
      </div>

      {/* CENTER: Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        {[
          { name: "Home", href: "/" },
          { name: "Projects", href: "/projects" },
          { name: "Create Project", href: "/ai" },
        ].map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-zinc-400 hover:text-white text-sm font-medium transition-colors duration-200"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* RIGHT: Wallet & User */}
      <div className="flex items-center gap-4">
        <div className="flex items-center bg-zinc-900 border border-white/5 pl-4 pr-1 py-1 rounded-full shadow-inner">
          <Link href="/wallet">
            <span className="text-zinc-100 font-mono text-xs font-bold tracking-tight cursor-pointer hover:text-indigo-400 transition-colors">
              ₹{wallet.toLocaleString()}
            </span>
          </Link>

          <Link href="/wallet">
            <button className="ml-3 bg-zinc-100 hover:bg-white text-zinc-950 w-6 h-6 rounded-full flex items-center justify-center transition-all active:scale-90 shadow-sm">
              <span className="text-lg leading-none font-bold">+</span>
            </button>
          </Link>
        </div>

        {/* User Avatar Placeholder */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 border border-white/10 hidden sm:block shadow-lg" />
      </div>
    </nav>
  );
}
