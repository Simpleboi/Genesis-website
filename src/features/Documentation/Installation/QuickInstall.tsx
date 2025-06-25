import { TabsContent } from "@/components/ui/tabs";

export const QuickInstall = () => {
  return (
    <TabsContent value="quick" className="space-y-6">
      <section className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold tracking-tight mb-4">
          Quick Installation
        </h2>
        <p className="leading-7 mb-4">
          The fastest way to get Genesis running is using our installer script.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-2">macOS & Linux</h3>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code className="text-sm font-mono">
            {`curl -fsSL https://install.genesis-lang.org | sh`}
          </code>
        </pre>
        <p className="text-sm text-muted-foreground mt-2">
          This will download and install the latest version of Genesis.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-2">Windows</h3>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code className="text-sm font-mono">
            {`iwr https://install.genesis-lang.org/windows | iex`}
          </code>
        </pre>
        <p className="text-sm text-muted-foreground mt-2">
          Run this command in PowerShell as Administrator.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-2">Package Managers</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Homebrew (macOS)</h4>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm font-mono">
                {`brew install genesis-lang`}
              </code>
            </pre>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Chocolatey (Windows)</h4>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm font-mono">
                {`choco install genesis`}
              </code>
            </pre>
          </div>
          <div>
            <h4 className="font-semibold mb-2">APT (Ubuntu/Debian)</h4>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm font-mono">
                {`sudo apt update
sudo apt install genesis-lang`}
              </code>
            </pre>
          </div>
        </div>

        <div className="bg-muted p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold mb-2">System Requirements</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>64-bit operating system</li>
            <li>At least 2GB of available disk space</li>
            <li>Internet connection for package downloads</li>
            <li>Git (recommended for project management)</li>
          </ul>
        </div>
      </section>
    </TabsContent>
  );
};
