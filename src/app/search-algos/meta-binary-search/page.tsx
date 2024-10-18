"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Link from "next/link";

export default function MetaBinarySearch() {
  const [arrays, setArrays] = useState<number[][]>([
    [1, 5, 9],
    [10, 15, 20],
    [21, 30, 40],
  ]); // Meta binary search operates on multiple sorted arrays
  const [target, setTarget] = useState<string>("");
  const [currentArray, setCurrentArray] = useState<number>(-1);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [found, setFound] = useState<boolean | null>(null);
  const [pointerData, setPointerData] = useState<{
    low: number;
    high: number;
    mid: number;
  } | null>(null);
  const [steps, setSteps] = useState<string[]>([]); // To track algorithm steps
  const [newArray, setNewArray] = useState<string>(""); // Add this to track new array input

  const resetSearch = () => {
    setCurrentArray(-1);
    setCurrentIndex(-1);
    setFound(null);
    setPointerData(null);
    setSteps([]); // Reset steps on new search
  };

  const handleMetaBinarySearch = () => {
    resetSearch();
    const searchTarget = Number(target); // Convert target to a number

    let lowArray = 0;
    let highArray = arrays.length - 1;

    const arraySearchStep = () => {
      if (lowArray > highArray) {
        setFound(false); // Element not found in any array
        return;
      }

      const midArray = Math.floor((lowArray + highArray) / 2);
      const midArrayValues = arrays[midArray];
      setCurrentArray(midArray); // Highlight current array

      setSteps((prevSteps) => [
        ...prevSteps,
        `Checking array at index ${midArray}, Values = [${midArrayValues.join(
          ", "
        )}]`,
      ]);

      // Apply binary search within the chosen array
      handleBinarySearchInArray(midArrayValues, searchTarget, midArray);

      if (
        midArrayValues[0] <= searchTarget &&
        searchTarget <= midArrayValues[midArrayValues.length - 1]
      ) {
        return; // Found the correct array, binary search handled within the array
      }

      if (midArrayValues[0] > searchTarget) {
        highArray = midArray - 1;
      } else {
        lowArray = midArray + 1;
      }

      setTimeout(arraySearchStep, 1000); // Delay before next array search step
    };

    arraySearchStep();
  };

  // Handle binary search within a specific array
  const handleBinarySearchInArray = (
    arr: number[],
    searchTarget: number,
    arrayIdx: number
  ) => {
    let low = 0;
    let high = arr.length - 1;

    const step = () => {
      if (low > high) {
        setFound(false); // Element not found in this array
        return;
      }

      const mid = Math.floor((low + high) / 2);
      setPointerData({ low, high, mid });
      setCurrentIndex(mid);

      setSteps((prevSteps) => [
        ...prevSteps,
        `Step: Searching in array ${arrayIdx}, Low = ${low}, High = ${high}, Mid = ${mid}, Mid value = ${arr[mid]}`,
      ]);

      if (arr[mid] === searchTarget) {
        setFound(true);
        return;
      }

      if (arr[mid] < searchTarget) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }

      setTimeout(step, 1000); // Delay before next binary search step
    };

    step();
  };

  // Handle new array input and convert to a 2D array
  const handleArrayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputArrays = e.target.value.split(";").map((str) =>
      str
        .split(",")
        .map((num) => Number(num.trim()))
        .sort((a, b) => a - b)
    );
    setArrays(inputArrays);
    setNewArray(e.target.value); // Update newArray value
    resetSearch();
  };

  const codeString = `
    function metaBinarySearch(arrays, target) {
      let lowArray = 0;
      let highArray = arrays.length - 1;

      while (lowArray <= highArray) {
        const midArray = Math.floor((lowArray + highArray) / 2);
        const midArrayValues = arrays[midArray];

        if (midArrayValues[0] <= target && target <= midArrayValues[midArrayValues.length - 1]) {
          return binarySearchInArray(midArrayValues, target); // Binary search within found array
        }

        if (midArrayValues[0] > target) {
          highArray = midArray - 1;
        } else {
          lowArray = midArray + 1;
        }
      }
      return -1; // Element not found
    }

    function binarySearchInArray(arr, target) {
      let low = 0;
      let high = arr.length - 1;

      while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
      }
      return -1;
    }
  `;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 px-5">
      <div className="flex items-center mb-6">
        <h1 className="text-3xl font-bold text-center mr-4">
          Meta Binary Search Simulator
        </h1>
        <Link href="/learn/search-algos/meta-binary-search">
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
          placeholder="Enter arrays separated by semicolon (e.g., '1,2,3;4,5,6')"
          value={newArray}
          onChange={handleArrayChange}
        />
      </div>

      {/* Array Display */}
      {arrays.map((arr, arrIdx) => (
        <div
          key={arrIdx}
          className="flex flex-wrap justify-center gap-4 mb-6 w-full relative"
        >
          {arr.map((num, idx) => {
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
                  currentIndex === idx
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
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
      ))}

      {/* Target Search Input */}
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
            onClick={handleMetaBinarySearch}
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
