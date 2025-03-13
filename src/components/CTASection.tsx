import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Code, Github } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build the Future?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of developers who are already using Genesis to create
            faster, safer, and more maintainable applications.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="gap-2" asChild>
              <a href="/download">
                Get Started Today <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href="/docs">
                <Code className="h-5 w-5" />
                Read the Docs
              </a>
            </Button>
          </div>
          <div className="mt-8">
            <a
              href="https://github.com/genesis-lang"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Github className="h-5 w-5 mr-2" />
              View on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
