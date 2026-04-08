"use client";

import { FaDownload } from "react-icons/fa";

export default function Resume() {
  return (
    <section
      id="resume"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-4xl w-full text-center space-y-6">

        <h2 className="text-4xl font-bold text-purple-400">
          Resume
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto">
          Download my resume to learn more about my skills, projects, and experience.
        </p>

        {/* DOWNLOAD BUTTON */}
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-3 px-8 py-4 
          bg-purple-600 hover:bg-purple-700 
          text-white rounded-xl 
          shadow-lg shadow-purple-500/40 hover:shadow-purple-500/70
          transition text-lg font-medium"
        >
          <FaDownload />
          Download CV
        </a>

        {/* OPTIONAL VIEW BUTTON */}
        <a
          href="/resume.pdf"
          target="_blank"
          className="block text-purple-400 hover:underline mt-2"
        >
          View Online
        </a>

      </div>
    </section>
  );
}