import { TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export const ManualInstall = () => {
  return (
    <TabsContent value="manual" className="space-y-6">
      <section className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold tracking-tight mb-4">
          Manual Installation
        </h2>
        <p className="leading-7 mb-4">
          For more control over the installation process, you can install
          Genesis manually.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-2">
          Step 1: Download Genesis
        </h3>
        <p className="leading-7 mb-4">
          Download the latest release from our GitHub releases page:
        </p>
        <Button variant="outline" className="mb-4">
          <a href="https://github.com/genesis-lang/genesis/releases">
            Download Latest Release
          </a>
        </Button>

        <h3 className="text-xl font-semibold mt-8 mb-2">
          Step 2: Extract the Archive
        </h3>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code className="text-sm font-mono">
            {`# Linux/macOS
tar -xzf genesis-v1.0.0-linux-x64.tar.gz

# Windows (PowerShell)
Expand-Archive genesis-v1.0.0-windows-x64.zip`}
          </code>
        </pre>

        <h3 className="text-xl font-semibold mt-8 mb-2">Step 3: Add to PATH</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Linux/macOS (Bash/Zsh)</h4>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm font-mono">
                {`# Add to ~/.bashrc or ~/.zshrc
export PATH="$HOME/genesis/bin:$PATH"

# Reload shell configuration
source ~/.bashrc  # or ~/.zshrc`}
              </code>
            </pre>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Windows</h4>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Open System Properties → Advanced → Environment Variables</li>
              <li>Edit the PATH variable for your user</li>
              <li>Add the path to the Genesis bin directory</li>
              <li>Click OK and restart your terminal</li>
            </ol>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-8 mb-2">
          Step 4: Install Dependencies
        </h3>
        <p className="leading-7 mb-4">
          Genesis requires some system dependencies:
        </p>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Ubuntu/Debian</h4>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm font-mono">
                {`sudo apt install build-essential libssl-dev`}
              </code>
            </pre>
          </div>
          <div>
            <h4 className="font-semibold mb-2">CentOS/RHEL</h4>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm font-mono">
                {`sudo yum groupinstall "Development Tools"
sudo yum install openssl-devel`}
              </code>
            </pre>
          </div>
          <div>
            <h4 className="font-semibold mb-2">macOS</h4>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm font-mono">
                {`xcode-select --install`}
              </code>
            </pre>
          </div>
        </div>
      </section>
    </TabsContent>
  );
};
