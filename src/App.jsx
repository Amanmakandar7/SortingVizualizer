import { useState, useEffect } from 'react'
import { Bubble, Insertion, selectionSort, QuickSort, MergeSort} from "./Algorithms";


import './App.css'

const sleep = (ms) => new Promise((res) => setTimeout(res,ms))

function App() {
  //stored array of number, displayed as bar in the visualizer
  const [array, setArray] = useState([])
  const [selectSort, setSelectsort] = useState("")
  const [isSorting, setIssorting] = useState(false)

  //controls the number of bar (changes will regenerate the array)
  const [size, setSize] = useState(10)
  const [speed, setSpeed] = useState(10)

  const generateRandomArray =(n) =>{
    //create array with n slots and math.random() gives random number (5-100) its a hieght of a bar
    return Array.from({length: n}, () => Math.floor(Math.random() * 95)+ 5)
    
    
  }
  
  useEffect(() => {
    setArray(generateRandomArray(size));
  }, [size]);

  
//bubble sort 

  

  
  //Merge Sort

  
  
  

  



 
  return (
    <>
    <header className='w-full bg-gray-800 text-white p-4 flex items-center justify-between shadow-lg'>
       <h1 className='text-2xl font-bold'>sorting Vizualizer</h1>
       <div className='flex items-center gap-4'> 
        <select  className='bg-gray-500 px-3 py-2 rounded-2xl'
        value={selectSort}
        onChange={(e) =>setSelectsort(e.target.value)}
        >
          <option value="" hidden disabled > Select Sort</option>
          <option value="bubble">bubble sort</option>
          <option value="insertion">insertion sort </option>
          <option value="selection">selection sort</option>
          <option value="quick">quick sort</option>
          <option value="merge">Merge sort</option>
        </select>
        
        <div className='flex items-center gap-2'>
          <label className='text-lg'>size</label>
          <label>{size}</label>
          <input type="range" min="10" max="100" className='cursor-pointer'
          value={size} 
          disabled={isSorting}
          onChange={(e)=>setSize(Number( e.target.value))}   
          />
        </div>


          {/* speed slider */}
         <div className='flex items-center gap-2'>
          <label className='text-lg'>speed</label>
          <label>{speed}ms</label>
          <input type="range" min="10" max="100" className='cursor-pointer'
          value={speed}
          disabled={isSorting}
            onChange={(e) =>setSpeed(Number(e.target.value))} />
        </div>


        
        <button className='bg-gray-500 px-4 py-2 rounded-2xl hover:bg-gray-700 cursor-pointer'
        disabled={isSorting}
        onClick={()=>setArray(generateRandomArray(size))}>shuffle
        </button>


        <button className='bg-red-600 px-4 py-2 rounded-2xl hover:bg-red-500 cursor-pointer'
        disabled={isSorting}
        onClick={()=>{
        if (selectSort === "bubble") Bubble(array, setArray, speed, setIssorting, sleep);
        if (selectSort === "insertion") Insertion(array, setArray, speed,setIssorting, sleep);
        if (selectSort === "selection") selectionSort(array, setArray, speed, setIssorting, sleep);
        if (selectSort === "quick") QuickSort(array, setArray, speed, setIssorting, sleep); 
        if(selectSort === "merge") MergeSort(array, setArray, speed, setIssorting, sleep);
        }}
        >start sorting</button>


       </div>
    </header>


    <div className='flex items-end justify-center gap-1 h-[500px] bg-gray-100 p-4'>
      

      {array.map((value, index) =>(
        <div key={index} 
        className='w-4 bg-blue-400 rounded-t-lg'
        style={{height: `${value*3}px`}}
        ></div>
      ))} 


    </div>

    
    
        
    </>
  )
}

export default App
