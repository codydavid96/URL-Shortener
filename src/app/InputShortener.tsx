import React from 'react';

const InputShortener = () => {
  return (
    <div className='inputContainer'>
      <div className='textBox flex flex-col items-center justify-center h-screen'>
        <h1 className='mb-4 text-white'>
          URL <span className='text-sky-400'>Shortener</span>
        </h1>
        <div className='flex justify-center'>
          <input type='text' placeholder='Paste a link to shrink' className='pl-4'/>
          <button className='hover:bg-sky-800 hover:border-sky-800 border-2 bg-sky-400 border-sky-400 p-3 text-white'>Shorten</button>
        </div>
      </div>
    </div>
  );
};

export default InputShortener;
