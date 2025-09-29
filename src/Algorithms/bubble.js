  export const Bubble = async (arr, setArray, speed, setIssorting, sleep) =>{

    setIssorting(true)

    const copy = [...arr]
    for(let i = 0; i<copy.length; i++){
      for(let j=0; j<copy.length - i - 1; j++){
        if(copy[j] > copy[j+1]){
         [copy[j], copy[j+1]] = [copy[j+1], copy[j]] 
         setArray([...copy])
        }
        await sleep(speed)
      }
    }
    setIssorting(false);

  }


