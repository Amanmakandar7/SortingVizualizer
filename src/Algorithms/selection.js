
  //selection sort

 export const selectionSort = async (array, setArray, speed,setIssorting, sleep) =>{
     setIssorting(true)
    const arr = [...array];
    for(let i = 0 ; i< arr.length; i++){
      
      //assuming the first element of unsorted part
      //so we store its index, not value, so we can swap later
      let mini = i
      for(let j = i+1; j<arr.length; j++){
        if(arr[j] < arr[mini]){
          mini = j;
        }
        await sleep(speed); 
      }

      if(mini !== i){
        [arr[i], arr[mini]] = [arr[mini], arr[i]];
        setArray([...arr]);   //update state to re-render bars
        await sleep(speed);   
      }
    }
      setIssorting(false);
  }

  
