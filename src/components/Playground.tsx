import React from "react";
import { useTheme } from "./ThemeProvider";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CodePlayground from "./CodePlayground";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Download, Book, ExternalLink } from "lucide-react";

const Playground = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar onThemeToggle={toggleTheme} isDarkMode={theme === "dark"} />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Genesis Playground
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Experiment with Genesis code directly in your browser. Write,
                run, and share your code without installing anything.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="gap-2" asChild>
                  <a href="/docs">
                    <Book className="h-5 w-5" /> View Documentation
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <a href="/download">
                    <Download className="h-5 w-5" /> Download Genesis
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Playground Section */}
        <section className="py-12 px-4 md:px-8">
          <div className="container mx-auto max-w-6xl">
            <Tabs defaultValue="playground" className="w-full mb-8">
              <TabsList>
                <TabsTrigger value="playground">Playground</TabsTrigger>
                <TabsTrigger value="examples">Examples</TabsTrigger>
                <TabsTrigger value="help">Help</TabsTrigger>
              </TabsList>

              <TabsContent value="playground" className="mt-6">
                <CodePlayground />
              </TabsContent>

              <TabsContent value="examples" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">Basic Syntax</h3>
                    <p className="text-muted-foreground mb-4">
                      Examples demonstrating Genesis' core syntax features
                      including variables, functions, and control flow.
                    </p>
                    <Button variant="outline">View Examples</Button>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      Data Structures
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Learn how to work with arrays, dictionaries, sets, and
                      other data structures in Genesis.
                    </p>
                    <Button variant="outline">View Examples</Button>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">Concurrency</h3>
                    <p className="text-muted-foreground mb-4">
                      Explore Genesis' powerful concurrency features with
                      async/await, channels, and more.
                    </p>
                    <Button variant="outline">View Examples</Button>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      Error Handling
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      See how Genesis handles errors with its Result type,
                      try/catch, and other safety features.
                    </p>
                    <Button variant="outline">View Examples</Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="help" className="mt-6">
                <div className="space-y-6">
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">
                      Playground Help
                    </h3>
                    <p className="mb-4">
                      The Genesis Playground is an interactive environment where
                      you can write and run Genesis code directly in your
                      browser. It's perfect for learning the language, testing
                      small code snippets, or sharing examples with others.
                    </p>
                    <h4 className="font-medium mt-4 mb-2">Getting Started</h4>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li>Write your Genesis code in the editor on the left</li>
                      <li>Click the "Run" button to execute your code</li>
                      <li>See the output in the panel on the right</li>
                      <li>
                        Use the example templates to explore different language
                        features
                      </li>
                    </ol>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        Documentation
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        For comprehensive documentation on Genesis syntax,
                        standard library, and best practices.
                      </p>
                      <Button className="gap-2" asChild>
                        <a href="/docs">
                          View Documentation{" "}
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                    <div className="border rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        Community Support
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Get help from the Genesis community through forums,
                        Discord, and GitHub discussions.
                      </p>
                      <Button className="gap-2" asChild>
                        <a href="/community">
                          Join Community <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Playground;
