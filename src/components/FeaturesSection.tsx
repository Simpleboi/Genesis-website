import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Code, Zap, Shield, Rocket } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({
  icon = <Code />,
  title = "Feature Title",
  description = "Feature description goes here.",
}: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
      <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-center text-muted-foreground">{description}</p>
    </div>
  );
};

interface FeaturesSectionProps {
  title?: string;
  subtitle?: string;
  features?: FeatureCardProps[];
}

const FeaturesSection = ({
  title = "Why Choose Genesis",
  subtitle = "A modern programming language designed for simplicity, performance, and developer happiness.",
  features = [
    {
      icon: <Code size={24} />,
      title: "Elegant Syntax",
      description:
        "Write clean, readable code with a syntax designed for modern development practices.",
    },
    {
      icon: <Zap size={24} />,
      title: "Lightning Fast",
      description:
        "Enjoy blazing fast compile times and runtime performance optimized for today's hardware.",
    },
    {
      icon: <Shield size={24} />,
      title: "Type Safety",
      description:
        "Catch errors at compile time with a powerful type system that doesn't get in your way.",
    },
    {
      icon: <Rocket size={24} />,
      title: "Ecosystem",
      description:
        "Access a growing library of packages, tools, and resources built by our community.",
    },
  ],
}: FeaturesSectionProps) => {
  return (
    <section className="py-16 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="font-medium">
            Learn More About Genesis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
