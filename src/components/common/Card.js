import React from 'react';

const Card = ({ DarkMode, children }) => {
    return (
      <div
        className={`w-fit h-fit rounded-[2.5rem] m-5 mr-1 overflow-hidden shadow-lg p-2 ${
          DarkMode?'bg-zinc-800 text-white' : 'bg-white'
        }`}
      >
        {children}
      </div>
    );
  };
export default Card;  
