'use client'

import React from 'react'
import { useState } from 'react'

export const LinkResult = () => {

    const [shortenLink, setShortenLink] = useState("");

  return (
    <div className="result">
        <p>{shortenLink}</p>
        <button>Copy to clipboard</button>
    </div>
  )
}
