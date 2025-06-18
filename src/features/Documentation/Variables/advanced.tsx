import { TabsContent } from "@/components/ui/tabs";

export const VariablesAdvanced = () => {
  return (
    <TabsContent value="advanced" className="space-y-6">
      <section className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold tracking-tight mb-4">
          Advanced Syntax
        </h2>
        <p className="leading-7 mb-4">
          Genesis offers advanced syntax features for more complex programming
          scenarios:
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

        <h3 className="text-xl font-semibold mt-8 mb-2">Pattern Matching</h3>
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
            <li>Group related declarations and separate with blank lines</li>
            <li>Add documentation comments (///) for public APIs</li>
          </ul>
        </div>
      </section>
    </TabsContent>
  );
};
