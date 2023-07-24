"use client";

import React, { useState } from 'react';

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState('')
  const handleClick = () => {
    setInputValue(value);
    setValue("");
  }
  return (
    <div className='inputContainer'>
      <div className='textBox flex flex-col items-center justify-center h-screen'>
        <h1 className='mb-4 text-white'>
          URL <span className='text-sky-400'>Shortener</span>
        </h1>
        <div className='flex justify-center'>
          <input 
          type='text' 
          placeholder='Paste a link to shrink' 
          className='pl-4'
          value={value}
          onChange={e => setValue(e.target.value)}
          />
          <button 
          className='shorten-button'
          onClick={handleClick}
          >
            Shorten
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputShortener;
