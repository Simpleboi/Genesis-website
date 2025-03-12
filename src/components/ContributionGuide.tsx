import React from "react";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import {
  Code,
  GitBranch,
  GitPullRequest,
  Bug,
  BookOpen,
  MessageSquare,
  Check,
} from "lucide-react";

const ContributionGuide = () => {
  return (
    <div className="w-full bg-background">
      <div className="container mx-auto max-w-4xl py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">Contributing to Genesis</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Thank you for your interest in contributing to Genesis! This guide
          will help you get started with contributing to the language,
          documentation, or ecosystem.
        </p>

        <Tabs defaultValue="code" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="code">Code</TabsTrigger>
            <TabsTrigger value="docs">Documentation</TabsTrigger>
            <TabsTrigger value="bugs">Bug Reports</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>

          <TabsContent value="code" className="space-y-6 mt-6">
            <h2 className="text-2xl font-semibold">Contributing Code</h2>
            <p className="text-muted-foreground mb-4">
              Genesis is written primarily in C++ with some Rust components.
              Here's how to contribute code changes:
            </p>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                    1
                  </span>
                  Set Up Your Development Environment
                </h3>
                <div className="ml-10 space-y-3">
                  <p>
                    First, fork the repository and clone it to your local
                    machine:
                  </p>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    <code>
                      git clone https://github.com/YOUR-USERNAME/genesis.git
                      <br />
                      cd genesis
                      <br />
                      git remote add upstream
                      https://github.com/genesis-lang/genesis.git
                    </code>
                  </pre>
                  <p>Install the required dependencies:</p>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    <code>
                      # For Ubuntu/Debian
                      <br />
                      sudo apt-get install build-essential cmake llvm-dev
                      libclang-dev
                      <br />
                      <br />
                      # For macOS
                      <br />
                      brew install cmake llvm
                      <br />
                      <br />
                      # For Windows
                      <br /># Install Visual Studio with C++ workload and CMake
                    </code>
                  </pre>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                    2
                  </span>
                  Create a Branch
                </h3>
                <div className="ml-10 space-y-3">
                  <p>Create a new branch for your feature or bugfix:</p>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    <code>
                      git checkout -b feature/your-feature-name
                      <br />
                      # or
                      <br />
                      git checkout -b fix/issue-number-description
                    </code>
                  </pre>
                  <p className="text-sm text-muted-foreground">
                    Use a descriptive branch name that reflects the changes
                    you're making.
                  </p>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                    3
                  </span>
                  Make Your Changes
                </h3>
                <div className="ml-10 space-y-3">
                  <p>Implement your changes following these guidelines:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Follow the existing code style and conventions</li>
                    <li>Write tests for new functionality</li>
                    <li>Ensure all tests pass locally</li>
                    <li>Add comments where necessary</li>
                    <li>Update relevant documentation</li>
                  </ul>
                  <p>Build and test your changes:</p>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    <code>
                      mkdir build && cd build
                      <br />
                      cmake ..
                      <br />
                      make
                      <br />
                      make test
                    </code>
                  </pre>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                    4
                  </span>
                  Submit a Pull Request
                </h3>
                <div className="ml-10 space-y-3">
                  <p>Once your changes are ready:</p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Commit your changes with a descriptive message</li>
                    <li>Push your branch to your fork</li>
                    <li>Create a pull request against the main repository</li>
                    <li>
                      Fill out the pull request template with all required
                      information
                    </li>
                    <li>Wait for code review and address any feedback</li>
                  </ol>
                  <p className="text-sm text-muted-foreground mt-3">
                    The core team will review your PR as soon as possible.
                    Please be patient and responsive to feedback.
                  </p>
                </div>
              </Card>
            </div>

            <div className="bg-muted p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-3">
                Looking for Good First Issues?
              </h3>
              <p className="mb-4">
                If you're new to the project, look for issues labeled "good
                first issue" or "beginner friendly" to get started.
              </p>
              <Button className="gap-2">
                <Code className="h-4 w-4" />
                Browse Good First Issues
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="docs" className="space-y-6 mt-6">
            <h2 className="text-2xl font-semibold">
              Contributing to Documentation
            </h2>
            <p className="text-muted-foreground mb-4">
              Good documentation is crucial for Genesis adoption. Here's how you
              can help improve our docs:
            </p>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Documentation Repository
                </h3>
                <p className="mb-4">
                  Our documentation is maintained in a separate repository and
                  built using Docusaurus.
                </p>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mb-4">
                  <code>
                    git clone https://github.com/genesis-lang/docs.git
                    <br />
                    cd docs
                    <br />
                    npm install
                    <br />
                    npm start
                  </code>
                </pre>
                <p>
                  This will start a local development server where you can
                  preview your changes.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Types of Documentation Contributions
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-primary/10 text-primary mt-1">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Fixing Typos and Grammar</h4>
                      <p className="text-sm text-muted-foreground">
                        Even small corrections help improve the quality of our
                        documentation.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-primary/10 text-primary mt-1">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Clarifying Explanations</h4>
                      <p className="text-sm text-muted-foreground">
                        If you find a section that's unclear, help us improve it
                        with better explanations.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-primary/10 text-primary mt-1">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Adding Examples</h4>
                      <p className="text-sm text-muted-foreground">
                        Code examples help users understand concepts better. Add
                        practical examples where helpful.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-primary/10 text-primary mt-1">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Writing Tutorials</h4>
                      <p className="text-sm text-muted-foreground">
                        Step-by-step tutorials are valuable for new users.
                        Consider contributing a tutorial for a specific use
                        case.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-primary/10 text-primary mt-1">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Translating Documentation</h4>
                      <p className="text-sm text-muted-foreground">
                        Help make Genesis accessible to non-English speakers by
                        translating documentation.
                      </p>
                    </div>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Documentation Style Guide
                </h3>
                <p className="mb-4">
                  When contributing to documentation, please follow our style
                  guide:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use clear, concise language</li>
                  <li>Follow American English spelling conventions</li>
                  <li>Use sentence case for headings</li>
                  <li>Include code examples where appropriate</li>
                  <li>Use inclusive language</li>
                  <li>Link to related documentation where helpful</li>
                </ul>
              </Card>
            </div>

            <div className="bg-muted p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-3">
                Documentation Roadmap
              </h3>
              <p className="mb-4">
                Check our documentation roadmap to see what areas need the most
                attention.
              </p>
              <Button className="gap-2">
                <BookOpen className="h-4 w-4" />
                View Documentation Roadmap
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="bugs" className="space-y-6 mt-6">
            <h2 className="text-2xl font-semibold">Reporting Bugs</h2>
            <p className="text-muted-foreground mb-4">
              Found a bug in Genesis? Help us improve by reporting it. Here's
              how to submit an effective bug report:
            </p>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Before Reporting</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Check if the bug has already been reported in the{" "}
                  <a
                    href="https://github.com/genesis-lang/genesis/issues"
                    className="text-primary hover:underline"
                  >
                    issue tracker
                  </a>
                </li>
                <li>Make sure you're using the latest version of Genesis</li>
                <li>
                  Confirm it's actually a bug and not expected behavior by
                  checking the documentation
                </li>
              </ul>
            </Card>

            <Card className="p-6 mt-6">
              <h3 className="text-xl font-semibold mb-3">
                What to Include in a Bug Report
              </h3>
              <p className="mb-4">A good bug report should include:</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-primary/10 text-primary mt-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Clear Title</h4>
                    <p className="text-sm text-muted-foreground">
                      A descriptive title that summarizes the issue
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-primary/10 text-primary mt-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Environment Information</h4>
                    <p className="text-sm text-muted-foreground">
                      Genesis version, operating system, compiler version, etc.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-primary/10 text-primary mt-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Steps to Reproduce</h4>
                    <p className="text-sm text-muted-foreground">
                      Detailed steps that allow others to reproduce the bug
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-primary/10 text-primary mt-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">
                      Expected vs. Actual Behavior
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      What you expected to happen and what actually happened
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-primary/10 text-primary mt-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Minimal Code Example</h4>
                    <p className="text-sm text-muted-foreground">
                      The smallest possible code example that demonstrates the
                      bug
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-primary/10 text-primary mt-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Screenshots or Logs</h4>
                    <p className="text-sm text-muted-foreground">
                      If applicable, include screenshots, error messages, or log
                      output
                    </p>
                  </div>
                </li>
              </ul>
            </Card>

            <div className="bg-muted p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-3">
                Ready to Report a Bug?
              </h3>
              <p className="mb-4">
                Use our issue template to ensure you provide all the necessary
                information.
              </p>
              <Button className="gap-2">
                <Bug className="h-4 w-4" />
                Report a Bug
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="community" className="space-y-6 mt-6">
            <h2 className="text-2xl font-semibold">Community Contributions</h2>
            <p className="text-muted-foreground mb-4">
              There are many ways to contribute to Genesis beyond code and
              documentation:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Help Others
                </h3>
                <p className="mb-4">
                  Answer questions on the forum, Discord, or Stack Overflow.
                  Helping new users is a valuable contribution.
                </p>
                <Button variant="outline" className="w-full">
                  Join Discord
                </Button>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Write Blog Posts
                </h3>
                <p className="mb-4">
                  Share your experiences with Genesis through blog posts,
                  tutorials, or articles.
                </p>
                <Button variant="outline" className="w-full">
                  Submit a Blog Post
                </Button>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  Create Examples
                </h3>
                <p className="mb-4">
                  Build example projects that showcase Genesis features and best
                  practices.
                </p>
                <Button variant="outline" className="w-full">
                  Submit an Example
                </Button>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <GitBranch className="h-5 w-5 text-primary" />
                  Build Tools
                </h3>
                <p className="mb-4">
                  Develop tools, libraries, or integrations that enhance the
                  Genesis ecosystem.
                </p>
                <Button variant="outline" className="w-full">
                  Share Your Tool
                </Button>
              </Card>
            </div>

            <Card className="p-6 mt-6">
              <h3 className="text-xl font-semibold mb-3">Code of Conduct</h3>
              <p className="mb-4">
                All community interactions are governed by our Code of Conduct.
                We expect all contributors to adhere to these guidelines to
                ensure a positive and inclusive environment.
              </p>
              <p className="mb-4">Key principles include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Be respectful and inclusive</li>
                <li>Exercise empathy and kindness</li>
                <li>Give and gracefully accept constructive feedback</li>
                <li>Focus on what is best for the community</li>
                <li>Show courtesy and respect in all communications</li>
              </ul>
              <Button className="mt-4">Read Full Code of Conduct</Button>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ContributionGuide;
