"use client";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Link from "next/link"; // Import Link from Next.js

export default function SentinelLinearSearchDetails() {
  const codeString = `
    function sentinelLinearSearch(arr, target) {
      const n = arr.length;
      const last = arr[n - 1];
      arr[n - 1] = target; // Sentinel placed at the last index

      let i = 0;
      while (arr[i] !== target) {
        i++;
      }

      arr[n - 1] = last; // Restore the original last element

      if (i < n - 1 || arr[n - 1] === target) {
        return i; // Element found
      } else {
        return -1; // Element not found
      }
    }
  `;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-10 px-5">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
        Understanding Sentinel Linear Search
      </h1>

      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mb-6">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Sentinel Linear Search is an optimized version of the traditional
          linear search. It reduces the number of comparisons by placing a
          sentinel at the last position of the array, thus eliminating the need
          to check the bounds of the array in every iteration.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          How Sentinel Linear Search Works:
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          In this method, we place the target element as a sentinel at the end
          of the array. The search will continue until the target is found,
          either at its actual position or at the sentinel position. This
          technique avoids checking for array bounds in each iteration, making
          the algorithm slightly more efficient than a regular linear search.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Algorithm Steps:
        </h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>
            Place the target element at the last position of the array
            (sentinel).
          </li>
          <li>Start the search from the beginning of the array.</li>
          <li>Continue searching until the target is found.</li>
          <li>If found before the sentinel, return the index.</li>
          <li>
            Otherwise, check if the last element is the target (sentinel check).
          </li>
          <li>If found, return the index; otherwise, return -1.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Example:</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Let{`'`}s consider the following array:
        </p>
        <div className="flex justify-center mb-6">
          <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 flex justify-center space-x-2">
            {[4, 10, 15, 23, 31, 60].map((num, idx) => (
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
          If we search for the value 23, we will place a sentinel (target value)
          at the last index. Then, the search proceeds from the first element
          until the target is found, either in its actual position or at the
          sentinel.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Time Complexity:
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The time complexity of Sentinel Linear Search is O(n), where n is the
          number of elements in the array. Although it has the same time
          complexity as regular linear search, it is slightly faster in practice
          because it eliminates one comparison in each iteration.
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
          Use Cases of Sentinel Linear Search:
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>Searching in unsorted arrays or lists.</li>
          <li>
            Fast searching where the number of comparisons needs to be
            minimized.
          </li>
          <li>
            Useful when the dataset is small and needs a simple search method.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Advantages:
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          - Sentinel linear search is faster than a regular linear search as it
          eliminates the array bounds check.
          <br />- It is easy to implement and suitable for small or unsorted
          datasets.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Disadvantages:
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          - Sentinel linear search is not suitable for large datasets due to its
          O(n) time complexity.
          <br />- The search can be slow compared to more efficient algorithms
          like binary search for sorted arrays.
        </p>
      </div>

      {/* Button to redirect to the Sentinel Linear Search Simulator */}
      <div className="mb-6">
        <Link href="/search-algos/sentinel-linear-search">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            Go to Sentinel Linear Search Simulator
          </button>
        </Link>
      </div>
    </div>
  );
}
