//insertion sort:
  // the idea of insertion sort is, move largest element to right 
  //and insert current element into the correct place

  export const Insertion = async (array, setArray, speed, setIssorting, sleep) =>{
    setIssorting(true)

    const arr = [...array]
    for(let i = 1; i < arr.length; i++){
      let key  = arr[i];    
      let j =  i-1;

      //shifting greater element to the right side
      while(j>=0 && arr[j] > key){
        arr[j+1] = arr[j];
        j = j-1;

        setArray([...arr])
        await sleep(speed);
      }
      //place in correct position
      arr[j+1] = key;   
      setArray([...arr])
      await sleep(speed);
      }
          setIssorting(false);
  }

