import React from "react";
import { useTheme } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import {
  Download as DownloadIcon,
  Terminal,
  Code,
  Github,
  Monitor,
  Server,
  Cpu,
  HardDrive,
  Shield,
} from "lucide-react";

import { DownloadHeader } from "@/features/Download/DownloadHeader";
import { DownloadOptions } from "@/features/Download/DownloadOptions";

export interface DownloadCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  version: string;
  date: string;
  size: string;
  downloadUrl: string;
  recommended?: boolean;
}

export const installCommands = {
  npm: "npm install -g genesis-project",
  brew: "brew install genesis-project",
  apt: "sudo apt-get install genesis-project",
  yum: "sudo yum install genesis-project",
  docker: "docker pull genesis-project/genesis:latest",
};

export const DownloadCard = ({
  title,
  icon,
  description,
  version,
  date,
  size,
  downloadUrl,
  recommended = false,
}: DownloadCardProps) => {
  return (
    <Card className={`p-6 ${recommended ? "border-primary border-2" : ""}`}>
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold">{title}</h3>
            {recommended && (
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary">
                Recommended
              </span>
            )}
          </div>
          <p className="text-muted-foreground mt-1 mb-4">{description}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground mb-4">
            <div>Version: {version}</div>
            <div>Released: {date}</div>
            <div>Size: {size}</div>
          </div>
          <Button className="gap-2">
            <DownloadIcon className="h-4 w-4" />
            Download
          </Button>
        </div>
      </div>
    </Card>
  );
};

const Download = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar onThemeToggle={toggleTheme} isDarkMode={theme === "dark"} />

      <main className="flex-grow">
        
        {/* Hero Section */}
        <DownloadHeader />

        {/* Download Options */}
        <DownloadOptions />

        {/* Previous Versions */}
        <section className="py-12 px-4 md:px-8 bg-muted/20">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-8">Previous Versions</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Version</th>
                    <th className="text-left py-3 px-4">Release Date</th>
                    <th className="text-left py-3 px-4">Platforms</th>
                    <th className="text-left py-3 px-4">Notes</th>
                    <th className="text-left py-3 px-4">Download</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4">1.1.0</td>
                    <td className="py-3 px-4">Feb 10, 2023</td>
                    <td className="py-3 px-4">Windows, macOS, Linux</td>
                    <td className="py-3 px-4">Performance improvements</td>
                    <td className="py-3 px-4">
                      <Button variant="ghost" size="sm">
                        <DownloadIcon className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4">1.0.5</td>
                    <td className="py-3 px-4">Dec 15, 2022</td>
                    <td className="py-3 px-4">Windows, macOS, Linux</td>
                    <td className="py-3 px-4">Bug fixes</td>
                    <td className="py-3 px-4">
                      <Button variant="ghost" size="sm">
                        <DownloadIcon className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4">1.0.0</td>
                    <td className="py-3 px-4">Oct 1, 2022</td>
                    <td className="py-3 px-4">Windows, macOS, Linux</td>
                    <td className="py-3 px-4">Initial stable release</td>
                    <td className="py-3 px-4">
                      <Button variant="ghost" size="sm">
                        <DownloadIcon className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 text-center">
              <Button variant="outline">View All Previous Versions</Button>
            </div>
          </div>
        </section>

        {/* Verification */}
        <section className="py-12 px-4 md:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Verify Downloads
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      All Genesis downloads are cryptographically signed. Verify
                      the integrity of your download using the checksums
                      provided below.
                    </p>
                    <div className="bg-muted p-4 rounded-md font-mono text-sm mb-4 overflow-x-auto">
                      # Verify checksum (example for macOS)
                      <br />
                      shasum -a 256 genesis-1.2.0-macos.pkg
                      <br />
                      # Should match:
                      <br />
                      e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
                    </div>
                    <Button variant="outline">Download PGP Signatures</Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <HardDrive size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Installation Help
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Need help with installation? Check out our detailed
                      installation guides for each platform or visit our
                      community forums.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="outline" size="sm">
                        Windows Guide
                      </Button>
                      <Button variant="outline" size="sm">
                        macOS Guide
                      </Button>
                      <Button variant="outline" size="sm">
                        Linux Guide
                      </Button>
                      <Button variant="outline" size="sm">
                        Community Forum
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 md:px-8 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Coding?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Download Genesis today and join thousands of developers building
              faster, safer applications with our modern programming language.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="gap-2">
                <DownloadIcon className="h-5 w-5" />
                Download Latest Version
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Code className="h-5 w-5" />
                View Documentation
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Download;
