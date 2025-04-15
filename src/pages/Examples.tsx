import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import {
  Code,
  Github,
  ExternalLink,
  Search,
  Filter,
  Tag,
  Star,
  ArrowRight,
} from "lucide-react";

interface ExampleCardProps {
  title: string;
  description: string;
  tags: string[];
  difficulty: "beginner" | "intermediate" | "advanced";
  stars: number;
  author: string;
  previewCode: string;
  githubUrl: string;
}

const ExampleCard = ({
  title,
  description,
  tags,
  difficulty,
  stars,
  author,
  previewCode,
  githubUrl,
}: ExampleCardProps) => {
  const difficultyColors = {
    beginner:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    intermediate:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    advanced:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  };

  return (
    <Card className="overflow-hidden border hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold">{title}</h3>
          <span
            className={`px-2 py-1 text-xs font-medium rounded-full ${difficultyColors[difficulty]}`}
          >
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </span>
        </div>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
          <div>By {author}</div>
          <div className="flex items-center">
            <Star className="h-4 w-4 mr-1 text-yellow-500" />
            {stars}
          </div>
        </div>
      </div>
      <div className="bg-muted p-4 border-t border-border">
        <pre className="text-xs font-mono overflow-x-auto max-h-32">
          <code>{previewCode}</code>
        </pre>
      </div>
      <div className="p-4 border-t border-border flex justify-between items-center">
        <Button variant="outline" size="sm" asChild>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <Github className="h-4 w-4" />
            View on GitHub
          </a>
        </Button>
        <Button variant="ghost" size="sm" className="flex items-center gap-1">
          View Details
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};

const Examples = () => {
  const { theme, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const exampleProjects = [
    {
      title: "Todo List Application",
      description:
        "A simple todo list application showcasing Genesis basics with data persistence.",
      tags: ["web", "beginners", "frontend"],
      difficulty: "beginner" as const,
      stars: 124,
      author: "Genesis Team",
      previewCode: `// Todo item model
struct Todo {
  id: String
  title: String
  completed: Bool
}

// Create a new todo
func createTodo(title: String) -> Todo {
  return Todo(
    id: generateId(),
    title: title,
    completed: false
  )
}`,
      githubUrl: "https://github.com/genesis-lang/example-todo",
    },
    {
      title: "Weather API Client",
      description:
        "A command-line weather application that fetches data from a public API.",
      tags: ["api", "cli", "networking"],
      difficulty: "intermediate" as const,
      stars: 87,
      author: "Alice Chen",
      previewCode: `// Fetch weather data for a location
async func getWeather(city: String) -> Result<WeatherData, Error> {
  let url = "https://api.weather.com/\(city)?units=metric"
  
  // Make HTTP request
  let response = try await http.get(url)
  
  // Parse JSON response
  return try json.decode(WeatherData.self, from: response.body)
}`,
      githubUrl: "https://github.com/genesis-lang/example-weather",
    },
    {
      title: "Real-time Chat Server",
      description:
        "A WebSocket-based chat server demonstrating Genesis' concurrency features.",
      tags: ["websockets", "server", "concurrency"],
      difficulty: "advanced" as const,
      stars: 215,
      author: "Michael Wong",
      previewCode: `// Create a WebSocket server
let server = WebSocketServer(port: 8080)

// Track connected clients
let clients = ConcurrentSet<WebSocket>()

// Handle new connections
server.onConnection { socket in
  // Add client to set
  clients.insert(socket)
  
  // Handle messages
  socket.onMessage { message in
    // Broadcast to all clients
    for client in clients {
      if client != socket {
        try client.send(message)
      }
    }
  }
}`,
      githubUrl: "https://github.com/genesis-lang/example-chat",
    },
    {
      title: "Data Visualization Dashboard",
      description:
        "A web dashboard that visualizes data using Genesis' graphics libraries.",
      tags: ["web", "data-viz", "frontend"],
      difficulty: "intermediate" as const,
      stars: 156,
      author: "Sarah Johnson",
      previewCode: `// Create a bar chart
func createBarChart(data: [DataPoint]) -> Chart {
  let chart = Chart(type: .bar, width: 800, height: 400)
  
  // Configure chart
  chart.title = "Monthly Sales"
  chart.xAxis.label = "Month"
  chart.yAxis.label = "Revenue"
  
  // Add data series
  chart.addSeries(name: "2023", data: data.map { $0.value })
  
  return chart
}`,
      githubUrl: "https://github.com/genesis-lang/example-dashboard",
    },
    {
      title: "File Encryption Tool",
      description:
        "A command-line utility for encrypting and decrypting files using AES.",
      tags: ["cli", "security", "cryptography"],
      difficulty: "intermediate" as const,
      stars: 92,
      author: "David Miller",
      previewCode: `// Encrypt a file using AES-256
func encryptFile(inputPath: String, outputPath: String, password: String) throws {
  // Read file contents
  let data = try File.read(at: inputPath)
  
  // Derive key from password
  let key = try crypto.deriveKey(from: password, salt: generateSalt())
  
  // Encrypt data
  let encrypted = try crypto.aes.encrypt(data, using: key)
  
  // Write encrypted data to output file
  try File.write(encrypted, to: outputPath)
}`,
      githubUrl: "https://github.com/genesis-lang/example-encryption",
    },
    {
      title: "Machine Learning Starter",
      description:
        "An introduction to machine learning with Genesis' ML libraries.",
      tags: ["ml", "data-science", "neural-networks"],
      difficulty: "advanced" as const,
      stars: 278,
      author: "Genesis AI Team",
      previewCode: `// Create a simple neural network
let model = NeuralNetwork()

// Add layers
model.add(Layer.dense(units: 64, activation: .relu, inputShape: [28, 28]))
model.add(Layer.dense(units: 10, activation: .softmax))

// Compile model
model.compile(
  optimizer: .adam(learningRate: 0.001),
  loss: .categoricalCrossentropy,
  metrics: [.accuracy]
)

// Train model
let history = try model.fit(
  x: trainImages,
  y: trainLabels,
  epochs: 10,
  batchSize: 32
)`,
      githubUrl: "https://github.com/genesis-lang/example-ml",
    },
  ];

  const allTags = Array.from(
    new Set(exampleProjects.flatMap((project) => project.tags)),
  ).sort();

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const filteredProjects = exampleProjects.filter((project) => {
    // Filter by search query
    const matchesSearch =
      searchQuery === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());

    // Filter by selected tags
    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => project.tags.includes(tag));

    return matchesSearch && matchesTags;
  });

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar onThemeToggle={toggleTheme} isDarkMode={theme === "dark"} />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Genesis Examples
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Explore real-world examples and projects built with Genesis.
                Learn from practical code samples ranging from simple
                applications to advanced systems.
              </p>
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section className="py-12 px-4 md:px-8">
          <div className="container mx-auto max-w-6xl">
            <Tabs defaultValue="featured" className="w-full mb-8">
              <TabsList>
                <TabsTrigger value="featured">Featured</TabsTrigger>
                <TabsTrigger value="newest">Newest</TabsTrigger>
                <TabsTrigger value="popular">Most Popular</TabsTrigger>
                <TabsTrigger value="beginner">Beginner Friendly</TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search examples..."
                  className="w-full pl-10 pr-4 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="relative">
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {allTags.map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  size="sm"
                  className="gap-1"
                  onClick={() => toggleTag(tag)}
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </Button>
              ))}
            </div>

            {/* Examples Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ExampleCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  difficulty={project.difficulty}
                  stars={project.stars}
                  author={project.author}
                  previewCode={project.previewCode}
                  githubUrl={project.githubUrl}
                />
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No examples found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Community Projects */}
        <section className="py-16 px-4 md:px-8 bg-muted/20">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Community Projects</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover what the Genesis community is building. These
                open-source projects showcase the power and versatility of
                Genesis.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Genesis Web Framework
                </h3>
                <p className="text-muted-foreground mb-4">
                  A full-featured web framework for building modern, scalable
                  web applications.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="h-4 w-4 mr-1 text-yellow-500" />
                    1,245
                  </div>
                  <Button variant="outline" size="sm" className="gap-1">
                    <ExternalLink className="h-4 w-4" />
                    Visit Project
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Genesis Game Engine
                </h3>
                <p className="text-muted-foreground mb-4">
                  A 2D/3D game engine built with Genesis, featuring a visual
                  editor and physics system.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="h-4 w-4 mr-1 text-yellow-500" />
                    876
                  </div>
                  <Button variant="outline" size="sm" className="gap-1">
                    <ExternalLink className="h-4 w-4" />
                    Visit Project
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Genesis Data Science Kit
                </h3>
                <p className="text-muted-foreground mb-4">
                  A comprehensive toolkit for data analysis, visualization, and
                  machine learning.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="h-4 w-4 mr-1 text-yellow-500" />
                    932
                  </div>
                  <Button variant="outline" size="sm" className="gap-1">
                    <ExternalLink className="h-4 w-4" />
                    Visit Project
                  </Button>
                </div>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button className="gap-2">
                <Github className="h-4 w-4" />
                View All Community Projects
              </Button>
            </div>
          </div>
        </section>

        {/* Submit Your Project */}
        <section className="py-16 px-4 md:px-8 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Share Your Genesis Project
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Built something cool with Genesis? Share it with the community and
              inspire other developers.
            </p>
            <Button size="lg" variant="secondary" className="gap-2">
              <Code className="h-5 w-5" />
              Submit Your Project
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Examples;
