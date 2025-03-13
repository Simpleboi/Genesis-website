import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface AnimatedCodeBlockProps {
  code: string;
  language?: string;
  delay?: number;
}

const AnimatedCodeBlock = ({
  code,
  language = "typescript",
  delay = 0,
}: AnimatedCodeBlockProps) => {
  const [displayedCode, setDisplayedCode] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex >= code.length) {
      setIsComplete(true);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedCode(code.substring(0, currentIndex + 1));
      setCurrentIndex(currentIndex + 1);
    }, 30); // Speed of typing

    return () => clearTimeout(timer);
  }, [code, currentIndex]);

  useEffect(() => {
    // Reset animation when code changes
    const initialDelay = setTimeout(() => {
      setDisplayedCode("");
      setCurrentIndex(0);
      setIsComplete(false);
    }, delay);

    return () => clearTimeout(initialDelay);
  }, [code, delay]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="bg-card rounded-lg shadow-lg border border-border overflow-hidden"
    >
      <div className="bg-muted/50 p-2 border-b flex items-center space-x-2">
        <div className="flex space-x-1">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-muted-foreground">
          {language === "typescript" ? "main.gen" : language}
        </div>
      </div>
      <pre className="p-4 text-sm font-mono overflow-x-auto">
        <code className={`language-${language}`}>{displayedCode}</code>
        {!isComplete && (
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-4 bg-primary ml-1"
          ></motion.span>
        )}
      </pre>
    </motion.div>
  );
};

export default AnimatedCodeBlock;
