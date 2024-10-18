"use client";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Link from "next/link"; // Import Link from Next.js

export default function BubbleSortDetails() {
  const codeString = `
    function bubbleSort(arr) {
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
            // Swap the elements
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
        }
      }
    }
  `;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-10 px-5">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
        Understanding Bubble Sort
      </h1>

      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mb-6">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Bubble Sort is a simple comparison-based sorting algorithm. It works
          by repeatedly stepping through the list, comparing adjacent elements,
          and swapping them if they are in the wrong order. The algorithm
          continues iterating through the list until no more swaps are needed,
          meaning the array is sorted.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          How Bubble Sort Works:
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          In each pass through the list, the largest unsorted element{" "}
          {"bubbles"}
          to its correct position. This process is repeated for each remaining
          unsorted section of the array.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Algorithm Steps:
        </h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Start with the first element of the array.</li>
          <li>Compare the current element with the next one.</li>
          <li>If they are in the wrong order, swap them.</li>
          <li>
            Repeat the process for each element until no swaps are needed.
          </li>
          <li>
            After each pass, the largest element is in its correct position.
          </li>
          <li>
            Repeat the process for the remaining unsorted part of the array.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Example:</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Consider the following array:
        </p>
        <div className="flex justify-center mb-6">
          <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 flex justify-center space-x-2">
            {[29, 10, 14, 37, 13].map((num, idx) => (
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
          In the first pass, we compare 29 with 10 and swap them. The array now
          looks like:
        </p>
        <div className="flex justify-center mb-6">
          <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 flex justify-center space-x-2">
            {[10, 29, 14, 37, 13].map((num, idx) => (
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
          We continue to compare and swap until the array is sorted: [10, 13,
          14, 29, 37].
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Time Complexity:
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The time complexity of Bubble Sort is O(n²) in both the average and
          worst cases, where n is the number of elements in the array. This is
          because the algorithm compares each pair of adjacent elements in the
          array.
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
          Use Cases of Bubble Sort:
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>
            Sorting small datasets where simplicity is more important than
            efficiency.
          </li>
          <li>
            Suitable for educational purposes due to its simplicity and easy
            understanding.
          </li>
          <li>
            When the array is nearly sorted, Bubble Sort can perform very well.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Advantages:
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          - Simple and easy to implement.
          <br />
          - Stable sort (does not change the relative order of elements with
          equal values).
          <br />- Works well when the dataset is small or nearly sorted.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Disadvantages:
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          - Inefficient for large datasets with a time complexity of O(n²).
          <br />- Compared to algorithms like Quick Sort or Merge Sort, it is
          slower for larger datasets.
        </p>
      </div>

      {/* Button to redirect to the Bubble Sort Simulator */}
      <div className="mb-6">
        <Link href="/sorting-algos/bubble-sort">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            Go to Bubble Sort Simulator
          </button>
        </Link>
      </div>
    </div>
  );
}
