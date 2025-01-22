"use client"

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from 'remark-gfm';

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
            <SyntaxHighlighter
              style={okaidia as any} 
              language={language} 
              PreTag="div"
              {...props}    
              customStyle={{
                width: width,
                maxWidth: "100%",
                overflowX: "auto", 
              }}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
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
