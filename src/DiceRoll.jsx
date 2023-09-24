import React, { useState } from 'react';

// Updated JSON object with dice roll image URLs
const diceRollImages = [
  {
    id: 1,
    imageUrl: 'https://media.tenor.com/kiJDaj10jmsAAAAC/dice-one.gif',
    altText: 'Dice One',
  },
  {
    id: 2,
    imageUrl: 'https://media.tenor.com/kiJDaj10jmsAAAAC/dice-two.gif',
    altText: 'Dice Two',
  },
  {
    id: 3,
    imageUrl: 'https://www.clipartmax.com/png/middle/217-2171248_dice-dice-roll-dice-roll-3-dice-roll-three-die-dice-icon.png',
    altText: 'Dice Three',
  },
  {
    id: 4,
    imageUrl: 'https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_4-512.png',
    altText: 'Dice Four',
  },
  {
    id: 5,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Die_face_5b.svg/200px-Die_face_5b.svg.png',
    altText: 'Dice Five',
  },
  {
    id: 6,
    imageUrl: 'http://www.clker.com/cliparts/Y/g/8/e/o/9/dice-6-md.png',
    altText: 'Dice Six',
  },
  // Add more dice roll images as needed
];

function DiceRoll() {
  const [currentOne, setCurrentOne] = useState(diceRollImages[0]);
  const [currentTwo, setCurrentTwo] = useState(diceRollImages[0]);
  const [rolling, setRolling] = useState(false);

  const handleRolling = () => {
    setRolling(true);

    setTimeout(() => {
      const one = Math.floor(Math.random() * diceRollImages.length);
      const two = Math.floor(Math.random() * diceRollImages.length);
      setCurrentOne(diceRollImages[one]);
      setCurrentTwo(diceRollImages[two]);
      setRolling(false); // Move this line here
    }, 2000);
  };

  return (
    <div>
      <div className={`flex justify-center mt-14 space-x-12 ${rolling ? 'animate-bounce':''  }`}>
        <img
          src={currentOne.imageUrl}
          className="h-40"
          alt={currentOne.altText}
        />
        <img
          src={currentTwo.imageUrl}
          className="h-40"
          alt={currentTwo.altText}
        />
      </div>
      <div className="flex justify-center mt-11">
        <button
          onClick={handleRolling}
          className="p-4 font-bold bg-blue-600 rounded-md px-8"
          disabled={rolling} // Disable the button while rolling
        >
          {rolling ? 'Rolling' : 'Roll'}
        </button>
      </div>
    </div>
  );
}

export default DiceRoll;
