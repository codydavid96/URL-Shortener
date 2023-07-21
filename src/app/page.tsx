"use client";

import InputShortener from './InputShortener';
import BackgroundAnimate from './backgroundAnimate';
import { LinkResult } from './LinkResult';
import {useState} from 'react'

export default function App() {

  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue} />
      <BackgroundAnimate />
      <LinkResult inputValue={inputValue} />
    </div>
    );
}
