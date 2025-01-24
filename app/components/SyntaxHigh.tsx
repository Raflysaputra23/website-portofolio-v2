"use client";

import { forwardRef } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import { SyntaxHighlighterProps } from 'react-syntax-highlighter';

const SyntaxHigh = forwardRef<HTMLDivElement, SyntaxHighlighterProps & { width?: string }>(
    ({ language, children, props, width }, ref) => {
      return (
        <SyntaxHighlighter
          ref={ref}
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
      );
    }
  );

  SyntaxHigh.displayName = 'SyntaxHigh';

export default SyntaxHigh;
