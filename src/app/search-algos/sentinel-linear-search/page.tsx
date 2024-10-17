"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Link from "next/link"; // Import Link for navigation

export default function SentinelLinearSearch() {
  const [array, setArray] = useState<number[]>([4, 10, 15, 23, 31, 60]); // Array to be searched
  const [target, setTarget] = useState("");
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [found, setFound] = useState<boolean | null>(null);
  const [newArray, setNewArray] = useState(""); // New array input state
  const [steps, setSteps] = useState<string[]>([]); // To track algorithm steps
  const [sentinelIndex, setSentinelIndex] = useState<number | null>(null); // Track sentinel's index
  const [finalCheckIndex, setFinalCheckIndex] = useState<number | null>(null); // Track the final checked index

  const resetSearch = () => {
    setCurrentIndex(-1);
    setFound(null);
    setSteps([]); // Reset steps on new search
    setSentinelIndex(null); // Reset sentinel index
    setFinalCheckIndex(null); // Reset final check index
  };

  const handleSentinelLinearSearch = () => {
    resetSearch();
    const searchTarget = Number(target); // Convert target to a number
    const length = array.length;
    const stepsList: string[] = [];

    let i = 0;
    const sentinel = array[length - 1]; // Use last element as sentinel
    array[length - 1] = searchTarget; // Temporarily place the target at the end
    setSentinelIndex(length - 1); // Set the sentinel index

    stepsList.push(
      `Placed target ${searchTarget} as sentinel at index ${length - 1}`
    );
    setSteps([...stepsList]);

    // If the sentinel value is equal to the target (original value), no need to iterate, just return
    if (sentinel === searchTarget) {
      setFound(true);
      setCurrentIndex(length - 1); // Target is at the last index
      stepsList.push(
        `Target is already the sentinel value, found at index ${length - 1}`
      );
      setSteps([...stepsList]);
      return;
    }

    // Start iterating from the first element to the second-to-last element
    const searchStep = () => {
      if (array[i] !== searchTarget) {
        stepsList.push(`Step: Checking index ${i} (Value = ${array[i]})`);
        setSteps([...stepsList]);
        setCurrentIndex(i); // Set the current index for animation
        i++;
        if (i < length - 1) {
          // Iterate till second to last element (before sentinel)
          setTimeout(searchStep, 1000); // Delay before next iteration
        } else {
          setFound(false); // Mark as not found if target is not found in the array
          // Mark the final check position after the last element
          setFinalCheckIndex(i - 1); // Highlight the last checked index
          // Restore sentinel value after all iterations with animation
          setSentinelIndex(null); // Reset sentinel index
          array[length - 1] = sentinel;
          stepsList.push(
            `Restored original sentinel value at index ${length - 1}`
          );
          setSteps([...stepsList]);
        }
      } else {
        // If target is found within the array
        setFound(true);
        setCurrentIndex(i);
        stepsList.push(`Found target at index ${i}`);
        setSteps([...stepsList]);

        // Restore sentinel value after finding the target with animation
        array[length - 1] = sentinel;
        setSentinelIndex(null); // Reset sentinel index
        stepsList.push(
          `Restored original sentinel value at index ${length - 1}`
        );
        setSteps([...stepsList]);
      }
    };

    searchStep(); // Start the search steps
  };

  // Handle new array input and convert the string to a number array
  const handleArrayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputArray = e.target.value
      .split(",")
      .map((num) => Number(num.trim())); // Convert to numbers
    setArray(inputArray); // Update the array with user input
    setNewArray(e.target.value); // Update the input field value
    resetSearch(); // Reset search when array is updated
  };

  const codeString = `
    function sentinelLinearSearch(arr, target) {
      let length = arr.length;
      let sentinel = arr[length - 1]; // Save last element as sentinel
      arr[length - 1] = target; // Temporarily set target as sentinel
      let i = 0;

      while (arr[i] !== target) {
        i++;
      }

      arr[length - 1] = sentinel; // Restore the original last element
      if (i < length - 1) return i; // Found target
      return -1; // Target not found
    }
  `;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 px-5">
      <div className="flex items-center mb-6">
        <h1 className="text-3xl font-bold text-center mr-4">
          Sentinel Linear Search Simulator
        </h1>
        <Link href="/learn/search-algos/sentinel-linear-search">
          <button className="flex items-center bg-blue-500 text-white py-1 px-3 rounded-md shadow-sm hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 text-sm">
            <i className="fa fa-info-circle mr-1"></i> <span>Learn</span>
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
          Note: The array will not be sorted for linear search.
        </p>
      </div>

      {/* Array Display */}
      <div className="flex flex-wrap justify-center gap-4 mb-6 w-full relative">
        {array.map((num, idx) => {
          // Conditional classes for current index, sentinel index, and final check
          return (
            <motion.div
              key={idx}
              className={`w-12 h-12 flex items-center justify-center border ${
                currentIndex === idx
                  ? "bg-blue-500 text-white"
                  : sentinelIndex === idx
                  ? "bg-yellow-500 text-black transform scale-110"
                  : finalCheckIndex === idx
                  ? "bg-red-500 text-white transform scale-110"
                  : "bg-gray-200"
              } rounded`}
              initial={{ scale: 0.8 }}
              animate={{
                scale:
                  currentIndex === idx
                    ? 1.1
                    : sentinelIndex === idx
                    ? 1.2
                    : finalCheckIndex === idx
                    ? 1.2
                    : 1,
                opacity:
                  currentIndex === idx ||
                  sentinelIndex === idx ||
                  finalCheckIndex === idx
                    ? 1
                    : 0.8,
              }}
              transition={{ duration: 0.5 }}
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
            onClick={handleSentinelLinearSearch}
          >
            Search
          </button>
        </div>
      </div>

      {/* Result Display */}
      {found === true && (
        <p className="text-green-500 font-bold mb-6 text-center">
          Element found at index {currentIndex}!
        </p>
      )}
      {found === false && (
        <p className="text-red-500 font-bold mb-6 text-center">
          Element not found!
        </p>
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
