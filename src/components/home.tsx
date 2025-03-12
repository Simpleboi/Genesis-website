import React from "react";
import { useTheme } from "./ThemeProvider";
import Navbar from "./Navbar";
import FeaturesSection from "./FeaturesSection";
import CodeEditor from "./CodeEditor";
import Footer from "./Footer";

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar onThemeToggle={toggleTheme} isDarkMode={theme === "dark"} />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  The Modern Programming Language for Tomorrow's Solutions
                </h1>
                <p className="text-xl text-muted-foreground">
                  Genesis combines elegant syntax with powerful performance to
                  help developers build better software faster.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="/docs/getting-started"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
                  >
                    Get Started
                  </a>
                  <a
                    href="/download"
                    className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-base font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Download
                  </a>
                </div>
              </div>
              <div className="bg-card rounded-lg shadow-lg border border-border overflow-hidden">
                <div className="bg-muted/50 p-2 border-b flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    main.genesis
                  </div>
                </div>
                <pre className="p-4 text-sm font-mono overflow-x-auto">
                  <code className="language-typescript">
                    {`// Genesis Hello World Example

func main() {
  // Define a greeting function
  func greet(name: String) -> String {
    return "Hello, \\(name)!"
  }
  
  // Create a list of names
  let names = ["World", "Developer", "Friend"]
  
  // Greet each name in the list
  for name in names {
    println(greet(name))
  }
  
  // Using Genesis' powerful concurrency
  async {
    // This runs in parallel
    println("Genesis makes concurrency easy!")
  }
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <FeaturesSection />

        {/* Interactive Code Editor */}
        <section className="py-16 px-4 md:px-8 bg-muted/20">
          <div className="container mx-auto max-w-6xl text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Try Genesis in Your Browser
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the elegance and power of Genesis with our interactive
              code editor.
            </p>
          </div>
          <CodeEditor />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
