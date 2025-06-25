import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Play, RotateCcw, Copy, Check, Download, Share } from "lucide-react";

type CodePlaygroundProps = {
  initialCode?: string;
  examples?: Array<{ name: string; code: string }>;
  onRun?: (code: string) => void;
};

const CodePlayground = ({
  initialCode = '// Welcome to Genesis Playground!\n\nfunc main() {\n  // Define a greeting function\n  func greet(name: String) -> String {\n    return "Hello, \\(name)!"\n  }\n  \n  // Create a list of names\n  let names = ["World", "Developer", "Friend"]\n  \n  // Greet each name in the list\n  for name in names {\n    println(greet(name))\n  }\n}',
  examples = [
    {
      name: "Hello World",
      code: '// Basic Hello World\n\nfunc main() {\n  println("Hello, Genesis!")\n}',
    },
    {
      name: "Functions",
      code: "// Genesis functions\n\nfunc add(a: Int, b: Int) -> Int {\n  return a + b\n}\n\nfunc multiply(a: Int, b: Int) -> Int {\n  return a * b\n}\n\nfunc main() {\n  println(add(5, 3))      // Outputs: 8\n  println(multiply(4, 2)) // Outputs: 8\n}",
    },
    {
      name: "Control Flow",
      code: '// Genesis control flow\n\nfunc main() {\n  let score = 85\n  \n  // If-else statement\n  if score >= 90 {\n    println("Grade: A")\n  } else if score >= 80 {\n    println("Grade: B")\n  } else if score >= 70 {\n    println("Grade: C")\n  } else {\n    println("Grade: D")\n  }\n  \n  // Switch statement\n  let day = "Monday"\n  switch day {\n    case "Saturday", "Sunday":\n      println("It\'s the weekend!")\n    case "Friday":\n      println("Almost the weekend!")\n    default:\n      println("It\'s a weekday.")\n  }\n}',
    },
  ],
  onRun = () => {},
}: CodePlaygroundProps) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);
  const [selectedExample, setSelectedExample] = useState("custom");

  React.useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [copied]);

  const handleRun = () => {
    try {
      // In a real implementation, this would execute the code
      // For now, we'll just simulate output
      setOutput(
        "> Program executed successfully\n> Output:\n\nHello, World!\nHello, Developer!\nHello, Friend!",
      );
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
          <h3 className="text-xl font-semibold">Genesis Playground</h3>
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

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Download className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Download code</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Share className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Share code</p>
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

      <div className="mt-6 space-y-4">
        <h3 className="text-xl font-semibold">About Genesis Playground</h3>
        <p className="text-muted-foreground">
          This playground allows you to experiment with Genesis code directly in
          your browser. Choose from the example templates or write your own code
          to explore the language features.
        </p>
        <div className="bg-muted p-4 rounded-md">
          <h4 className="font-medium mb-2">Playground Limitations</h4>
          <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
            <li>
              This is a simulated environment and doesn't execute actual Genesis
              code
            </li>
            <li>Some advanced language features may not be available</li>
            <li>For a full development environment, install Genesis locally</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CodePlayground;
