import React from 'react';

const SmallBtnC = ({ text, onNext }: { text: string; onNext?: () => void }) => {
  const handleNextClick = () => {
    if (onNext) {
      onNext();
    }
  };

  return (
    <div className="bg-[#FFDF8B] text-bold text-center px-6 py-2 w-[30%] rounded-full relative top-4">
      <button onClick={handleNextClick}>{text}</button>
    </div>
  );
};

export default SmallBtnC;
