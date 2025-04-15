import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import SyntaxGuide from "@/components/SyntaxGuide";
import {
  ChevronRight,
} from "lucide-react";
import { DocSideBar } from "@/features/Documentation/DocSideBar";
import { DocIntroduction } from "@/features/Documentation/DocIntroduction";

// The Documentation page
const Documentation = () => {
  const { theme, toggleTheme } = useTheme();
  const [currentPage, setCurrentPage] = useState("introduction");


  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar onThemeToggle={toggleTheme} isDarkMode={theme === "dark"} />

      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <DocSideBar 
          currentPage={currentPage}
          onPageChange={(newPage) => setCurrentPage(newPage)}/>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="space-y-8">
              {/* Breadcrumbs */}
              <div className="flex items-center text-sm text-muted-foreground">
                <a href="/" className="hover:text-foreground transition-colors">
                  Home
                </a>
                <ChevronRight className="h-4 w-4 mx-2" />
                <a
                  href="/docs"
                  className="hover:text-foreground transition-colors"
                >
                  Documentation
                </a>
                <ChevronRight className="h-4 w-4 mx-2" />
                <span className="text-foreground">
                  {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
                </span>
              </div>

              {/* Content */}
              {currentPage === "syntax" ? (
                <SyntaxGuide />
              ) : (
                <DocIntroduction />
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-8 border-t">
                <Button variant="outline" className="gap-2">
                  <ChevronRight className="h-4 w-4 rotate-180" />
                  Previous: Getting Started
                </Button>
                <Button variant="outline" className="gap-2">
                  Next: Installation
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Documentation;
