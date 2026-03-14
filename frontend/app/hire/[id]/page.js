"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function HirePage() {
  const { id } = useParams();
  const router = useRouter();

  const [project, setProject] = useState(null);

  // fake freelancer marketplace data
  const freelancers = [
    {
      name: "Rohan",
      skill: "Full Stack Developer",
      score: 9.2,
    },
    {
      name: "Alex",
      skill: "Backend Developer",
      score: 8.7,
    },
    {
      name: "Sarah",
      skill: "Frontend Developer",
      score: 8.5,
    },
    {
      name: "John",
      skill: "UI Designer",
      score: 8.9,
    },
  ];

  useEffect(() => {
    fetch("http://localhost:5000/api/projects/all")
      .then((res) => res.json())
      .then((data) => {
        const p = data.find((p) => p._id === id);

        setProject(p);
      });
  }, [id]);

  const hireFreelancer = async (freelancerName) => {
    await fetch("http://localhost:5000/api/milestones/assign", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        projectId: id,
        freelancer: freelancerName,
      }),
    });

    alert(`Freelancer ${freelancerName} hired for entire project`);

    router.push(`/workspace/${id}`);
  };

  if (!project) return <p className="p-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-[#09090b] py-12 px-4 sm:px-8 text-zinc-300">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 border-b border-white/5 pb-8">
          <div className="flex items-center gap-3 text-zinc-500 mb-2">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-zinc-800 px-2 py-0.5 rounded text-zinc-400">
              Hiring Phase
            </span>
          </div>
          <h1 className="text-4xl font-black text-white tracking-tight mb-2">
            Assign Experts
          </h1>
          <p className="text-zinc-500 text-lg">
            Project:{" "}
            <span className="text-zinc-200 font-medium">{project.title}</span>
          </p>
        </div>

        {/* Milestones Loop */}
        <div className="space-y-16">
          {project.milestones.map((milestone, index) => (
            <div
              key={index}
              className="animate-in fade-in slide-in-from-bottom-4 duration-700"
            >
              <div className="flex items-end justify-between mb-6 border-l-2 border-zinc-700 pl-4">
                <div>
                  <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">
                    Milestone 0{index + 1}
                  </h3>
                  <h2 className="text-2xl font-bold text-zinc-100">
                    {milestone.title}
                  </h2>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-zinc-500 block mb-1 uppercase">
                    Currently Assigned
                  </span>
                  <span className="text-sm font-medium text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                    {milestone.assignedTo || "Unassigned"}
                  </span>
                </div>
              </div>

              {/* Freelancer Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {freelancers.map((f, i) => (
                  <div
                    key={i}
                    className="bg-[#121214] border border-white/5 rounded-2xl p-6 hover:border-zinc-500 transition-all duration-300 group shadow-lg"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                          {f.name}
                        </h4>
                        <p className="text-sm text-zinc-500 font-medium tracking-tight">
                          {f.skill}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] font-bold text-zinc-600 uppercase mb-1">
                          Expert Score
                        </div>
                        <span className="text-xl font-mono font-bold text-emerald-500">
                          {f.score}%
                        </span>
                      </div>
                    </div>

                    <div className="h-px bg-white/5 w-full my-4" />

                    <button
                      className="w-full bg-zinc-100 hover:bg-white text-zinc-950 font-bold py-2.5 rounded-xl transition-all active:scale-[0.97] text-sm shadow-sm flex items-center justify-center gap-2"
                      onClick={() => hireFreelancer(f.name)}
                    >
                      Confirm Selection
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
