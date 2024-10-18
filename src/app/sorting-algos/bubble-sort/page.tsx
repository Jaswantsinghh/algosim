"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Link from "next/link";

export default function BubbleSort() {
  const [array, setArray] = useState<number[]>([29, 10, 14, 37, 13]);
  const [newArray, setNewArray] = useState(""); // State for new array input
  const [currentIndex, setCurrentIndex] = useState(-1); // Tracks the current index in the sorting process
  const [swappingIndexes, setSwappingIndexes] = useState<number[]>([]); // Tracks the indexes being swapped
  const [sortedIndex, setSortedIndex] = useState(-1); // Tracks the sorted part of the array
  const [steps, setSteps] = useState<string[]>([]); // To track algorithm steps
  const [sorting, setSorting] = useState(false); // Flag to indicate if sorting is ongoing
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null); // Store the interval ID

  const resetSort = () => {
    setCurrentIndex(-1);
    setSwappingIndexes([]);
    setSortedIndex(-1);
    setSteps([]);
    setSorting(false);
    if (intervalId) clearInterval(intervalId); // Clear interval if sorting is reset
  };

  // Handle bubble sort logic
  const handleBubbleSort = () => {
    resetSort();
    setSorting(true);

    let i = 0;
    let j = 0;
    const localArray = [...array];

    const step = () => {
      if (i < localArray.length) {
        if (j < localArray.length - i - 1) {
          if (localArray[j] > localArray[j + 1]) {
            setSwappingIndexes([j, j + 1]);
            // Swap the elements
            [localArray[j], localArray[j + 1]] = [
              localArray[j + 1],
              localArray[j],
            ];
            setArray(localArray);
            setSteps((prevSteps) => [
              ...prevSteps,
              `Swapping: array[${j}] = ${localArray[j]} with array[${
                j + 1
              }] = ${localArray[j + 1]}`,
            ]);
          }
          j++;
          setCurrentIndex(j);
        } else {
          setSortedIndex(i);
          i++;
          j = 0;
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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 px-5">
      <div className="flex items-center mb-6">
        <h1 className="text-3xl font-bold text-center mr-4">
          Bubble Sort Simulator
        </h1>
        <Link href="/learn/sorting-algos/bubble-sort">
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
          if (swappingIndexes.includes(idx)) borderColor = "border-red-500";
          if (idx <= sortedIndex) borderColor = "border-green-500";

          return (
            <motion.div
              key={idx}
              className={`w-12 h-12 flex items-center justify-center border ${borderColor} rounded ${
                idx <= sortedIndex ? "bg-green-500 text-white" : "bg-gray-200"
              }`}
              initial={{ scale: 0.8 }}
              animate={{
                scale: swappingIndexes.includes(idx) ? 1.2 : 1,
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
          onClick={handleBubbleSort}
          disabled={sorting}
        >
          {sorting ? "Sorting..." : "Start Bubble Sort"}
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
