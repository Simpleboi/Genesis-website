// Code examples for syntax

export const Comments = `// This is a single-line comment

/* This is a multi-line comment
   that spans multiple lines */

/// Documentation comment for functions and types`;

export const Variables = `// Variables are declared with the data type they represent

string name = "Genesis";    // Type string
int num = 30;               // Type int
float num = 10.6;           // Type float

// Constants are declared with 'const' keyword before the data type
const float PI = 3.14159;
const int MAX_USERS: Int = 1000;
`;

export const BasicTypes = `// Numeric types
int num = 42
float pi = 3.14
double exponential = 2.71828

// Boolean
bool isEnabled = true

// String
string greeting = "Hello, World!"

// Character
char letter = 'A'`;


export const ArithmeticExpres =  `// Basic arithmetic
int sum = 5 + 3        // Addition
int diff = 10 - 4      // Subtraction
int product = 6 * 7    // Multiplication
int quotient = 20 / 4  // Division
int remainder = 10 % 3 // Modulo

// Compound assignment
int x = 5
x += 3  // Same as x = x + 3
x *= 2  // Same as x = x * 2

// Increment and decrement
x++     // Same as x = x + 1
x--     // Same as x = x - 1
`

export const ComparisonEquality = `// Equality
bool isEqual = (a == b)      // Equal to
bool notEqual = (a != b)     // Not equal to

// Relational
bool greater = (a > b)       // Greater than
bool less = (a < b)          // Less than
bool greaterEqual = (a >= b) // Greater than or equal to
bool lessEqual = (a <= b)    // Less than or equal to
`

export const LogicalExpressions = `// Logical operators
bool and = (a && b)  // Logical AND
bool or = (a || b)   // Logical OR
bool not = !a        // Logical NOT

// Short-circuit evaluation
if (isValid && processData()) {
    // processData() only called if isValid is true
}

if (!hasCache || fetchData()) {
    // fetchData() only called if hasCache is false
}
`

export const StringExpres = `// String concatenation
let fullName = firstName + " " + lastName

// String interpolation
let greeting = "Hello, \(name)!"
let stats = "Score: \(score)/\(total) (\(percentage)%)"
`