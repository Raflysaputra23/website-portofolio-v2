"use client"

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SyntaxHigh from './SyntaxHigh';

const CodeBlock = ({message}: {message: string}) => {
    const [width, setWidth] = useState("300px"); 

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

  return (
    <ReactMarkdown
      className={"text-slate-100 revert"}
      components={{
        code({ className, children, ...props }) {
          const language = className?.replace("language-", "");
          return language ? (
            <SyntaxHigh language={language} width={width} props={props}>
                {children}
            </SyntaxHigh>
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
