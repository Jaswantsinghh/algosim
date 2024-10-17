"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Link from "next/link"; // Import Link for navigation

export default function BinarySearch() {
  const [array, setArray] = useState<number[]>([4, 10, 15, 23, 31, 60]); // Binary search works on sorted arrays
  const [target, setTarget] = useState("");
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [found, setFound] = useState<boolean | null>(null);
  const [newArray, setNewArray] = useState(""); // New array input state
  const [pointerData, setPointerData] = useState<{
    low: number;
    high: number;
    mid: number;
  } | null>(null);
  const [steps, setSteps] = useState<string[]>([]); // To track algorithm steps

  const resetSearch = () => {
    setCurrentIndex(-1);
    setFound(null);
    setPointerData(null);
    setSteps([]); // Reset steps on new search
  };

  const handleBinarySearch = () => {
    resetSearch();
    const searchTarget = Number(target); // Convert target to a number
    let low = 0;
    let high = array.length - 1;
    let foundElement = false; // Track whether the element is found

    const step = () => {
      if (low > high) {
        setFound(false); // Element not found
        return;
      }

      const mid = Math.floor((low + high) / 2);

      setPointerData({ low, high, mid }); // Update pointer data

      setCurrentIndex(mid);

      // Add current step to the steps state
      setSteps((prevSteps) => [
        ...prevSteps,
        `Step: Low = ${low}, High = ${high}, Mid = ${mid}, Mid value = ${array[mid]}`,
      ]);

      if (array[mid] === searchTarget) {
        foundElement = true;
        setFound(true);
        return;
      }

      if (array[mid] < searchTarget) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }

      if (!foundElement) {
        setTimeout(step, 1000); // Call step again for the next iteration
      }
    };

    step(); // Start the search steps
  };

  // Handle new array input and convert the string to a number array
  const handleArrayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputArray = e.target.value
      .split(",")
      .map((num) => Number(num.trim()))
      .sort((a, b) => a - b); // Sort array for binary search
    setArray(inputArray); // Update the array with user input
    setNewArray(e.target.value); // Update the input field value
    resetSearch(); // Reset search when array is updated
  };

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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 px-5">
      <div className="flex items-center mb-6">
        <h1 className="text-3xl font-bold text-center mr-4">
          Binary Search Simulator
        </h1>
        <Link href="/learn/search-algos/binary-search">
          <button className="flex items-center bg-blue-500 text-white py-1 px-3 rounded-md shadow-sm hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 text-sm">
            <i className="fa fa-info-circle mr-1"></i>{" "}
            {/* Icon and text with slight spacing */}
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
          Note: The array will be automatically sorted for binary search.
        </p>
      </div>

      {/* Array Display */}
      <div className="flex flex-wrap justify-center gap-4 mb-6 w-full relative">
        {array.map((num, idx) => {
          // Conditional classes for borders based on pointer state
          let borderColor = "border-gray-200"; // Default border color
          if (pointerData) {
            if (idx === pointerData.low) borderColor = "border-red-500";
            if (idx === pointerData.high) borderColor = "border-green-500";
            if (idx === pointerData.mid) borderColor = "border-blue-500";
          }

          return (
            <motion.div
              key={idx}
              className={`w-12 h-12 flex items-center justify-center border ${borderColor} rounded ${
                currentIndex === idx ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              initial={{ scale: 0.8 }}
              animate={{ scale: currentIndex === idx ? 1.1 : 1 }}
              transition={{ duration: 0.2 }}
            >
              {num}
            </motion.div>
          );
        })}
      </div>

      {/* Target Search Input - Centered */}
      <div className="flex justify-center mb-6 w-full">
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/4 flex">
          <input
            type="number"
            className="border border-gray-300 p-2 rounded-l-md w-full"
            placeholder="Search target"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-r-md"
            onClick={handleBinarySearch}
          >
            Search
          </button>
        </div>
      </div>

      {/* Result Display */}
      {found === true && (
        <p className="text-green-500 font-bold mb-6 text-center">
          Element found!
        </p>
      )}
      {found === false && (
        <p className="text-red-500 font-bold mb-6 text-center">
          Element not found!
        </p>
      )}

      {/* Pointer and Calculation Display */}
      {pointerData && (
        <div className="mb-6 text-center">
          <p>
            <strong style={{ color: "red" }}>Low:</strong> {pointerData.low} |{" "}
            <strong style={{ color: "green" }}>High:</strong> {pointerData.high}{" "}
            | <strong style={{ color: "blue" }}>Mid:</strong> {pointerData.mid}
          </p>
        </div>
      )}

      {/* Running Formula */}
      {pointerData && (
        <div className="mb-6 text-center">
          <p className="font-semibold">
            Running Formula:{" "}
            <span className="text-lg">
              mid = Math.floor((low + high) / 2) = Math.floor( (
              {pointerData.low} + {pointerData.high}) / 2) ={" "}
              {Math.floor((pointerData.low + pointerData.high) / 2)}
            </span>
          </p>
        </div>
      )}

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
