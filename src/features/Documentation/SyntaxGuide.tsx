import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/Codeblock";
import { Comments } from "@/lib/SyntaxCode";
import { Variables } from "@/lib/SyntaxCode";
import { BasicTypes } from "@/lib/SyntaxCode";

const SyntaxGuide = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Genesis Syntax
        </h1>
        <p className="text-xl text-muted-foreground">
          Learn the elegant and expressive syntax of the Genesis programming
          language.
        </p>
      </div>

      <Tabs defaultValue="basics" className="w-full">
        <TabsList className="w-full justify-start border-b rounded-none px-0 mb-4">
          <TabsTrigger
            value="basics"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Basics
          </TabsTrigger>
          <TabsTrigger
            value="expressions"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Expressions
          </TabsTrigger>
          <TabsTrigger
            value="statements"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Statements
          </TabsTrigger>
          <TabsTrigger
            value="advanced"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Advanced
          </TabsTrigger>
        </TabsList>

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
            <CodeBlock code={Comments} />

            <h3 className="text-xl font-semibold mt-8 mb-2">
              Variables and Constants
            </h3>
            <CodeBlock code={Variables} language="cpp" />

            <h3 className="text-xl font-semibold mt-8 mb-2">Basic Types</h3>
            <CodeBlock code={BasicTypes} language="cpp" />
            <p className="leading-7 my-4">
              Genesis supports custom types and type aliases but they are still experimental in version <code>0.9.3</code>, a stable release is planned for version <code>0.9.4</code>
            </p>

            <div className="bg-muted p-6 rounded-lg my-8">
              <h3 className="text-xl font-semibold mb-2">Syntax Conventions</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Statements end with a semicolon <code>;</code>.
                </li>
                <li>
                  Strings are enclosed in double quotes <code>"like this"</code>
                </li>
                <li>Code blocks are enclosed in curly braces {`{}`}</li>
                <li>
                  Indentation is not syntactically significant but recommended
                  for readability
                </li>
                <li>Type names are lowercased (e.g., int, string)</li>
                <li>Variable and function names use camelCase</li>
              </ul>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="expressions" className="space-y-6">
          <section className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold tracking-tight mb-4">
              Expressions
            </h2>
            <p className="leading-7 mb-4">
              Expressions in Genesis produce values. Here are the common
              expression types:
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              Arithmetic Expressions
            </h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm font-mono">
                {`// Basic arithmetic
let sum = 5 + 3        // Addition
let diff = 10 - 4      // Subtraction
let product = 6 * 7    // Multiplication
let quotient = 20 / 4  // Division
let remainder = 10 % 3 // Modulo

// Compound assignment
let x = 5
x += 3  // Same as x = x + 3
x *= 2  // Same as x = x * 2

// Increment and decrement
x++     // Same as x = x + 1
x--     // Same as x = x - 1`}
              </code>
            </pre>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              Comparison Expressions
            </h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm font-mono">
                {`// Equality
let isEqual = (a == b)      // Equal to
let notEqual = (a != b)     // Not equal to

// Relational
let greater = (a > b)       // Greater than
let less = (a < b)          // Less than
let greaterEqual = (a >= b) // Greater than or equal to
let lessEqual = (a <= b)    // Less than or equal to`}
              </code>
            </pre>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              Logical Expressions
            </h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm font-mono">
                {`// Logical operators
let and = (a && b)  // Logical AND
let or = (a || b)   // Logical OR
let not = !a        // Logical NOT

// Short-circuit evaluation
if (isValid && processData()) {
    // processData() only called if isValid is true
}

if (hasCache || fetchData()) {
    // fetchData() only called if hasCache is false
}`}
              </code>
            </pre>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              String Expressions
            </h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm font-mono">
                {`// String concatenation
let fullName = firstName + " " + lastName

// String interpolation
let greeting = "Hello, \(name)!"
let stats = "Score: \(score)/\(total) (\(percentage)%)"

// Multiline strings
let message = """
    This is a multi-line string.
    It preserves line breaks and indentation.
    Very useful for longer text content.
    """`}
              </code>
            </pre>
          </section>
        </TabsContent>

        <TabsContent value="statements" className="space-y-6">
          <section className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold tracking-tight mb-4">
              Statements
            </h2>
            <p className="leading-7 mb-4">
              Statements control the flow of execution in Genesis programs:
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              Conditional Statements
            </h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm font-mono">
                {`// If statement
if condition {
    // Code executed if condition is true
} else if anotherCondition {
    // Code executed if anotherCondition is true
} else {
    // Code executed if all conditions are false
}

// Ternary conditional operator
let status = isActive ? "Active" : "Inactive"

// Switch statement
switch value {
    case 1:
        println("One")
    case 2, 3:
        println("Two or Three")
    case let x where x > 10:
        println("Greater than 10: \(x)")
    default:
        println("Other value: \(value)")
}`}
              </code>
            </pre>

            <h3 className="text-xl font-semibold mt-8 mb-2">Loops</h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm font-mono">
                {`// For loop
for i in 1...5 {
    println(i)  // Prints 1, 2, 3, 4, 5
}

// For loop with half-open range
for i in 1..<5 {
    println(i)  // Prints 1, 2, 3, 4
}

// For loop with collections
for item in items {
    println(item)
}

// While loop
while condition {
    // Code executed while condition is true
}

// Do-while loop
do {
    // Code executed at least once
} while condition

// Break and continue
for i in 1...10 {
    if i == 3 {
        continue  // Skip to next iteration
    }
    if i == 8 {
        break     // Exit the loop
    }
    println(i)
}`}
              </code>
            </pre>

            <h3 className="text-xl font-semibold mt-8 mb-2">Functions</h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm font-mono">
                {`// Basic function
func greet(name: String) -> String {
    return "Hello, \(name)!"
}

// Function with default parameter
func power(base: Int, exponent: Int = 2) -> Int {
    var result = 1
    for _ in 1...exponent {
        result *= base
    }
    return result
}

// Function with multiple return values using tuple
func minMax(array: [Int]) -> (min: Int, max: Int) {
    // ...
    return (minimum, maximum)
}

// Calling functions
let message = greet(name: "World")
let squared = power(base: 5)           // Uses default exponent
let cubed = power(base: 5, exponent: 3)
let (min, max) = minMax(array: numbers)`}
              </code>
            </pre>
          </section>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-6">
          <section className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold tracking-tight mb-4">
              Advanced Syntax
            </h2>
            <p className="leading-7 mb-4">
              Genesis offers advanced syntax features for more complex
              programming scenarios:
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-2">Error Handling</h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm font-mono">
                {`// Function that can throw errors
func readFile(path: String) throws -> String {
    if !fileExists(path) {
        throw FileError.notFound(path)
    }
    // Read file contents
    return contents
}

// Using try-catch
do {
    let content = try readFile(path: "config.json")
    process(content)
} catch FileError.notFound(let path) {
    println("File not found: \(path)")
} catch {
    println("Unknown error occurred")
}

// Try with optional binding
if let content = try? readFile(path: "config.json") {
    // File was read successfully
} else {
    // An error occurred
}

// Force try (crashes on error)
let content = try! readFile(path: "critical-file.txt")`}
              </code>
            </pre>

            <h3 className="text-xl font-semibold mt-8 mb-2">Optionals</h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm font-mono">
                {`// Optional declaration
let optionalName: String? = "John"
let absentName: String? = nil

// Optional binding
if let name = optionalName {
    println("Name: \(name)")
} else {
    println("Name is nil")
}

// Guard statement
func greet(name: String?) {
    guard let unwrappedName = name else {
        println("No name provided")
        return
    }
    
    // unwrappedName is available in the rest of the function
    println("Hello, \(unwrappedName)!")
}

// Nil coalescing operator
let displayName = optionalName ?? "Anonymous"

// Optional chaining
let length = optionalString?.count`}
              </code>
            </pre>

            <h3 className="text-xl font-semibold mt-8 mb-2">Closures</h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm font-mono">
                {`// Closure syntax
let multiply = { (a: Int, b: Int) -> Int in
    return a * b
}

// Shorthand argument names
let add = { $0 + $1 }

// Trailing closure syntax
let numbers = [1, 2, 3, 4, 5]
let doubled = numbers.map { $0 * 2 }

// Capturing values
func makeIncrementer(incrementAmount: Int) -> () -> Int {
    var total = 0
    let incrementer = {
        total += incrementAmount
        return total
    }
    return incrementer
}

let incrementByTwo = makeIncrementer(incrementAmount: 2)
increment()  // Returns 2
increment()  // Returns 4`}
              </code>
            </pre>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              Pattern Matching
            </h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm font-mono">
                {`// Pattern matching in switch statements
switch value {
    case 0:
        println("Zero")
    case let x where x < 0:
        println("Negative: \(x)")
    case 1...10:
        println("Small positive number")
    case let (x, y) where x == y:
        println("Tuple with equal values: \(x)")
    case (let x, _):
        println("Tuple with first value: \(x)")
    default:
        println("Other value")
}

// Pattern matching with if-case
if case .success(let data) = result {
    process(data)
}

// Pattern matching in for loops
for case let .point(x, y) in shapes {
    drawPoint(x: x, y: y)
}`}
              </code>
            </pre>

            <div className="bg-muted p-6 rounded-lg my-8">
              <h3 className="text-xl font-semibold mb-2">Syntax Style Guide</h3>
              <p className="mb-4">
                For consistent and readable Genesis code, follow these style
                guidelines:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Use 4 spaces for indentation (not tabs)</li>
                <li>Keep lines under 100 characters when possible</li>
                <li>Use camelCase for variables and functions</li>
                <li>Use PascalCase for types, protocols, and enums</li>
                <li>
                  Group related declarations and separate with blank lines
                </li>
                <li>Add documentation comments (///) for public APIs</li>
              </ul>
            </div>
          </section>
        </TabsContent>
      </Tabs>

      <Card className="p-6 bg-primary/5 border-primary/20">
        <h3 className="text-xl font-semibold mb-2">
          Interactive Syntax Explorer
        </h3>
        <p className="mb-4">
          Want to explore Genesis syntax interactively? Try our online
          playground where you can write and run Genesis code in your browser.
        </p>
        <div className="flex gap-4">
          <Button className="gap-2" asChild>
            <a href="/playground">Try Genesis Playground</a>
          </Button>
          <Button variant="outline" className="gap-2" asChild>
            <a href="/docs/syntax/cheatsheet">Download Syntax Cheatsheet</a>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default SyntaxGuide;
