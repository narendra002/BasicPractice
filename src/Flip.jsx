import React, { useState } from 'react';

function CoinFlip() {
  const [flipCount, setFlipCount] = useState(0);
  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);
  const head = "https://en.numista.com/catalogue/photos/inde/3178-original.jpg";
  const tail = "https://qph.cf2.quoracdn.net/main-qimg-e0e0099a4e81c40def6da0742c9201b5-lq";
  const [flipImg, setFlipImg] = useState("");
  const flipCoin = () => {
    const randomValue = Math.random();
    setFlipCount(flipCount + 1);

    if (randomValue < 0.5) {
      // It's heads
      setFlipImg(head);
      setHeadsCount(headsCount + 1);
    } else {
      // It's tails
      setFlipImg(tail);
      setTailsCount(tailsCount + 1);
    }
  };

  return (
    <div>
      <div className="font-bold text-2xl p-4">Let's flip a Coin</div>
      <div className="flex justify-center space-x-5">
        <div className="coin">
          <img className={`h-32 mix-blend-multiply ${flipCount > 0 ? 'flip' : ''} `} src={flipImg} alt="Coin" />
        </div>
      </div>
      <div className="justify-center flex pt-12">
        <button onClick={flipCoin} className="bg-slate-700 text-white p-4 rounded-lg">
          Flip me
        </button>
      </div>
      <p className="text-center font-black text-xl p-4">
        Out of {flipCount} flips, there have been {headsCount} heads and {tailsCount} tails.
      </p>
    </div>
  );
}

export default CoinFlip;
