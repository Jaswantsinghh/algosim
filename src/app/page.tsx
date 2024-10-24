"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white py-20 px-6 md:px-12 text-center overflow-hidden">
        {/* Techy Particle Background */}
        <div className="absolute top-0 left-0 w-full h-full particles-background z-0"></div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Welcome to AlgoSim
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            An Open Source Algorithm Simulator with Interactive Tutorials.
          </p>
          <Link href="/get-started">
            <button className="bg-yellow-400 text-black py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300">
              Get Started
            </button>
          </Link>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">
          What is AlgoSim?
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          AlgoSim is an open-source project that provides interactive
          simulations of popular algorithms. Learn, experiment, and contribute
          to the growing community of algorithm enthusiasts and developers.
        </p>
        <Link href="/about">
          <button className="bg-gray-800 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            Learn More
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-blue-500 mb-4">
              Interactive Simulations
            </h3>
            <p className="text-gray-700">
              Run simulations for various algorithms with visualizations to
              understand the process step-by-step.
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-blue-500 mb-4">
              Tutorials
            </h3>
            <p className="text-gray-700">
              Access comprehensive tutorials for every algorithm, designed to
              help you understand the theory and application.
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-blue-500 mb-4">
              Open Source
            </h3>
            <p className="text-gray-700">
              Contribute to the project and improve the platform. We welcome
              developers from all backgrounds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Algorithm Showcase Section */}
      <section className="py-20 bg-gray-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Explore Algorithms</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6">
          <motion.div
            className="bg-white text-blue-600 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-4">Sorting Algorithms</h3>
            <p className="mb-4">
              Explore the most common sorting algorithms like QuickSort,
              MergeSort, etc.
            </p>
            <Link href="/algorithms/sorting">
              <button className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                Start Exploring
              </button>
            </Link>
          </motion.div>
          <motion.div
            className="bg-white text-blue-600 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-4">Search Algorithms</h3>
            <p className="mb-4">
              Learn how different search algorithms work, including Binary
              Search and Linear Search.
            </p>
            <Link href="/algorithms/searching">
              <button className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                Start Exploring
              </button>
            </Link>
          </motion.div>
          <motion.div
            className="bg-white text-blue-600 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-4">Graph Algorithms</h3>
            <p className="mb-4">
              Understand the algorithms used to work with graphs, including DFS
              and BFS.
            </p>
            <Link href="/algorithms/graphs">
              <button className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                Start Exploring
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How to Contribute Section */}
      {/* <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">
          How to Contribute
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          AlgoSim is an open-source project, and we welcome contributions from
          developers and enthusiasts alike. Whether you{`'`}re fixing bugs,
          adding new features, or improving documentation, your contributions
          will make a big difference!
        </p>
        <Link href="/contribute">
          <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300">
            Contribute Now
          </button>
        </Link>
      </section> */}

      {/* Footer */}
    </div>
  );
}
