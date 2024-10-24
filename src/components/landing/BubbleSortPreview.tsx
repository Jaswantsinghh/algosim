"use client"
import React, {useState, useEffect} from 'react'

function BubbleSortPreview() {
    const [sortedArray, setSortedArray] = useState([5, 2, 8, 12, 1, 6])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < sortedArray.length - 1) {
      const timer = setTimeout(() => {
        setSortedArray(prev => {
          const newArray = [...prev]
          if (newArray[currentIndex] > newArray[currentIndex + 1]) {
            [newArray[currentIndex], newArray[currentIndex + 1]] = [newArray[currentIndex + 1], newArray[currentIndex]]
          }
          return newArray
        })
        setCurrentIndex(prev => prev + 1)
      }, 500)
      return () => clearTimeout(timer)
    } else {
      setCurrentIndex(0)
    }
  }, [currentIndex, sortedArray])
  return (
    <div className="container px-4 md:px-6">
    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">See It in Action</h2>
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center justify-center space-x-2 text-2xl font-bold">
        {sortedArray.map((num, index) => (
          <div
            key={index}
            className={`w-12 h-12 flex items-center justify-center rounded-lg ${
              index === currentIndex || index === currentIndex + 1
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground'
            }`}
          >
            {num}
          </div>
        ))}
      </div>
      <p className="text-center text-gray-500 dark:text-gray-400">
        Bubble Sort Algorithm Visualization
      </p>
    </div>
  </div>
  )
}

export default BubbleSortPreview