import { TabsContent } from "@/components/ui/tabs";

export const VariableStatements = () => {
  return (
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
  );
};
