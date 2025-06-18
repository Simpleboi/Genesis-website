import { useEffect, useRef } from "react";
import hljs from "highlight.js/lib/core";
import cpp from "highlight.js/lib/languages/cpp";
hljs.registerLanguage("cpp", cpp);
import "highlight.js/styles/github-dark.css";

type CodeBlockProps = {
  code: string;
  language?: string; 
};

export const CodeBlock = ({ code, language = "cpp" }: CodeBlockProps) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code, language]);

  return (
    <pre className="bg-muted rounded-md overflow-x-auto">
      <code ref={codeRef} className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
};
