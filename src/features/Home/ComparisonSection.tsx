import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, X } from "lucide-react";

interface ComparisonFeature {
  feature: string;
  genesis: boolean;
  others: {
    [key: string]: boolean;
  };
}

const ComparisonSection = () => {
  const [selectedTab, setSelectedTab] = useState("performance");

  const categories = {
    performance: {
      title: "Performance",
      description:
        "Genesis delivers exceptional speed without compromising on developer experience",
      features: [
        {
          feature: "Near-native execution speed",
          genesis: true,
          others: { javascript: false, python: false, rust: true, go: true },
        },
        {
          feature: "Fast compile times",
          genesis: true,
          others: { javascript: true, python: true, rust: false, go: true },
        },
        {
          feature: "Efficient memory usage",
          genesis: true,
          others: { javascript: false, python: false, rust: true, go: true },
        },
        {
          feature: "Optimized for modern hardware",
          genesis: true,
          others: { javascript: false, python: false, rust: true, go: false },
        },
      ],
    },
    safety: {
      title: "Type Safety",
      description:
        "Catch errors at compile time while maintaining a clean, readable syntax",
      features: [
        {
          feature: "Strong static typing",
          genesis: true,
          others: { javascript: false, python: false, rust: true, go: true },
        },
        {
          feature: "Type inference",
          genesis: true,
          others: { javascript: false, python: false, rust: true, go: true },
        },
        {
          feature: "Null safety",
          genesis: true,
          others: { javascript: false, python: false, rust: true, go: false },
        },
        {
          feature: "Pattern matching",
          genesis: true,
          others: { javascript: false, python: false, rust: true, go: false },
        },
      ],
    },
    concurrency: {
      title: "Concurrency",
      description:
        "Built-in support for modern concurrent programming patterns",
      features: [
        {
          feature: "Async/await",
          genesis: true,
          others: { javascript: true, python: true, rust: true, go: false },
        },
        {
          feature: "Lightweight threads",
          genesis: true,
          others: { javascript: false, python: false, rust: false, go: true },
        },
        {
          feature: "Built-in channels",
          genesis: true,
          others: { javascript: false, python: false, rust: false, go: true },
        },
        {
          feature: "Lock-free data structures",
          genesis: true,
          others: { javascript: false, python: false, rust: true, go: false },
        },
      ],
    },
    ecosystem: {
      title: "Ecosystem",
      description:
        "A growing ecosystem of libraries, tools, and community support",
      features: [
        {
          feature: "Package manager",
          genesis: true,
          others: { javascript: true, python: true, rust: true, go: true },
        },
        {
          feature: "IDE support",
          genesis: true,
          others: { javascript: true, python: true, rust: true, go: true },
        },
        {
          feature: "Web framework",
          genesis: true,
          others: { javascript: true, python: true, rust: true, go: true },
        },
        {
          feature: "Machine learning libraries",
          genesis: true,
          others: { javascript: false, python: true, rust: false, go: false },
        },
      ],
    },
  };

  const languages = [
    { id: "genesis", name: "Genesis" },
    { id: "javascript", name: "JavaScript" },
    { id: "python", name: "Python" },
    { id: "rust", name: "Rust" },
    { id: "go", name: "Go" },
  ];

  const currentCategory = categories[selectedTab as keyof typeof categories];

  return (
    <section className="py-16 px-4 md:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            How Genesis Compares
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            See how Genesis stacks up against other popular programming
            languages
          </motion.p>
        </div>

        <Tabs
          defaultValue="performance"
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="w-full"
        >
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-4 mb-8">
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="safety">Type Safety</TabsTrigger>
            <TabsTrigger value="concurrency">Concurrency</TabsTrigger>
            <TabsTrigger value="ecosystem">Ecosystem</TabsTrigger>
          </TabsList>

          <TabsContent value={selectedTab} className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-2">
                {currentCategory.title}
              </h3>
              <p className="text-muted-foreground">
                {currentCategory.description}
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Feature</th>
                    {languages.map((lang) => (
                      <th
                        key={lang.id}
                        className="text-center py-3 px-4 font-medium"
                      >
                        {lang.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {currentCategory.features.map((feature, index) => (
                    <motion.tr
                      key={index}
                      className="border-b hover:bg-muted/50"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <td className="py-3 px-4">{feature.feature}</td>
                      <td className="text-center py-3 px-4">
                        {feature.genesis ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )}
                      </td>
                      {Object.entries(feature.others).map(
                        ([lang, supported]) => (
                          <td key={lang} className="text-center py-3 px-4">
                            {supported ? (
                              <Check className="h-5 w-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-red-500 mx-auto" />
                            )}
                          </td>
                        )
                      )}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ComparisonSection;
