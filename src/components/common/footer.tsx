import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 ">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center">
        {/* Your Name & Description */}
        <p className="text-xl font-semibold mb-4">Jaswant Singh</p>
        <p className="text-sm mb-4">
          A passionate developer building projects to improve lives.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/jaswant-singh009/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Jaswantsinghh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            GitHub
          </a>
          <a
            href="mailto:jaswantsinghjsn@gmail.com"
            className="hover:text-green-500"
          >
            Email
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Jaswant Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
