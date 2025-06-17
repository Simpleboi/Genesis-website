import { TabsContent } from "@/components/ui/tabs";

export const VariableBasics = () => {
  return (
    <TabsContent value="basics" className="space-y-6">
      <section className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold tracking-tight mb-4">
          Basic Syntax
        </h2>
        <p className="leading-7 mb-4">
          Genesis uses a clean, minimal syntax designed to be readable and
          expressive. Here are the fundamental elements:
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-2">Comments</h3>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code className="text-sm font-mono">
            {`// This is a single-line comment

/* This is a multi-line comment
   that spans multiple lines */

/// Documentation comment for functions and types`}
          </code>
        </pre>

        <h3 className="text-xl font-semibold mt-8 mb-2">
          Variables and Constants
        </h3>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code className="text-sm font-mono">
            {`// Variables are declared with 'let'
let name = "Genesis"    // Type inference
let age: Int = 30      // Explicit type

// Constants are declared with 'const'
const PI = 3.14159
const MAX_USERS: Int = 1000`}
          </code>
        </pre>

        <h3 className="text-xl font-semibold mt-8 mb-2">Basic Types</h3>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code className="text-sm font-mono">
            {`// Numeric types
let integer: Int = 42
let float: Float = 3.14
let double: Double = 2.71828

// Boolean
let isEnabled: Bool = true

// String
let greeting: String = "Hello, World!"

// Character
let letter: Char = 'A'

// Type aliases
type UserId = Int
let userId: UserId = 12345`}
          </code>
        </pre>

        <div className="bg-muted p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold mb-2">Syntax Conventions</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Statements don't require semicolons (though they're allowed)
            </li>
            <li>Code blocks are enclosed in curly braces {`{}`}</li>
            <li>
              Indentation is not syntactically significant but recommended for
              readability
            </li>
            <li>Type names are capitalized (e.g., Int, String)</li>
            <li>Variable and function names use camelCase</li>
          </ul>
        </div>
      </section>
    </TabsContent>
  );
};
