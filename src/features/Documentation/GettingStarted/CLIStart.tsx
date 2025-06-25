
export const CLIStart = () => {
  return (
    <section className="prose dark:prose-invert max-w-none">
      <h2 className="text-4xl font-bold tracking-tight mb-4">
        ClI Commands
      </h2>
      <p className="leading-7 mb-4">
        Below is a list of CLI commands to help you work more efficiently with Genesis.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-2">Build your Genesis code</h3>
      <p className="text-sm text-muted-foreground my-2">
        Use the <code>build</code> command followed by the path to the Genesis file, then use the <code>-o</code> option followed by the path to where you want the output JavaScript file to be.
      </p>
      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
        <code className="text-sm font-mono">
          {`genesis build <file> -o <output>`}
        </code>
      </pre>
      <p className="text-sm text-muted-foreground my-2">
        An example of this is as follows:
      </p>
      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
        <code className="text-sm font-mono">
          {`genesis build ./index.gen -o ./index.js`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold mt-8 mb-2">Transpile and Run the Genesis File</h3>
      <p className="text-sm text-muted-foreground my-2">
        To transpile your genesis code and immediately run the program, use the following command: 
      </p>
      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
        <code className="text-sm font-mono">
          {`genesis run <filename>`}
        </code>
      </pre>
      <p className="text-sm text-muted-foreground my-2">
        An example of this is as follows: 
      </p>
      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
        <code className="text-sm font-mono">
          {`genesis run ./index.gen`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold mt-8 mb-2">List all Genesis Commands</h3>
      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
        <code className="text-sm font-mono">
          {`genesis --help`}
        </code>
      </pre>
      <p className="text-sm text-muted-foreground my-2">
        This will list out all available genesis commands 
      </p>
      

      <div className="bg-muted p-6 rounded-lg my-8">
        <h3 className="text-xl font-semibold mb-2">System Requirements</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Node.js</li>
          <li>Something?</li>
        </ul>
      </div>
    </section>
  );
};
