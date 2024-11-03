import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { AnimatePresence, motion } from 'framer-motion';
import { Pause, Play, RefreshCcw } from 'lucide-react';
import { FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import { Label } from '../ui/label';

const DEFAULT_ARRAY = [5, 2, 8, 12, 1, 6];
const DEFAULT_SPEED = 700;

const BubbleSortPreview = () => {
  const [array, setArray] = useState(DEFAULT_ARRAY);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [nextIndex, setNextIndex] = useState(-1);
  const [isSorted, setIsSorted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState(DEFAULT_SPEED);
  const [customInput, setCustomInput] = useState('');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const checkIfSorted = useCallback((arr : number[]) => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) return false;
    }
    return true;
  }, []);

  const resetArray = useCallback((newArray = DEFAULT_ARRAY) => {
    setArray(newArray);
    setCurrentIndex(-1);
    setNextIndex(-1);
    setIsSorted(false);
  }, []);

  const handleCustomArraySubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newArray = JSON.parse(`[${customInput}]`);
      if (
        Array.isArray(newArray) &&
        newArray.every((num) => typeof num === 'number')
      ) {
        resetArray(newArray);
      }
    } catch (error) {
      console.error('Invalid input');
    }
  };

  const bubbleSort = useCallback(() => {
    if (isPaused || isSorted) return;

    const step = () => {
      setArray((prevArray) => {
        const newArray = [...prevArray];
        if (
          currentIndex >= 0 &&
          nextIndex >= 0 &&
          newArray[currentIndex] > newArray[nextIndex]
        ) {
          [newArray[currentIndex], newArray[nextIndex]] = [
            newArray[nextIndex],
            newArray[currentIndex],
          ];
        }
        return newArray;
      });

      setCurrentIndex((prevIndex) => {
        const nextCurrentIndex = prevIndex + 1;
        if (nextCurrentIndex >= array.length - 1) {
          if (checkIfSorted(array)) {
            setIsSorted(true);
            return -1;
          }
          return 0;
        }
        return nextCurrentIndex;
      });

      setNextIndex(() => {
        const nextIndex =
          currentIndex + 2 >= array.length ? 1 : currentIndex + 2;
        return nextIndex;
      });
    };

    timerRef.current = setTimeout(step, speed);
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [
    array,
    currentIndex,
    nextIndex,
    isPaused,
    isSorted,
    speed,
    checkIfSorted,
  ]);

  useEffect(() => {
    if (!isPaused && !isSorted) {
      bubbleSort();
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [bubbleSort, isPaused, isSorted]);

  return (
    <div className="flex flex-col items-center space-y-8 p-6 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">
        Bubble Sort Visualization
      </h2>

      <div className="w-full flex flex-col items-center space-y-6">
        <AnimatePresence mode="wait">
          <motion.div
            className="flex items-center justify-center space-x-3 flex-wrap gap-y-4"
            initial={false}
          >
            {array.map((num, index) => (
              <motion.div
                key={index}
                layout
                initial={{ scale: 1 }}
                animate={{
                  scale: isSorted ? [1, 1.1, 1] : 1,
                  backgroundColor: isSorted
                    ? '#22c55e'
                    : index === currentIndex || index === nextIndex
                    ? '#3b82f6'
                    : '#64748b',
                }}
                transition={{
                  scale: {
                    duration: 0.3,
                    repeat: isSorted ? 1 : 0,
                  },
                  backgroundColor: { duration: 0.3 },
                }}
                className="w-14 h-14 rounded-lg flex items-center justify-center text-white font-bold text-xl"
              >
                {num}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {isSorted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-500 font-semibold text-lg"
          >
            Array Sorted Successfully! 🎉
          </motion.div>
        )}

        <div className="flex space-x-4">
          <Button
            onClick={() => setIsPaused(!isPaused)}
            variant="outline"
            disabled={isSorted}
          >
            {isPaused ? (
              <Play className="w-4 h-4 mr-2" />
            ) : (
              <Pause className="w-4 h-4 mr-2" />
            )}
            {isPaused ? 'Resume' : 'Pause'}
          </Button>
          <Button onClick={() => resetArray()} variant="outline">
            <RefreshCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>
        </div>

        <div className="w-full max-w-md space-y-2">
          <Label className="text-sm font-medium">Animation Speed (ms)</Label>
          <Slider
            value={[speed]}
            onValueChange={(value) => setSpeed(value[0])}
            min={100}
            max={1000}
            step={100}
            className="w-full"
          />
        </div>

        <form
          onSubmit={handleCustomArraySubmit}
          className="w-full max-w-md space-y-2"
        >
          <Label className="text-sm font-medium">
            Custom Array (comma-separated numbers)
          </Label>
          <div className="flex space-x-2">
            <Input
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="e.g., 5,2,8,12,1,6"
              className="flex-1"
            />
            <Button type="submit" variant="outline">
              Apply
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BubbleSortPreview;
