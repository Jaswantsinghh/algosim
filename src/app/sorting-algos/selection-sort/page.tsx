"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Link from "next/link"; // Import Link for navigation

export default function SelectionSort() {
  const [array, setArray] = useState<number[]>([29, 10, 14, 37, 13]);
  const [newArray, setNewArray] = useState(""); // State for new array input
  const [currentIndex, setCurrentIndex] = useState(-1); // Tracks the current index in the sorting process
  const [minIndex, setMinIndex] = useState(-1); // Tracks the minimum index in the current iteration
  const [sortedIndex, setSortedIndex] = useState(-1); // Tracks the sorted part of the array
  const [steps, setSteps] = useState<string[]>([]); // To track algorithm steps
  const [sorting, setSorting] = useState(false); // Flag to indicate if sorting is ongoing
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null); // Store the interval ID

  const resetSort = () => {
    setCurrentIndex(-1);
    setMinIndex(-1);
    setSortedIndex(-1);
    setSteps([]);
    setSorting(false);
    if (intervalId) clearInterval(intervalId); // Clear interval if sorting is reset
  };

  // Handle selection sort logic
  const handleSelectionSort = () => {
    resetSort();
    setSorting(true);

    let i = 0;
    let j = i + 1;
    const localArray = [...array];
    let minIdx = i;

    const step = () => {
      if (i < localArray.length - 1) {
        if (j < localArray.length) {
          if (localArray[j] < localArray[minIdx]) {
            minIdx = j;
          }
          setSteps((prevSteps) => [
            ...prevSteps,
            `Comparing: array[${j}] = ${localArray[j]} with current min array[${minIdx}] = ${localArray[minIdx]}`,
          ]);
          j++;
          setCurrentIndex(j);
          setMinIndex(minIdx);
        } else {
          // Swap the minimum element with the first unsorted element
          [localArray[i], localArray[minIdx]] = [
            localArray[minIdx],
            localArray[i],
          ];
          setArray(localArray);
          setSteps((prevSteps) => [
            ...prevSteps,
            `Swapping: array[${i}] = ${localArray[i]} with array[${minIdx}] = ${localArray[minIdx]}`,
          ]);
          setSortedIndex(i);
          i++;
          j = i + 1;
          minIdx = i;
        }
      } else {
        clearInterval(intervalId!); // Stop sorting once finished
        setSorting(false);
      }
    };

    const id = setInterval(step, 1000); // Step every 1 second
    setIntervalId(id);
  };

  // Handle new array input and conversion to number array
  const handleArrayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputArray = e.target.value
      .split(",")
      .map((num) => Number(num.trim()));
    setArray(inputArray);
    setNewArray(e.target.value);
    resetSort(); // Reset sorting when a new array is entered
  };

  const codeString = `
    function selectionSort(arr) {
      for (let i = 0; i < arr.length - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] < arr[minIdx]) {
            minIdx = j;
          }
        }
        // Swap the minimum element with the first element
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      }
    }
  `;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 px-5">
      <div className="flex items-center mb-6">
        <h1 className="text-3xl font-bold text-center mr-4">
          Selection Sort Simulator
        </h1>
        <Link href="/learn/sorting-algos/selection-sort">
          <button className="flex items-center bg-blue-500 text-white py-1 px-3 rounded-md shadow-sm hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 text-sm">
            <i className="fa fa-info-circle mr-1"></i>
            <span>Learn</span>
          </button>
        </Link>
      </div>

      {/* Array Input Section */}
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/4 mb-6">
        <input
          type="text"
          className="border border-gray-300 p-2 rounded-md w-full"
          placeholder="Enter comma-separated array values"
          value={newArray}
          onChange={handleArrayChange}
        />
      </div>

      {/* Instruction Note */}
      <div className="text-sm text-gray-600 mb-6 w-full sm:w-3/4 md:w-1/2 lg:w-1/4">
        <p className="text-center">
          Note: The array will be sorted step by step.
        </p>
      </div>

      {/* Array Display */}
      <div className="flex flex-wrap justify-center gap-4 mb-6 w-full relative">
        {array.map((num, idx) => {
          // Conditional classes for borders based on pointer state
          let borderColor = "border-gray-200"; // Default border color
          if (idx === currentIndex) borderColor = "border-blue-500";
          if (idx === minIndex) borderColor = "border-red-500";
          if (idx <= sortedIndex) borderColor = "border-green-500";

          return (
            <motion.div
              key={idx}
              className={`w-12 h-12 flex items-center justify-center border ${borderColor} rounded ${
                idx <= sortedIndex ? "bg-green-500 text-white" : "bg-gray-200"
              }`}
              initial={{ scale: 0.8 }}
              animate={{
                scale: idx === currentIndex || idx === minIndex ? 1.1 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              {num}
            </motion.div>
          );
        })}
      </div>

      {/* Start Sorting Button */}
      <div className="flex justify-center mb-6 w-full">
        <button
          className="bg-blue-500 text-white p-2 rounded-md"
          onClick={handleSelectionSort}
          disabled={sorting}
        >
          {sorting ? "Sorting..." : "Start Selection Sort"}
        </button>
      </div>

      {/* Algorithm Steps */}
      {steps.length > 0 && (
        <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/2 p-4 bg-gray-200 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-2">Algorithm Steps:</h3>
          <ul>
            {steps.map((step, index) => (
              <li key={index} className="mb-2">
                {step}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Code Highlight */}
      <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/2 p-4 bg-gray-900 text-white rounded-lg">
        <SyntaxHighlighter language="javascript" style={darcula}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
