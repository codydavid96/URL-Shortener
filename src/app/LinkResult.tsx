"use client";

import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface LinkResultProps {
  inputValue: string;
}

export const LinkResult: React.FC<LinkResultProps> = ({ inputValue }) => {
  const [shortenLink, setShortenLink] = useState("");  
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, seterror] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      setShortenLink(res.data.result.full_short_link);
    } catch (err) {
      seterror(true)
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copied]);

  if(loading) {
    return <p className="no-data">Loading...</p>
  }

  if(error) {
    return <p className="no-data">Somthing went wrong.</p>
  }

  console.log(shortenLink);

  const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
  </svg>`;

  return (
    <>
      {shortenLink && (
        <div className="result">
          <p className="border-2 border-sky-400 text-white p-3 px-20">
            {shortenLink}
          </p>

          <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
            <button className={copied ? "copied" : ""}>
              <span dangerouslySetInnerHTML={{ __html: svgIcon }} />
            </button>
          </CopyToClipboard>
        </div>
      )}
    </>
  );
};
