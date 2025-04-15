import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { DownloadCard } from "@/pages/Download";
import { Monitor, Server, Cpu, Terminal, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { installCommands } from "@/pages/Download";
import { Button } from "@/components/ui/button";

export const DownloadOptions = () => {
  return (
    <section className="py-12 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <Tabs defaultValue="binaries" className="w-full">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-8">
            <TabsTrigger value="binaries">Binaries</TabsTrigger>
            <TabsTrigger value="package-managers">Package Managers</TabsTrigger>
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
                  <strong>Linux:</strong> Modern Linux distribution with glibc
                  2.28+
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
                      <Terminal className="h-4 w-4" /> Homebrew (macOS, Linux)
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
                    For developers who want to contribute or customize Genesis,
                    you can build from source code. The source is hosted on
                    GitHub under an open-source license.
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
              <h3 className="text-xl font-semibold mb-2">Build Requirements</h3>
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
  );
};
