export const MergeSort = async (array, setArray, speed, setIssorting, sleep) => {
  setIssorting(true);

  // Recursive merge sort
  const mergeSortHelper = async (arr, l, r) => {
    if (l >= r) return;

    let mid = Math.floor((l + r) / 2);

    // Sort left half
    await mergeSortHelper(arr, l, mid);

    // Sort right half
    await mergeSortHelper(arr, mid + 1, r);

    // Merge both halves
    await merge(arr, l, mid, r);
  };

  // Merge function
  const merge = async (arr, l, mid, r) => {
    let n1 = mid - l + 1;
    let n2 = r - mid;

    let left = arr.slice(l, mid + 1);
    let right = arr.slice(mid + 1, r + 1);

    let i = 0, j = 0, k = l;

    while (i < n1 && j < n2) {
      if (left[i] <= right[j]) {
        arr[k] = left[i];
        i++;
      } else {
        arr[k] = right[j];
        j++;
      }
      setArray([...arr]);
      await sleep(speed);
      k++;
    }

    while (i < n1) {
      arr[k] = left[i];
      i++;
      k++;
      setArray([...arr]);
      await sleep(speed);
    }

    while (j < n2) {
      arr[k] = right[j];
      j++;
      k++;
      setArray([...arr]);
      await sleep(speed);
    }
  };

  // Copy array to avoid mutating
  let arr = [...array];
  await mergeSortHelper(arr, 0, arr.length - 1);

  setIssorting(false);
};
