"use client"

import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SyntaxHigh from './SyntaxHigh';
import { MixinAlert } from '../utils/alert';


const CodeBlock = ({message}: {message: string}) => {
    const [width, setWidth] = useState<string>("300px"); 
    const [copy, setCopy] = useState<string[]>([]);

  useEffect(() => {
    const updateWidth = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setWidth("300px"); 
      } else {
        setWidth("60rem"); 
      }
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleCopy = async (message: React.ReactNode) => {
    try {
      setCopy([message as string]);
      await navigator.clipboard.writeText(message as string);
      MixinAlert("success", "Copied to clipboard");
    } catch(error) {
      MixinAlert("error", "Failed to clipboard");
    }
  }

  const handleCopyCode = async () => {
    try {
      
    } catch(error) {
      MixinAlert("error", "Failed to clipboard");
    }
  }

  return (
    <ReactMarkdown
      className={"text-slate-100 revert"}
      components={{
        code({ className, children, ...props }) {
          const language = className?.replace("language-", "");
          return language ? (
            <section style={{ position: "relative" }}>
              <button onClick={() => handleCopy(children)}>{copy.includes(children as string) ? (<i className='bx bx-check'></i>) : (<i className='bx bxs-copy-alt'></i>)}</button>
              <SyntaxHigh language={language} width={width} props={props}>
                {children}
              </SyntaxHigh>
            </section>
          ) : (
            <code className={`${className} !bg-slate-600 !px-[.2rem] !p-[.1rem] !rounded-sm`} {...props}>
              {children}
            </code>
          );
        },
      }}
      remarkPlugins={[remarkGfm]}
    >
      {message}
    </ReactMarkdown>
  );
};

export default CodeBlock;
