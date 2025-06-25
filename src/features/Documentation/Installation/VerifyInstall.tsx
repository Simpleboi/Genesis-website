import { TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export const VerifyInstall = () => {
  return (
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

        <h3 className="text-xl font-semibold mt-8 mb-2">Test Compilation</h3>
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
          For the best development experience, install Genesis support in your
          IDE:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>
            <strong>VS Code:</strong> Install the "Genesis Language Support"
            extension
          </li>
          <li>
            <strong>IntelliJ IDEA:</strong> Install the Genesis plugin from the
            marketplace
          </li>
          <li>
            <strong>Vim/Neovim:</strong> Use the genesis.vim syntax highlighting
            plugin
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
  );
};
