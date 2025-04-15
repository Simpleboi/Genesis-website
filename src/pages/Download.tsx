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

interface DownloadCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  version: string;
  date: string;
  size: string;
  downloadUrl: string;
  recommended?: boolean;
}

const DownloadCard = ({
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

  const installCommands = {
    npm: "npm install -g genesis-project",
    brew: "brew install genesis-project",
    apt: "sudo apt-get install genesis-project",
    yum: "sudo yum install genesis-project",
    docker: "docker pull genesis-project/genesis:latest",
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar onThemeToggle={toggleTheme} isDarkMode={theme === "dark"} />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Download Genesis
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Get started with Genesis by downloading the latest version for
                your platform. Genesis is free and open source, available for
                Windows, macOS, and Linux.
              </p>
            </div>
          </div>
        </section>

        {/* Download Options */}
        <section className="py-12 px-4 md:px-8">
          <div className="container mx-auto max-w-6xl">
            <Tabs defaultValue="binaries" className="w-full">
              <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-8">
                <TabsTrigger value="binaries">Binaries</TabsTrigger>
                <TabsTrigger value="package-managers">
                  Package Managers
                </TabsTrigger>
                <TabsTrigger value="source">Source Code</TabsTrigger>
              </TabsList>

              <TabsContent value="binaries" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <DownloadCard
                    title="Windows"
                    icon={<Monitor size={24} />}
                    description="Windows 10/11 64-bit installer with all components"
                    version="1.2.0"
                    date="May 15, 2023"
                    size="42 MB"
                    downloadUrl="/downloads/genesis-1.2.0-windows-x64.exe"
                    recommended={true}
                  />

                  <DownloadCard
                    title="macOS"
                    icon={<Monitor size={24} />}
                    description="macOS 11+ Universal Binary (Intel & Apple Silicon)"
                    version="1.2.0"
                    date="May 15, 2023"
                    size="38 MB"
                    downloadUrl="/downloads/genesis-1.2.0-macos.pkg"
                    recommended={true}
                  />

                  <DownloadCard
                    title="Linux (x86_64)"
                    icon={<Server size={24} />}
                    description="For Ubuntu, Debian, Fedora, and other major distributions"
                    version="1.2.0"
                    date="May 15, 2023"
                    size="35 MB"
                    downloadUrl="/downloads/genesis-1.2.0-linux-x64.tar.gz"
                    recommended={true}
                  />

                  <DownloadCard
                    title="Linux (ARM64)"
                    icon={<Cpu size={24} />}
                    description="For Raspberry Pi and other ARM-based systems"
                    version="1.2.0"
                    date="May 15, 2023"
                    size="32 MB"
                    downloadUrl="/downloads/genesis-1.2.0-linux-arm64.tar.gz"
                  />
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    System Requirements
                  </h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>Windows:</strong> Windows 10 or later, 64-bit
                    </li>
                    <li>
                      <strong>macOS:</strong> macOS 11 (Big Sur) or later
                    </li>
                    <li>
                      <strong>Linux:</strong> Modern Linux distribution with
                      glibc 2.28+
                    </li>
                    <li>
                      <strong>Disk Space:</strong> 200 MB minimum
                    </li>
                    <li>
                      <strong>Memory:</strong> 512 MB minimum, 2 GB recommended
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="package-managers" className="space-y-8">
                <div className="grid grid-cols-1 gap-6">
                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Install via Package Managers
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Genesis can be installed using popular package managers.
                      Choose the command for your platform:
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Terminal className="h-4 w-4" /> npm (All Platforms)
                        </h4>
                        <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto">
                          {installCommands.npm}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Terminal className="h-4 w-4" /> Homebrew (macOS,
                          Linux)
                        </h4>
                        <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto">
                          {installCommands.brew}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Terminal className="h-4 w-4" /> APT (Debian, Ubuntu)
                        </h4>
                        <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto">
                          {installCommands.apt}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Terminal className="h-4 w-4" /> YUM (RHEL, CentOS,
                          Fedora)
                        </h4>
                        <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto">
                          {installCommands.yum}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Terminal className="h-4 w-4" /> Docker
                        </h4>
                        <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto">
                          {installCommands.docker}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="source" className="space-y-8">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <Github size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Build from Source
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        For developers who want to contribute or customize
                        Genesis, you can build from source code. The source is
                        hosted on GitHub under an open-source license.
                      </p>
                      <div className="bg-muted p-4 rounded-md font-mono text-sm mb-6 overflow-x-auto">
                        git clone https://github.com/genesis-lang/genesis.git
                        <br />
                        cd genesis
                        <br />
                        make
                        <br />
                        make install
                      </div>
                      <Button variant="outline" className="gap-2">
                        <Github className="h-4 w-4" />
                        View on GitHub
                      </Button>
                    </div>
                  </div>
                </Card>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    Build Requirements
                  </h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      C++17 compatible compiler (GCC 8+, Clang 7+, MSVC 2019+)
                    </li>
                    <li>CMake 3.15 or newer</li>
                    <li>Python 3.6 or newer (for build scripts)</li>
                    <li>Git</li>
                    <li>LLVM 10.0 or newer (optional, for optimized builds)</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

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
