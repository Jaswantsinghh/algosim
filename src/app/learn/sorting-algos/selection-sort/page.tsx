"use client";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Link from "next/link"; // Import Link from Next.js

export default function SelectionSortDetails() {
  const codeString = `
    function selectionSort(arr) {
      for (let i = 0; i < arr.length - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] < arr[minIdx]) {
            minIdx = j;
          }
        }
        // Swap the found minimum element with the first element
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      }
    }
  `;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-10 px-5">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
        Understanding Selection Sort
      </h1>

      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mb-6">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Selection Sort is an in-place comparison sorting algorithm. It divides
          the input list into two parts: the sorted part at the left end and the
          unsorted part at the right end. Initially, the sorted part is empty,
          and the unsorted part is the entire list.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          How Selection Sort Works:
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          The algorithm repeatedly selects the smallest element from the
          unsorted part of the list, swaps it with the first unsorted element,
          and moves the boundary between the sorted and unsorted sections.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Algorithm Steps:
        </h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Find the smallest element in the unsorted part of the array.</li>
          <li>Swap it with the first unsorted element.</li>
          <li>
            Move the boundary of the sorted part one element to the right.
          </li>
          <li>Repeat the process until the entire array is sorted.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Example:</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Let{`'`}s consider the following array:
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
          In the first pass, we find the smallest element (10) and swap it with
          the first element (29). In the second pass, the next smallest element
          (13) is swapped with the second element. This process is repeated
          until the array is sorted.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Time Complexity:
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The time complexity of Selection Sort is O(n²) in both the average and
          worst cases, where n is the number of elements in the array. This is
          because, for each element, we search through the remaining unsorted
          part of the array.
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
          Use Cases of Selection Sort:
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>
            Sorting small datasets where simplicity is more important than
            efficiency.
          </li>
          <li>
            When memory space is limited since it performs sorting in place.
          </li>
          <li>
            Situations where swapping costs are minimal, and comparisons are
            expensive.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Advantages:
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          - Simple and easy to understand.
          <br />
          - Performs sorting in place, meaning no additional memory is required.
          <br />- Suitable for small datasets where performance is not a
          concern.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Disadvantages:
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          - Inefficient for large datasets with a time complexity of O(n²).
          <br />- More comparisons are required compared to other algorithms
          such as Quick Sort or Merge Sort.
        </p>
      </div>

      {/* Button to redirect to the Selection Sort Simulator */}
      <div className="mb-6">
        <Link href="/sorting-algos/selection-sort">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            Go to Selection Sort Simulator
          </button>
        </Link>
      </div>
    </div>
  );
}
