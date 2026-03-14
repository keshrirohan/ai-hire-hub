"use client";

import { useEffect, useState } from "react";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const res = await fetch("http://localhost:5000/api/projects/all");

    const data = await res.json();

    setProjects(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchProjects();
    };
    fetchData();
  }, []);

  const assignFreelancer = async (projectId, milestoneIndex) => {
    const freelancer = prompt("Enter freelancer name");

    if (!freelancer) return;

    await fetch("http://localhost:5000/api/milestones/assign", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        projectId,
        milestoneIndex,
        freelancer,
      }),
    });

    alert("Milestone Assigned");

    fetchProjects();
  };

  return (
    <div className="min-h-screen bg-[#09090b] py-16 px-4 sm:px-8 text-zinc-300">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-black text-white tracking-tight mb-3">
            Project Registry
          </h1>
          <p className="text-zinc-500 text-base">
            Manage and track active development cycles across your organization.
          </p>
        </div>

        {/* Project List */}
        <div className="space-y-10">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-[#121214] border border-white/5 rounded-2xl overflow-hidden shadow-2xl transition-all hover:border-zinc-700/50"
            >
              {/* Project Header Area */}
              <div className="p-8 border-b border-white/5 bg-gradient-to-r from-[#18181b] to-transparent">
                <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">
                  {project.title}
                </h2>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                  {project.idea}
                </p>
              </div>

              {/* Milestones Container */}
              <div className="p-8 space-y-6">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">
                    Active Milestones
                  </span>
                  <div className="h-px flex-1 bg-white/5" />
                </div>

                <div className="grid gap-4">
                  {project.milestones.map((m, index) => (
                    <div
                      key={index}
                      className="bg-[#18181b] border border-white/5 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors hover:bg-zinc-800/30"
                    >
                      <div className="space-y-1">
                        <p className="text-sm font-bold text-zinc-200 uppercase tracking-tight">
                          {m.title}
                        </p>
                        <div className="flex items-center gap-3 text-xs">
                          <span className="text-zinc-500">
                            Lead:{" "}
                            <span className="text-zinc-300 font-medium">
                              {m.assignedTo || "TBD"}
                            </span>
                          </span>
                          <span className="w-1 h-1 rounded-full bg-zinc-700" />
                          <div className="flex items-center gap-1.5">
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${m.status === "Completed" ? "bg-emerald-500" : "bg-amber-500"}`}
                            />
                            <span className="text-zinc-400 font-medium">
                              {m.status}
                            </span>
                          </div>
                        </div>
                      </div>

                      <button
                        className="whitespace-nowrap bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold px-4 py-2.5 rounded-lg border border-white/5 transition-all active:scale-95 shadow-sm"
                        onClick={() => assignFreelancer(project._id, index)}
                      >
                        Assign Lead
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
