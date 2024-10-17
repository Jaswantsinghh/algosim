"use client";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Link from "next/link"; // Import Link from Next.js

export default function LinearSearchDetails() {
  const codeString = `
    function linearSearch(arr, target) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
          return i; // Element found
        }
      }
      return -1; // Element not found
    }
  `;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-10 px-5">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
        Understanding Linear Search
      </h1>

      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mb-6">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Linear Search is the simplest search algorithm. It works by
          sequentially checking each element of an array or list to see if it
          matches the target value. It continues until either the target is
          found or the entire array has been searched.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          How Linear Search Works:
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Linear Search starts at the first element of the array and compares it
          with the target value. If the target is found, the index of the
          element is returned. If not, it moves to the next element and repeats
          the process until either the target is found or the search is
          exhausted.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Algorithm Steps:
        </h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Start with the first element of the array.</li>
          <li>Compare the target value with the current element.</li>
          <li>If they match, return the index of the element.</li>
          <li>If the target is not found, move to the next element.</li>
          <li>
            Repeat the process until the target is found or the array ends.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Example:</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Let{`'`}s consider the following unsorted array:
        </p>
        <div className="flex justify-center mb-6">
          <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 flex justify-center space-x-2">
            {[10, 23, 31, 4, 60, 15].map((num, idx) => (
              <motion.div
                key={idx}
                className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded bg-gray-200"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {num}
              </motion.div>
            ))}
          </div>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          To search for the target value 23, we start by comparing it with the
          first element (10). Since 23 is not equal to 10, we move to the next
          element (23). Now that 23 matches, the search is complete, and we
          return the index 1.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Time Complexity:
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The time complexity of Linear Search is O(n), where n is the number of
          elements in the array. In the worst case, the algorithm needs to check
          every element in the array.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Code Implementation:
        </h2>
        <div className="w-full sm:w-4/5 md:w-2/3 lg:w-full p-4 bg-gray-900 text-white rounded-lg mb-6">
          <SyntaxHighlighter language="javascript" style={darcula}>
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>

      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Use Cases of Linear Search:
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>Searching in unsorted arrays or lists.</li>
          <li>Checking for the existence of a value in a small dataset.</li>
          <li>Used in problems where the dataset is small or unordered.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Advantages:
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          - Simple to understand and implement.
          <br />- Works on both sorted and unsorted datasets.
          <br />- No need for extra memory or sorting of data.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Disadvantages:
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          - Inefficient for large datasets, as it checks every element.
          <br />- Time complexity of O(n) can lead to performance issues for
          large arrays.
        </p>
      </div>

      {/* Button to redirect to the Linear Search Simulator */}
      <div className="mb-6">
        <Link href="/search-algos/linear-search">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            Go to Linear Search Simulator
          </button>
        </Link>
      </div>
    </div>
  );
}
