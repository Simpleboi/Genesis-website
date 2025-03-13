import React from "react";
import { useTheme } from "./ThemeProvider";
import Navbar from "./Navbar";
import FeaturesSection from "./FeaturesSection";
import CodeEditor from "./CodeEditor";
import Footer from "./Footer";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import TestimonialSection from "./TestimonialSection";
import StatsBanner from "./StatsBanner";
import ComparisonSection from "./ComparisonSection";
import CTASection from "./CTASection";
import { Button } from "./ui/button";

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar onThemeToggle={toggleTheme} isDarkMode={theme === "dark"} />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection isDarkMode={theme === "dark"} />

        {/* Stats Banner */}
        <StatsBanner />

        {/* Features Section */}
        <FeaturesSection />

        {/* Comparison Section */}
        <ComparisonSection />

        {/* Interactive Code Editor */}
        <section className="py-16 px-4 md:px-8 bg-muted/20">
          <div className="container mx-auto max-w-6xl text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Try Genesis in Your Browser
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Experience the elegance and power of Genesis with our interactive
              code editor.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <CodeEditor />
          </motion.div>
        </section>

        {/* Testimonials Section */}
        <TestimonialSection />

        {/* Call to Action Section */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
