'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DeveloperRoadmaps() {
  const roadmapCategories = [
    'Frontend', 'Backend', 'DevOps', 'Full Stack', 'AI Engineer', 'Data Analyst',
    'AI and Data Scientist', 'Android', 'iOS', 'PostgreSQL', 'Blockchain', 'QA',
    'Software Architect', 'Cyber Security', 'UX Design', 'Game Developer',
    'Technical Writer', 'MLOps', 'Developer Relations', 'Engineering Manager', 'Product Manager'
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-5">
      {/* Header */}
      <div className="text-center">
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm mb-4">
          WATCH Practice your skills with projects
        </button>
        <h1 className="text-4xl font-bold text-purple-400">Developer Roadmaps</h1>
        <p className="text-gray-400 max-w-2xl mt-2 text-center">
          roadmap.sh is a community effort to create roadmaps, guides and other educational content
          to help guide developers in picking up a path and guide their learnings.
        </p>
      </div>

      {/* Role-based Roadmaps */}
      <div className="relative flex items-center justify-center w-full max-w-5xl my-8">
        <div className="absolute w-screen h-px bg-gray-700"></div>
        <button className="relative px-6 py-2 bg-gray-800 text-gray-300 rounded-lg border border-gray-600 shadow-md">
          Role-based Roadmaps
        </button>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 w-full max-w-5xl px-4">
        {roadmapCategories.map((category, index) => (
          <Link key={index} href={`/roadmaps/${category.toLowerCase().replace(/\s+/g, '-')}`}>
            <div className="p-4 bg-gray-800 rounded-lg text-center cursor-pointer hover:bg-purple-600 transition">
              {category}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
