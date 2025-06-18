import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/Codeblock";
import { HelloWorld } from "@/lib/GettingStartedCode";
import { HelloWorld2 } from "@/lib/GettingStartedCode";

export const HelloWorldStart = () => {
  return (
    <>
      {/* Hello World Content */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Hello World in Genesis
        </h1>
        <p className="text-xl text-muted-foreground">
          Write and run your first Genesis program in just a few minutes.
        </p>
      </div>

      <Tabs defaultValue="simple" className="w-full">
        <TabsList className="w-full justify-start border-b rounded-none px-0 mb-4">
          <TabsTrigger
            value="simple"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Simple Hello World
          </TabsTrigger>
          <TabsTrigger
            value="interactive"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Interactive Version
          </TabsTrigger>
          <TabsTrigger
            value="explained"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Code Explained
          </TabsTrigger>
        </TabsList>

        <TabsContent value="simple" className="space-y-6">
          <section className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold tracking-tight mb-4">
              Your First Genesis Program
            </h2>
            <p className="leading-7 mb-4">
              Let's start with the classic "Hello, World!" program. This simple
              example will help you verify that Genesis is working correctly on
              your system.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              Step 1: Create the File
            </h3>
            <p className="leading-7 mb-4">
              Create a new file in your project directory. You can call this file whatever you want as long as it ends in the <code>.gen</code> extension. For this example we'll use <code>hello.gen</code> and add the
              following code:
            </p>
            <CodeBlock
              code={HelloWorld}
              language="cpp"
            />
            <h3 className="text-xl font-semibold mt-8 mb-2">
              Step 2: Run the Program
            </h3>
            <p className="leading-7 mb-4">
              Open your terminal, navigate to the directory containing{" "}
              <code>hello.gen</code>, and run:
            </p>
            <CodeBlock code={HelloWorld2} language="cpp"/>

            <h3 className="text-xl font-semibold mt-8 mb-2">Expected Output</h3>
            <p className="leading-7 mb-4">
              You should see the following output:
            </p>
            <pre className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-md overflow-x-auto">
              <code className="text-sm font-mono text-green-800 dark:text-green-200">
                {`Hello, World!`}
              </code>
            </pre>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-6 rounded-lg my-8">
              <h3 className="text-xl font-semibold mb-2 text-blue-800 dark:text-blue-200">
                Congratulations! 🎉
              </h3>
              <p className="text-blue-700 dark:text-blue-300">
                You've successfully written and executed your first Genesis
                program. This simple example demonstrates the basic structure of
                a Genesis program and how to output text to the console.
              </p>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              Alternative: Compile First
            </h3>
            <p className="leading-7 mb-4">
              You can also compile the program first and then run the
              executable:
            </p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm font-mono">
                {`# Compile the program
genesis build hello.gen

# Run the compiled executable
./hello`}
              </code>
            </pre>
          </section>
        </TabsContent>

        <TabsContent value="interactive" className="space-y-6">
          <section className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold tracking-tight mb-4">
              Interactive Hello World
            </h2>
            <p className="leading-7 mb-4">
              Let's make the program more interactive by asking for the user's
              name and providing a personalized greeting.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              Enhanced Version
            </h3>
            <p className="leading-7 mb-4">
              Create a new file called <code>interactive_hello.gen</code>:
            </p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm font-mono">
                {`func main() {
    print("What's your name? ")
    let name = readLine()
    
    if let userName = name {
        println("Hello, \(userName)! Welcome to Genesis!")
    } else {
        println("Hello, Anonymous! Welcome to Genesis!")
    }
    
    println("Hope you enjoy learning Genesis programming!")
}`}
              </code>
            </pre>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              Run the Interactive Version
            </h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm font-mono">
                {`genesis run interactive_hello.gen`}
              </code>
            </pre>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              Sample Interaction
            </h3>
            <pre className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-md overflow-x-auto">
              <code className="text-sm font-mono text-green-800 dark:text-green-200">
                {`What's your name? Alice
Hello, Alice! Welcome to Genesis!
Hope you enjoy learning Genesis programming!`}
              </code>
            </pre>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              Even More Interactive
            </h3>
            <p className="leading-7 mb-4">
              Here's a version that asks multiple questions:
            </p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm font-mono">
                {`func main() {
    println("Welcome to Genesis!")
    println("Let me get to know you better...")
    
    print("What's your name? ")
    let name = readLine() ?? "Friend"
    
    print("What's your favorite programming language? ")
    let favLang = readLine() ?? "Unknown"
    
    print("How many years have you been programming? ")
    let experience = readLine() ?? "0"
    
    println("\nNice to meet you, \(name)!")
    println("So you like \(favLang) and have \(experience) years of experience.")
    println("I think you'll love Genesis - it combines the best of many languages!")
    
    if favLang.lowercased().contains("genesis") {
        println("Wow, Genesis is already your favorite? That's awesome! 🚀")
    } else {
        println("Give Genesis a try - it might become your new favorite! 😊")
    }
}`}
              </code>
            </pre>

            <div className="bg-muted p-6 rounded-lg my-8">
              <h3 className="text-xl font-semibold mb-2">
                New Concepts Introduced
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <code>print()</code> - Output without a newline
                </li>
                <li>
                  <code>readLine()</code> - Read user input
                </li>
                <li>
                  <code>if let</code> - Optional binding
                </li>
                <li>
                  <code>\()</code> - String interpolation
                </li>
                <li>
                  <code>??</code> - Nil coalescing operator
                </li>
                <li>
                  <code>.lowercased()</code> - String method
                </li>
                <li>
                  <code>.contains()</code> - String search
                </li>
              </ul>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="explained" className="space-y-6">
          <section className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold tracking-tight mb-4">
              Code Breakdown
            </h2>
            <p className="leading-7 mb-4">
              Let's examine each part of the Hello World program to understand
              how Genesis works.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              Function Declaration
            </h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm font-mono">{`func main() {`}</code>
            </pre>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                <code>func</code> - Keyword to declare a function
              </li>
              <li>
                <code>main</code> - The name of the function (entry point of the
                program)
              </li>
              <li>
                <code>()</code> - Empty parameter list (this function takes no
                arguments)
              </li>
              <li>
                <code>{`{`}</code> - Opening brace to start the function body
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-2">Print Statement</h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm font-mono">
                {`    println("Hello, World!")`}
              </code>
            </pre>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                <code>println</code> - Built-in function to print text with a
                newline
              </li>
              <li>
                <code>"Hello, World!"</code> - String literal enclosed in double
                quotes
              </li>
              <li>
                The indentation (4 spaces) is for readability - Genesis doesn't
                require it
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-2">Function End</h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm font-mono">{`}`}</code>
            </pre>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                <code>{`}`}</code> - Closing brace to end the function body
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              Program Execution Flow
            </h3>
            <ol className="list-decimal pl-6 space-y-2 mb-6">
              <li>
                Genesis looks for the <code>main</code> function as the entry
                point
              </li>
              <li>
                The <code>main</code> function is called automatically when the
                program starts
              </li>
              <li>
                The <code>println</code> function is executed, outputting the
                text
              </li>
              <li>
                The program ends when the <code>main</code> function completes
              </li>
            </ol>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              Alternative Print Functions
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">print() vs println()</h4>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`func main() {
    print("Hello, ")     // No newline
    print("World!")      // No newline
    println()            // Just a newline
    println("Next line") // Text with newline
}`}
                  </code>
                </pre>
                <p className="text-sm text-muted-foreground mt-2">
                  Output: <code>Hello, World!\nNext line</code>
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              Common Variations
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">With Variables</h4>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`func main() {
    let greeting = "Hello"
    let target = "World"
    println("\(greeting), \(target)!")
}`}
                  </code>
                </pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">With Functions</h4>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`func greet(name: String) -> String {
    return "Hello, \(name)!"
}

func main() {
    let message = greet(name: "World")
    println(message)
}`}
                  </code>
                </pre>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg my-8">
              <h3 className="text-xl font-semibold mb-2">Key Takeaways</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Every Genesis program needs a <code>main</code> function
                </li>
                <li>
                  Functions are declared with the <code>func</code> keyword
                </li>
                <li>
                  <code>println</code> is used for output with automatic
                  newlines
                </li>
                <li>String literals are enclosed in double quotes</li>
                <li>Genesis uses curly braces to define code blocks</li>
                <li>Indentation improves readability but isn't required</li>
              </ul>
            </div>

            <div className="flex gap-4 mt-8">
              <Button>
                <a href="/docs/basic-concepts">Learn Basic Concepts</a>
              </Button>
              <Button variant="outline">
                <a href="/playground">Try in Playground</a>
              </Button>
            </div>
          </section>
        </TabsContent>
      </Tabs>
    </>
  );
};
