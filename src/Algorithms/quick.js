//quick sort

  const partition  = async(arr,low, high, setArray,speed,sleep) =>{
    
    let pivot = arr[high];
    let i = low -1;
    for(let j = low; j < high; j++){
      if(arr[j] <= pivot){
        i++;
        [arr[i],arr[j]] = [arr[j], arr[i]];
        setArray([...arr]);
        await sleep(speed);
      } 
    }
    [arr[i+1], arr[high]] = [arr[high], arr[i+1]]
    setArray([...arr]);
    await sleep(speed);
    return i+1;
  }

  const QuickSorthelper = async (arr, low, high, setArray,speed,sleep) =>{
    if (low < high) {
    let p = await partition(arr, low, high, setArray, speed, sleep);

    await QuickSorthelper(arr, low, p - 1, setArray, speed, sleep);
    await QuickSorthelper(arr, p + 1, high, setArray, speed, sleep);
  }  
  }

  export const QuickSort = async (array, setArray, speed, setIssorting, sleep) => {
   setIssorting(true)
    let arr = [...array];
  await QuickSorthelper(arr, 0, arr.length - 1, setArray, speed, sleep);
   setIssorting(false)
  }
