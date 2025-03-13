import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
}

const Testimonial = ({
  quote,
  author,
  role,
  company,
  avatarUrl,
}: TestimonialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card className="p-6 h-full flex flex-col bg-background">
        <div className="text-primary mb-4">
          <Quote size={24} />
        </div>
        <p className="text-foreground mb-6 flex-grow">{quote}</p>
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3 border-2 border-primary">
            <AvatarImage src={avatarUrl} alt={author} />
            <AvatarFallback>{author[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold">{author}</h4>
            <p className="text-sm text-muted-foreground">
              {role}, {company}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    {
      quote:
        "Genesis has transformed our development workflow. The elegant syntax and powerful type system have reduced our bugs by 70% while making our codebase more maintainable.",
      author: "Sarah Chen",
      role: "CTO",
      company: "TechNova",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      quote:
        "The performance gains we've seen after migrating to Genesis are incredible. Our API response times improved by 40% with minimal code changes.",
      author: "Michael Rodriguez",
      role: "Lead Developer",
      company: "DataFlow Systems",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    },
    {
      quote:
        "As someone who teaches programming languages, I'm impressed by Genesis' learning curve. My students pick it up quickly and produce more robust code than with other languages.",
      author: "Dr. Emily Wong",
      role: "Professor",
      company: "Tech Institute",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            What Developers Are Saying
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Join thousands of developers who have already discovered the power
            of Genesis
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              avatarUrl={testimonial.avatarUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
