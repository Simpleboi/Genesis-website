import { TabsContent } from "@/components/ui/tabs";

export const VariableExpressions = () => {
  return (
    <TabsContent value="expressions" className="space-y-6">
      <section className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold tracking-tight mb-4">
          Expressions
        </h2>
        <p className="leading-7 mb-4">
          Expressions in Genesis produce values. Here are the common expression
          types:
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

        <h3 className="text-xl font-semibold mt-8 mb-2">Logical Expressions</h3>
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

        <h3 className="text-xl font-semibold mt-8 mb-2">String Expressions</h3>
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
  );
};
