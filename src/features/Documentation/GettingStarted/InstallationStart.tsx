import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { QuickInstall } from "../Installation/QuickInstall";

export const GettingStartedInstallation = () => {
  return (
    <>
      {/* Installation Content */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Installing Genesis
        </h1>
        <p className="text-xl text-muted-foreground">
          Get Genesis up and running on your system in just a few steps.
        </p>
      </div>

      <Tabs defaultValue="quick" className="w-full">
        <TabsList className="w-full justify-start border-b rounded-none px-0 mb-4">
          <TabsTrigger
            value="quick"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Quick Install
          </TabsTrigger>
          <TabsTrigger
            value="manual"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Manual Install
          </TabsTrigger>
          <TabsTrigger
            value="verify"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Verification
          </TabsTrigger>
        </TabsList>

        {/* The Quick install section */}
        <QuickInstall />

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

            <h3 className="text-xl font-semibold mt-8 mb-2">
              Step 3: Add to PATH
            </h3>
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
                  <li>
                    Open System Properties → Advanced → Environment Variables
                  </li>
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

        <TabsContent value="verify" className="space-y-6">
          <section className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold tracking-tight mb-4">
              Verify Installation
            </h2>
            <p className="leading-7 mb-4">
              After installation, verify that Genesis is working correctly.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-2">Check Version</h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm font-mono">{`genesis --version`}</code>
            </pre>
            <p className="text-sm text-muted-foreground mt-2">
              This should output something like: Genesis 1.0.0
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              Test Compilation
            </h3>
            <p className="leading-7 mb-4">
              Create a simple test file to verify compilation works:
            </p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm font-mono">
                {`# Create test.gen
echo 'func main() { println("Genesis is working!") }' > test.gen

# Compile and run
genesis run test.gen`}
              </code>
            </pre>

            <h3 className="text-xl font-semibold mt-8 mb-2">IDE Setup</h3>
            <p className="leading-7 mb-4">
              For the best development experience, install Genesis support in
              your IDE:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                <strong>VS Code:</strong> Install the "Genesis Language Support"
                extension
              </li>
              <li>
                <strong>IntelliJ IDEA:</strong> Install the Genesis plugin from
                the marketplace
              </li>
              <li>
                <strong>Vim/Neovim:</strong> Use the genesis.vim syntax
                highlighting plugin
              </li>
              <li>
                <strong>Emacs:</strong> Install genesis-mode from MELPA
              </li>
            </ul>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-6 rounded-lg my-8">
              <h3 className="text-xl font-semibold mb-2 text-green-800 dark:text-green-200">
                Installation Complete!
              </h3>
              <p className="text-green-700 dark:text-green-300 mb-4">
                Genesis is now installed and ready to use. You can start writing
                your first Genesis program!
              </p>
              <Button className="bg-green-600 hover:bg-green-700">
                <a href="/docs/hello-world">Write Your First Program</a>
              </Button>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-2">Troubleshooting</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Command not found</h4>
                <p className="text-sm mb-2">
                  If you get "genesis: command not found":
                </p>
                <ul className="list-disc pl-6 text-sm space-y-1">
                  <li>Make sure Genesis is in your PATH</li>
                  <li>Restart your terminal</li>
                  <li>Try the full path to the genesis binary</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Permission denied</h4>
                <p className="text-sm mb-2">If you get permission errors:</p>
                <ul className="list-disc pl-6 text-sm space-y-1">
                  <li>
                    Make sure the genesis binary is executable:{" "}
                    <code>chmod +x genesis</code>
                  </li>
                  <li>Check file ownership and permissions</li>
                </ul>
              </div>
            </div>
          </section>
        </TabsContent>
      </Tabs>
    </>
  );
};
