import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

// This is the introduction tab inside the "Getting Started" section in the side bar
export const DocIntroduction = () => {
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Introduction to Genesis
        </h1>
        <p className="text-xl text-muted-foreground">
          Learn about Genesis, a modern programming language designed for
          simplicity, performance, and developer happiness.
        </p>
      </div>

      {/* Content Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="w-full justify-start border-b rounded-none px-0 mb-4">
          <TabsTrigger
            value="overview"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="examples"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Examples
          </TabsTrigger>
          <TabsTrigger
            value="api"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            API Reference
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <section className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold tracking-tight mt-10 mb-4">
              What is Genesis?
            </h2>
            <p className="leading-7 mb-4">
              Genesis is a modern, high-level programming language designed to
              make developers more productive while writing safe, maintainable,
              and efficient code. It combines the best features of multiple
              programming paradigms, offering a clean syntax, powerful type
              system, and excellent performance characteristics.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight mt-10 mb-4">
              Key Features
            </h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li className="leading-7">
                <strong>Elegant Syntax</strong>: Clean, readable code with
                minimal boilerplate
              </li>
              <li className="leading-7">
                <strong>Type Safety</strong>: Strong static typing with powerful
                type inference
              </li>
              <li className="leading-7">
                <strong>Memory Safety</strong>: No null pointer exceptions or
                buffer overflows
              </li>
              <li className="leading-7">
                <strong>Concurrency</strong>: Built-in support for asynchronous
                programming and parallelism
              </li>
              <li className="leading-7">
                <strong>Performance</strong>: Comparable to C/C++ for many
                workloads
              </li>
              <li className="leading-7">
                <strong>Cross-Platform</strong>: Runs on all major operating
                systems and architectures
              </li>
            </ul>

            <h2 className="text-2xl font-semibold tracking-tight mt-10 mb-4">
              Philosophy
            </h2>
            <p className="leading-7 mb-4">
              Genesis was created with the belief that programming languages
              should be both powerful and enjoyable to use. We focus on
              developer experience without compromising on performance or
              safety. The language is designed to be approachable for beginners
              while offering the depth and flexibility that experienced
              developers demand.
            </p>

            <div className="bg-muted p-6 rounded-lg my-8">
              <h3 className="text-xl font-semibold mb-2">
                Ready to get started?
              </h3>
              <p className="mb-4">
                Follow our installation guide to set up Genesis on your machine
                and write your first program.
              </p>
              <Button>
                <a href="/docs/installation">Installation Guide</a>
              </Button>
            </div>

            <h2 className="text-2xl font-semibold tracking-tight mt-10 mb-4">
              Community
            </h2>
            <p className="leading-7 mb-4">
              Genesis has a vibrant and welcoming community of developers. Join
              us on GitHub, Discord, or the forums to ask questions, share your
              projects, and contribute to the language's development.
            </p>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold tracking-tight mb-4">
              Code Examples
            </h2>

            <h3 className="text-xl font-semibold mt-8 mb-2">Hello World</h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm font-mono">
                {`// The classic Hello World program
  func main() {
      println("Hello, World!")
  }`}
              </code>
            </pre>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              Variables and Types
            </h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm font-mono">
                {`// Variables and basic types
  func main() {
      // Type inference
      let name = "Genesis"
      let version = 1.0
      let is_awesome = true
      
      // Explicit typing
      let count: Int = 42
      let pi: Float = 3.14159
      let message: String = "Hello"
      
      // Constants
      const MAX_USERS = 1000
      
      println("Language: \(name) v\(version)")
      println("Users: \(count)/\(MAX_USERS)")
  }`}
              </code>
            </pre>

            <h3 className="text-xl font-semibold mt-8 mb-2">Functions</h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm font-mono">
                {`// Function definitions and usage
  func greet(name: String) -> String {
      return "Hello, \(name)!"
  }
  
  // Functions with default parameters
  func calculate(a: Int, b: Int, operation: String = "add") -> Int {
      switch operation {
          case "add":
              return a + b
          case "subtract":
              return a - b
          case "multiply":
              return a * b
          case "divide":
              if b != 0 {
                  return a / b
              } else {
                  panic("Division by zero")
              }
          default:
              panic("Unknown operation: \(operation)")
      }
  }
  
  func main() {
      let message = greet("Developer")
      println(message)
      
      let sum = calculate(10, 5)
      let difference = calculate(10, 5, operation: "subtract")
      
      println("Sum: \(sum)")
      println("Difference: \(difference)")
  }`}
              </code>
            </pre>

            <h3 className="text-xl font-semibold mt-8 mb-2">Data Structures</h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm font-mono">
                {`// Common data structures
  func main() {
      // Arrays
      let numbers = [1, 2, 3, 4, 5]
      println("First number: \(numbers[0])")
      
      // Dictionaries (Maps)
      let user = {
          "name": "Alice",
          "age": 30,
          "role": "Developer"
      }
      println("User: \(user["name"])")
      
      // Sets
      let uniqueNumbers = Set([1, 2, 2, 3, 3, 3])
      println("Unique numbers: \(uniqueNumbers)")
      
      // Tuples
      let point = (x: 10, y: 20)
      println("Point: (\(point.x), \(point.y))")
  }`}
              </code>
            </pre>

            <div className="bg-muted p-6 rounded-lg my-8">
              <h3 className="text-xl font-semibold mb-2">
                Want to see more examples?
              </h3>
              <p className="mb-4">
                Check out our examples repository for more complex code samples
                and complete applications built with Genesis.
              </p>
              <Button variant="outline">
                <a href="/examples">Browse Examples</a>
              </Button>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="api" className="space-y-6">
          <section className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold tracking-tight mb-4">
              API Reference
            </h2>
            <p className="leading-7 mb-6">
              This section provides detailed information about the Genesis
              standard library and core APIs.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              Standard Library
            </h3>
            <table className="w-full border-collapse mb-8">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-4">Module</th>
                  <th className="text-left py-2 px-4">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4">
                    <code className="text-sm font-mono">core</code>
                  </td>
                  <td className="py-2 px-4">
                    Core language features and primitives
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">
                    <code className="text-sm font-mono">io</code>
                  </td>
                  <td className="py-2 px-4">
                    Input/output operations and file handling
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">
                    <code className="text-sm font-mono">collections</code>
                  </td>
                  <td className="py-2 px-4">Data structures and algorithms</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">
                    <code className="text-sm font-mono">net</code>
                  </td>
                  <td className="py-2 px-4">
                    Networking and HTTP functionality
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">
                    <code className="text-sm font-mono">async</code>
                  </td>
                  <td className="py-2 px-4">
                    Asynchronous programming utilities
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">
                    <code className="text-sm font-mono">crypto</code>
                  </td>
                  <td className="py-2 px-4">
                    Cryptography and security functions
                  </td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-xl font-semibold mt-8 mb-2">Core Types</h3>
            <p className="leading-7 mb-4">
              Genesis provides a rich set of built-in types for common
              programming tasks:
            </p>

            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li className="leading-7">
                <code className="text-sm font-mono">Int</code>,{" "}
                <code className="text-sm font-mono">Float</code>,{" "}
                <code className="text-sm font-mono">Bool</code> - Basic
                primitive types
              </li>
              <li className="leading-7">
                <code className="text-sm font-mono">String</code> - Unicode text
                handling
              </li>
              <li className="leading-7">
                <code className="text-sm font-mono">Array&lt;T&gt;</code>,{" "}
                <code className="text-sm font-mono">Map&lt;K,V&gt;</code>,{" "}
                <code className="text-sm font-mono">Set&lt;T&gt;</code> -
                Collection types
              </li>
              <li className="leading-7">
                <code className="text-sm font-mono">Optional&lt;T&gt;</code> -
                Type-safe nullable values
              </li>
              <li className="leading-7">
                <code className="text-sm font-mono">Result&lt;T,E&gt;</code> -
                Error handling type
              </li>
              <li className="leading-7">
                <code className="text-sm font-mono">Future&lt;T&gt;</code> -
                Asynchronous computation type
              </li>
            </ul>

            <div className="bg-muted p-6 rounded-lg my-8">
              <h3 className="text-xl font-semibold mb-2">
                Need detailed API documentation?
              </h3>
              <p className="mb-4">
                For comprehensive API documentation with all methods,
                properties, and examples, visit our complete API reference.
              </p>
              <Button variant="outline">
                <a href="/api-reference">Full API Reference</a>
              </Button>
            </div>
          </section>
        </TabsContent>
      </Tabs>
    </>
  );
};
