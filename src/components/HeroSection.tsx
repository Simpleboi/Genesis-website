import { motion } from "framer-motion";
import { ArrowRight, Download, Star } from "lucide-react";
import { Button } from "./ui/button";
import AnimatedCodeBlock from "./AnimatedCodeBlock";
import "../styles/Hero.scss";

interface HeroSectionProps {
  isDarkMode?: boolean;
}

const HeroSection = ({ isDarkMode = false }: HeroSectionProps) => {
  const codeExample = `// Genesis Hello World Example

void main() {
  // Define a greeting function
  string greet(string name) => String {
    return("Hello, (name)!")
  }
  
  // Create a list of names
  string[] names = ["World", "Developer", "Friend"]
  
  // Greet each name in the list
  for (int i = 0; i < names.length; i++) {
    print(greet(names[i]));
  }
  
  // Using Genesis' powerful concurrency
  async {
    // This runs in parallel
    print("Genesis makes concurrency easy!")
  }
}`;

  return (
    <section className="md:py-24 md:px-8 bg-gradient-to-b from-background to-muted/30 overflow-hidden main-banner">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              The Modern Programming Language for Modern Web Development
            </h1>
            <p className="text-xl text-muted-foreground">
              Genesis combines elegant syntax with powerful performance to help
              developers build better software faster.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="gap-2" asChild>
                <a href="/docs/getting-started">
                  Get Started <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="/download">
                  <Download className="h-4 w-4" /> Download
                </a>
              </Button>
            </div>
            <HeroStarStats />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <AnimatedCodeBlock code={codeExample} delay={400} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Handles the Stars
export const HeroStarStats = () => {
  return (
    <div className="flex items-center gap-4 pt-2 hero-star-container">
      <a
        href="https://github.com/Simpleboi/Genesis"
        className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        target="_blank"
      >
        <i className="bx bxl-github github-hero"></i>
        <span className="mr-1">Star on GitHub</span>
        <span className="flex items-center bg-muted px-2 py-1 rounded-full">
          <Star className="h-3 w-3 mr-1 text-yellow-500" /> 0.0k
        </span>
      </a>
    </div>
  );
};

export default HeroSection;
