import { Book, Code, Terminal, FileText } from "lucide-react";

export const sidebarLinks = [
  {
    title: "Getting Started",
    icon: <Book className="h-4 w-4 mr-2" />,
    links: [
      { name: "Introduction", href: "/docs/introduction" },
      { name: "Installation", href: "/docs/installation" },
      { name: "Hello World", href: "/docs/hello-world" },
      { name: "Basic Concepts", href: "/docs/basic-concepts" },
    ],
  },
  {
    title: "Language Guide",
    icon: <Code className="h-4 w-4 mr-2" />,
    links: [
      { name: "Syntax", href: "/docs/syntax" },
      { name: "Variables", href: "/docs/variables" },
      { name: "Functions", href: "/docs/functions" },
      { name: "Control Flow", href: "/docs/control-flow" },
      { name: "Data Structures", href: "/docs/data-structures" },
      { name: "Classes & Objects", href: "/docs/classes-objects" },
      { name: "Error Handling", href: "/docs/error-handling" },
      { name: "Concurrency", href: "/docs/concurrency" },
    ],
  },
  {
    title: "Tools & Ecosystem",
    icon: <Terminal className="h-4 w-4 mr-2" />,
    links: [
      { name: "Package Manager", href: "/docs/package-manager" },
      { name: "Build System", href: "/docs/build-system" },
      { name: "Testing", href: "/docs/testing" },
      { name: "Debugging", href: "/docs/debugging" },
      { name: "IDE Support", href: "/docs/ide-support" },
    ],
  },
  {
    title: "Advanced Topics",
    icon: <FileText className="h-4 w-4 mr-2" />,
    links: [
      { name: "Memory Management", href: "/docs/memory-management" },
      { name: "Performance", href: "/docs/performance" },
      { name: "Interoperability", href: "/docs/interoperability" },
      { name: "Metaprogramming", href: "/docs/metaprogramming" },
      { name: "Best Practices", href: "/docs/best-practices" },
    ],
  },
];
