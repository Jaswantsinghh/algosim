"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function LinearSearch() {
  const [array, setArray] = useState<number[]>([10, 23, 31, 4, 15, 60]);
  const [target, setTarget] = useState("");
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [found, setFound] = useState<boolean | null>(null);
  const [newArray, setNewArray] = useState(""); // New array input state

  const resetSearch = () => {
    setCurrentIndex(-1);
    setFound(null);
  };

  const handleLinearSearch = () => {
    resetSearch();
    const searchTarget = Number(target); // Convert target to a number
    let foundElement = false; // Track whether the element is found

    for (let i = 0; i < array.length; i++) {
      setTimeout(() => {
        if (foundElement) return; // Stop further execution if element is found

        setCurrentIndex(i);
        if (array[i] === searchTarget) {
          foundElement = true;
          setFound(true);
          return;
        }

        if (i === array.length - 1 && !foundElement) {
          setFound(false);
        }
      }, i * 500);
    }
  };

  // Handle new array input and convert the string to a number array
  const handleArrayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputArray = e.target.value
      .split(",")
      .map((num) => Number(num.trim()));
    setArray(inputArray); // Update the array with user input
    setNewArray(e.target.value); // Update the input field value
    resetSearch(); // Reset search when array is updated
  };

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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 px-5">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Linear Search Simulator
      </h1>

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

      {/* Array Display */}
      <div className="flex flex-wrap justify-center gap-4 mb-6 w-full">
        {array.map((num, idx) => (
          <motion.div
            key={idx}
            className={`w-12 h-12 flex items-center justify-center border rounded ${
              currentIndex === idx ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            initial={{ scale: 0.8 }}
            animate={{ scale: currentIndex === idx ? 1.1 : 1 }}
            transition={{ duration: 0.2 }}
          >
            {num}
          </motion.div>
        ))}
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
            onClick={handleLinearSearch}
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

      {/* Code Highlight */}
      <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/2 p-4 bg-gray-900 text-white rounded-lg">
        <SyntaxHighlighter language="javascript" style={darcula}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
