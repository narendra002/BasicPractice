import React, { useCallback, useEffect, useState } from 'react'

function ColorBox() {

const backgroundColors = [
    "bg-red-50",
    "bg-red-100",
    "bg-red-200",
    "bg-red-300",
    "bg-red-400",
    "bg-red-500",
    "bg-red-600",
    "bg-red-700",
    "bg-red-800",
    "bg-red-900",
    "bg-blue-50",
    "bg-blue-100",
    "bg-blue-200",
    "bg-blue-300",
    "bg-blue-400",
    "bg-blue-500",
    "bg-blue-600",
    "bg-blue-700",
    "bg-blue-800",
    "bg-blue-900",
    "bg-green-50",
    "bg-green-100",
    "bg-green-200",
    "bg-green-300",
    "bg-green-400",
    "bg-green-500",
    "bg-green-600",
    "bg-green-700",
    "bg-green-800",
    "bg-green-900",
    "bg-yellow-50",
    "bg-yellow-100",
    "bg-yellow-200",
    "bg-yellow-300",
    "bg-yellow-400",
    "bg-yellow-500",
    "bg-yellow-600",
    "bg-yellow-700",
    "bg-yellow-800",
    "bg-yellow-900",
    // Add more colors as needed
  ];
  const [bg, setBg] = useState([]);

  const randomBg = () => {
    const arr = [];
    while (arr.length < 20) {
      const randomIndex = Math.floor(Math.random() * backgroundColors.length);
      const randomColor = backgroundColors[randomIndex];
      
      // Check if the color is not already in the array
      if (!arr.includes(randomColor)) {
        arr.push(randomColor);
      }
    }
  
    setBg([...arr]);
  }
  
  useEffect(() => {
    randomBg();
  }, []);
  
  const handleRandom = useCallback((id) => {
    const randomIndex = Math.floor(Math.random() * backgroundColors.length);
    const randomColor = backgroundColors[randomIndex];

    setBg((prevBg) => {
      const newArr = [...prevBg];
      newArr[id] = randomColor;
      return newArr;
    });
  }, [setBg]);
  return (
    <div className="grid  grid-cols-5 outline   ">
        { bg.map((item,id)=>(
    <div onClick={()=>{handleRandom(id)}} key={id} className= {`h-40 ${item}`}>  </div>

       )) }
    
    </div>
  )
}

export default ColorBox