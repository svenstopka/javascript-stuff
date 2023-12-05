/**
 * Generates an array of random numbers for testing purposes.
 * @param {number} count - The number of random numbers in the array.
 * @param {number} max - The range of random numbers between 0 and max.
 * @returns {number[]} An array of random numbers.
 */
function createRandomizedArray(count, max = count) {
  let randomNumbers = [];
  for (let i = 0; i < count; i++) {
    let randomNumber = Math.floor(Math.random() * max) + 1;
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
}

/** 
 * Swap the specified items in a given array.
 * @param {number[]} array - Input array.
 * @param {number} left - Left number to be swapped.
 * @param {number} right - Right number to be swapped.
 */
function swapNumbers(array, left, right) {
  let temp = array[left];
  array[left] = array[right];
  array[right] = temp;
}

/**
 * Sort a given array with a bubble sort algorithm.
 * @param {number[]} array - Unsorted Array to be sorted.
 * @param {boolean} [logPerformance=false] - Log detailed performance data
 */
function bubbleSort(array, logPerformance = false) {
  console.log("Sorting Array...");
  let startTime = Date.now();
  let n, m;
  let swapCount = 0, runCount = 0;
  for (n = 0; n < array.length; n++) {
    let swapped = false;
    for (m = 0; m < array.length - n - 1; m++) {
      if (array[m] > array[m + 1]) {
        swapNumbers(array, m, m + 1);
        swapped = true;
        swapCount++;
      }
    }
    runCount++;
    if (!swapped) {
      break;  // Stop if no number has been swapped
    }
  }
  let doneTime = Date.now();
  let functionTime = doneTime - startTime;
  console.log(`Array with ${array.length} elements sorted in ${runCount} iterations with ${swapCount} swaps in ${functionTime / 1000} seconds.`);
  if (logPerformance) {
    console.log(`${Math.floor(swapCount / functionTime)} swaps/ms`);
    console.log(`${Math.floor(runCount / (functionTime / 1000))} runs/s`);
    console.log(`${Math.floor(swapCount / runCount)} swaps/run`);
  }
}

let array = createRandomizedArray(10000);
bubbleSort(array);