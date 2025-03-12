import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Play, RotateCcw, Copy, Check } from "lucide-react";

interface CodeEditorProps {
  initialCode?: string;
  examples?: Array<{ name: string; code: string }>;
  onRun?: (code: string) => void;
}

const CodeEditor = ({
  initialCode = '// Welcome to Genesis!\n\nfunction greet(name) {\n  return `Hello, ${name}!`;\n}\n\nconsole.log(greet("World"));\n\n// Try editing this code and click Run',
  examples = [
    {
      name: "Hello World",
      code: '// Basic Hello World\n\nconsole.log("Hello, Genesis!");',
    },
    {
      name: "Functions",
      code: "// Genesis functions\n\nfunction add(a, b) {\n  return a + b;\n}\n\nconst multiply = (a, b) => a * b;\n\nconsole.log(add(5, 3));\nconsole.log(multiply(4, 2));",
    },
    {
      name: "Data Structures",
      code: '// Genesis data structures\n\nconst person = {\n  name: "Alice",\n  age: 28,\n  greet() {\n    return `Hello, I\'m ${this.name}`;\n  }\n};\n\nconst numbers = [1, 2, 3, 4, 5];\nconst doubled = numbers.map(n => n * 2);\n\nconsole.log(person.greet());\nconsole.log(doubled);',
    },
  ],
  onRun = () => {},
}: CodeEditorProps) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);
  const [selectedExample, setSelectedExample] = useState("custom");

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [copied]);

  const handleRun = () => {
    try {
      // In a real implementation, this would execute the code
      // For now, we'll just simulate output
      setOutput(`> Program executed successfully\n> Hello, World!`);
      onRun(code);
    } catch (error) {
      setOutput(
        `Error: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  };

  const handleReset = () => {
    setCode(initialCode);
    setOutput("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
    });
  };

  const handleExampleChange = (example: string) => {
    if (example === "custom") {
      setCode(initialCode);
    } else {
      const selectedEx = examples.find((ex) => ex.name === example);
      if (selectedEx) {
        setCode(selectedEx.code);
      }
    }
    setSelectedExample(example);
    setOutput("");
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6 bg-background">
      <Card className="border shadow-lg overflow-hidden">
        <div className="p-4 border-b bg-muted/50 flex justify-between items-center">
          <h3 className="text-xl font-semibold">Try Genesis</h3>
          <div className="flex items-center space-x-2">
            <Tabs
              value={selectedExample}
              onValueChange={handleExampleChange}
              className="w-[400px]"
            >
              <TabsList className="grid grid-cols-4">
                <TabsTrigger value="custom">Custom</TabsTrigger>
                {examples.map((example) => (
                  <TabsTrigger key={example.name} value={example.name}>
                    {example.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="border-r">
            <div className="p-2 bg-muted/30 border-b flex justify-between items-center">
              <span className="text-sm font-medium">Editor</span>
              <div className="flex space-x-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleCopy}
                        className="h-8 w-8 p-0"
                      >
                        {copied ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{copied ? "Copied!" : "Copy code"}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleReset}
                        className="h-8 w-8 p-0"
                      >
                        <RotateCcw className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Reset code</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-[400px] p-4 font-mono text-sm bg-background resize-none focus:outline-none"
              spellCheck="false"
            />
          </div>

          <div>
            <div className="p-2 bg-muted/30 border-b flex justify-between items-center">
              <span className="text-sm font-medium">Output</span>
              <Button onClick={handleRun} size="sm" className="gap-1">
                <Play className="h-4 w-4" /> Run
              </Button>
            </div>
            <pre className="w-full h-[400px] p-4 font-mono text-sm bg-black text-green-400 overflow-auto">
              {output || "// Output will appear here after running your code"}
            </pre>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CodeEditor;
