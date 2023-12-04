function createRandomizedArray(count) {
  let randomNumbers = [];
  for (let i = 0; i < count; i++) {
    let randomNumber = Math.floor(Math.random() * count) + 1;
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
}

function swapNumbers(array, left, right) {
  let temp = array[left];
  array[left] = array[right];
  array[right] = temp;
}

function bubbleSort(array) {
  console.log("Sorting Array...");
  let startTime = Date.now();
  let n, m;
  let swapCount = 0, runCount = 0;
  for (n = 0; n < array.length; n++) {
    let swapped = false
    for (m = 0; m < array.length - n - 1; m++) {
      if (array[m] > array[m + 1]) {
        swapNumbers(array, m, m + 1)
        swapped = true;
        swapCount++
      }
    }
    runCount++
    if (!swapped) {
      break;  // Stop if no number has been swapped
    }
  }
  let doneTime = Date.now();
  functionTime = doneTime - startTime;
  console.log(`Array with ${array.length} elements sorted in ${runCount} iterations with ${swapCount} swaps in ${functionTime / 1000} seconds.`);
  console.log(`${Math.floor(swapCount/functionTime)} swaps/ms`);
  console.log(`${Math.floor(runCount/functionTime)} runs/ms`);
  return functionTime;
}
let array = createRandomizedArray(100000)


bubbleSort(array);