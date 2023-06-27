function bubbleSort(numArray) {
    if (numArray === undefined || numArray === null || numArray.length === 0) {
        return;
    }

    const length = numArray.length;
    let swapped;

    for (let i = 0; i < length - 1; i++) {
        swapped = false;

        for (let j = 0; j < length - i - 1; j++) {
            if (numArray[j] > numArray[j + 1]) {
                [numArray[j], numArray[j + 1]] = [numArray[j + 1], numArray[j]];
                swapped = true;
            }
        }

        if (!swapped) {
            // If no swaps occurred in this pass, the array is already sorted
            break;
        }
    }

    return numArray;
}

console.log(bubbleSort([2, 1, 4, 3, 9, 7]));
