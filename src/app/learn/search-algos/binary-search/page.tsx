"use client";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Link from "next/link"; // Import Link from Next.js

export default function BinarySearchDetails() {
  const codeString = `
    function binarySearch(arr, target) {
      let low = 0;
      let high = arr.length - 1;

      while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
          return mid; // Element found
        }
        if (arr[mid] < target) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }
      return -1; // Element not found
    }
  `;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-10 px-5">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
        Understanding Binary Search
      </h1>

      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mb-6">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Binary Search is a fast search algorithm that works on sorted arrays
          or lists. It is a divide-and-conquer algorithm that repeatedly divides
          the search interval in half. The key idea is to reduce the search
          space by half after every comparison, making it much more efficient
          than linear search.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          How Binary Search Works:
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Binary Search begins by comparing the target element with the middle
          element of the array. If the target is equal to the middle element,
          the search is complete. If the target is smaller, the search continues
          in the left half; if the target is larger, the search continues in the
          right half. This process is repeated until the element is found or the
          search interval is empty.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Algorithm Steps:
        </h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Start with the middle element of the array.</li>
          <li>Compare the target value with the middle element.</li>
          <li>
            If they match, the element is found, and you return the index.
          </li>
          <li>If the target is smaller, narrow the search to the left half.</li>
          <li>If the target is larger, narrow the search to the right half.</li>
          <li>
            Repeat the process until the element is found or the search interval
            is empty.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Example:</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Let{`'`}s consider the following sorted array:
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
          To search for the target value 23, we start by comparing it with the
          middle element (15). Since 23 is larger, we move to the right half of
          the array. Next, we compare 23 with the middle element of the right
          half (31). Since 23 is smaller, we move to the left half and find 23
          at index 3.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Time Complexity:
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The time complexity of Binary Search is O(log n), where n is the
          number of elements in the array. This is because the search interval
          is halved with each comparison, leading to a logarithmic time
          complexity.
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
          Use Cases of Binary Search:
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>Searching in sorted arrays or lists.</li>
          <li>
            Efficient searching in databases or data structures (e.g., binary
            search trees).
          </li>
          <li>
            Optimization problems such as finding the minimum or maximum values
            in a range.
          </li>
          <li>
            Finding elements in large datasets (e.g., machine learning models,
            large search engines).
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Advantages:
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          - Binary search is very efficient for large sorted datasets.
          <br />
          - Its time complexity of O(log n) makes it significantly faster than
          linear search for large arrays.
          <br />- It can be applied to many real-world problems where the data
          is sorted or needs to be sorted.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Disadvantages:
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          - Binary search requires the data to be sorted beforehand, which may
          involve extra computation.
          <br />- It is not ideal for searching in unsorted datasets, as sorting
          would introduce additional overhead.
        </p>
      </div>

      {/* Button to redirect to the Binary Search Simulator */}
      <div className="mb-6">
        <Link href="/search-algos/binary-search">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            Go to Binary Search Simulator
          </button>
        </Link>
      </div>
    </div>
  );
}
