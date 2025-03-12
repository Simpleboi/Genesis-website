import React, { useState } from "react";
import { useTheme } from "./ThemeProvider";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import ContributionGuide from "./ContributionGuide";
import {
  MessageSquare,
  Users,
  Calendar,
  Github,
  ExternalLink,
  Heart,
  Code,
  BookOpen,
  Lightbulb,
  Award,
  Globe,
  ArrowRight,
} from "lucide-react";

interface CommunityCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  buttonText: string;
  buttonLink: string;
  secondaryButton?: {
    text: string;
    link: string;
  };
}

const CommunityCard = ({
  title,
  description,
  icon,
  buttonText,
  buttonLink,
  secondaryButton,
}: CommunityCardProps) => {
  return (
    <Card className="p-6 flex flex-col h-full bg-background">
      <div className="p-3 rounded-full bg-primary/10 text-primary w-fit mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-3 mt-auto">
        <Button asChild className="gap-1">
          <a href={buttonLink} target="_blank" rel="noopener noreferrer">
            {buttonText} <ExternalLink className="h-4 w-4 ml-1" />
          </a>
        </Button>
        {secondaryButton && (
          <Button variant="outline" asChild className="gap-1">
            <a
              href={secondaryButton.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {secondaryButton.text}
            </a>
          </Button>
        )}
      </div>
    </Card>
  );
};

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
  link: string;
  isVirtual?: boolean;
}

const EventCard = ({
  title,
  date,
  location,
  description,
  link,
  isVirtual = false,
}: EventCardProps) => {
  return (
    <Card className="p-6 border hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/4">
          <div className="text-sm text-muted-foreground">{date}</div>
          <div className="flex items-center mt-1">
            <Globe className="h-4 w-4 mr-1 text-muted-foreground" />
            <span className="text-sm">{isVirtual ? "Virtual" : location}</span>
          </div>
        </div>
        <div className="md:w-3/4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <Button variant="outline" asChild className="gap-1">
            <a href={link} target="_blank" rel="noopener noreferrer">
              Learn More <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
};

interface ContributorCardProps {
  name: string;
  role: string;
  avatarUrl: string;
  contributions: string;
  githubUrl: string;
}

const ContributorCard = ({
  name,
  role,
  avatarUrl,
  contributions,
  githubUrl,
}: ContributorCardProps) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-primary">
        <img
          src={avatarUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-semibold text-lg mb-1">{name}</h3>
      <p className="text-sm text-muted-foreground mb-2">{role}</p>
      <p className="text-sm mb-3">{contributions}</p>
      <Button variant="ghost" size="sm" asChild className="gap-1">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <Github className="h-4 w-4 mr-1" /> GitHub
        </a>
      </Button>
    </div>
  );
};

const Community = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState("connect");

  const upcomingEvents = [
    {
      title: "Genesis Conference 2023",
      date: "November 15-17, 2023",
      location: "San Francisco, CA",
      description:
        "Join us for the annual Genesis Conference featuring talks from core team members, workshops, and networking opportunities with the Genesis community.",
      link: "/events/conference-2023",
      isVirtual: false,
    },
    {
      title: "Virtual Meetup: Genesis for Web Development",
      date: "October 5, 2023",
      location: "Online",
      description:
        "Learn how to use Genesis for building modern web applications with a focus on performance and developer experience.",
      link: "/events/web-dev-meetup",
      isVirtual: true,
    },
    {
      title: "Genesis Contributor Workshop",
      date: "September 20, 2023",
      location: "Online",
      description:
        "A hands-on workshop for developers interested in contributing to Genesis. Learn about the codebase, development workflow, and how to make your first contribution.",
      link: "/events/contributor-workshop",
      isVirtual: true,
    },
  ];

  const coreContributors = [
    {
      name: "Alex Chen",
      role: "Creator & Lead Developer",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      contributions: "Language design, compiler, standard library",
      githubUrl: "https://github.com/genesis-lang",
    },
    {
      name: "Sarah Johnson",
      role: "Core Team Member",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      contributions: "Type system, documentation",
      githubUrl: "https://github.com/genesis-lang",
    },
    {
      name: "Michael Wong",
      role: "Core Team Member",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      contributions: "Runtime, performance optimization",
      githubUrl: "https://github.com/genesis-lang",
    },
    {
      name: "Emily Davis",
      role: "Core Team Member",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      contributions: "Package manager, tooling",
      githubUrl: "https://github.com/genesis-lang",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar onThemeToggle={toggleTheme} isDarkMode={theme === "dark"} />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Join the Genesis Community
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Connect with developers, contribute to the language, and help
                shape the future of Genesis. Our community is open, inclusive,
                and excited to welcome new members.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="gap-2">
                  <Users className="h-5 w-5" />
                  Get Involved
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Calendar className="h-5 w-5" />
                  Upcoming Events
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Community Tabs */}
        <section className="py-12 px-4 md:px-8">
          <div className="container mx-auto max-w-6xl">
            <Tabs
              defaultValue="connect"
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-8">
                <TabsTrigger value="connect">Connect</TabsTrigger>
                <TabsTrigger value="contribute">Contribute</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
              </TabsList>

              <TabsContent value="connect" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <CommunityCard
                    title="Discord Community"
                    description="Join our active Discord server to chat with other Genesis developers, get help, and participate in discussions about language features and development."
                    icon={<MessageSquare size={24} />}
                    buttonText="Join Discord"
                    buttonLink="https://discord.gg/genesis-lang"
                  />

                  <CommunityCard
                    title="Community Forum"
                    description="Our forum is the perfect place for longer discussions, sharing projects, and getting help with more complex questions about Genesis."
                    icon={<Users size={24} />}
                    buttonText="Visit Forum"
                    buttonLink="https://forum.genesislang.org"
                  />

                  <CommunityCard
                    title="GitHub Discussions"
                    description="Participate in technical discussions, feature requests, and bug reports directly on our GitHub repository."
                    icon={<Github size={24} />}
                    buttonText="GitHub Discussions"
                    buttonLink="https://github.com/genesis-lang/genesis/discussions"
                    secondaryButton={{
                      text: "View Issues",
                      link: "https://github.com/genesis-lang/genesis/issues",
                    }}
                  />
                </div>

                <div className="bg-muted p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Community Guidelines
                  </h3>
                  <p className="mb-4">
                    The Genesis community is dedicated to providing a welcoming,
                    inclusive, and harassment-free experience for everyone. We
                    expect all community members to abide by our Code of
                    Conduct.
                  </p>
                  <Button variant="outline">Read Our Code of Conduct</Button>
                </div>
              </TabsContent>

              <TabsContent value="contribute" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CommunityCard
                    title="Contribute to Genesis"
                    description="Help improve Genesis by contributing to the language, standard library, documentation, or tooling. We welcome contributions of all sizes."
                    icon={<Code size={24} />}
                    buttonText="Contribution Guide"
                    buttonLink="/contribute"
                    secondaryButton={{
                      text: "Good First Issues",
                      link: "https://github.com/genesis-lang/genesis/labels/good%20first%20issue",
                    }}
                  />

                  {/* Contribution Guide Component */}
                  <div className="col-span-1 md:col-span-2 mt-8">
                    <ContributionGuide />
                  </div>

                  <CommunityCard
                    title="Improve Documentation"
                    description="Help make Genesis more accessible by improving our documentation, writing tutorials, or creating examples."
                    icon={<BookOpen size={24} />}
                    buttonText="Documentation Guide"
                    buttonLink="/contribute/documentation"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <CommunityCard
                    title="Share Your Projects"
                    description="Built something with Genesis? Share it with the community to inspire others and showcase what's possible with the language."
                    icon={<Lightbulb size={24} />}
                    buttonText="Submit Project"
                    buttonLink="/showcase/submit"
                  />

                  <CommunityCard
                    title="Become a Sponsor"
                    description="Support Genesis development through financial contributions. Sponsors help ensure the project's long-term sustainability."
                    icon={<Heart size={24} />}
                    buttonText="Sponsor Genesis"
                    buttonLink="https://github.com/sponsors/genesis-lang"
                  />
                </div>

                <div className="mt-12">
                  <h3 className="text-2xl font-semibold mb-6 text-center">
                    Core Contributors
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {coreContributors.map((contributor, index) => (
                      <ContributorCard
                        key={index}
                        name={contributor.name}
                        role={contributor.role}
                        avatarUrl={contributor.avatarUrl}
                        contributions={contributor.contributions}
                        githubUrl={contributor.githubUrl}
                      />
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="events" className="space-y-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-6">
                    Upcoming Events
                  </h3>
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <EventCard
                        key={index}
                        title={event.title}
                        date={event.date}
                        location={event.location}
                        description={event.description}
                        link={event.link}
                        isVirtual={event.isVirtual}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CommunityCard
                    title="Host a Meetup"
                    description="Organize a Genesis meetup in your area to connect with local developers and share knowledge about the language."
                    icon={<Users size={24} />}
                    buttonText="Meetup Guide"
                    buttonLink="/community/host-meetup"
                  />

                  <CommunityCard
                    title="Genesis Conference"
                    description="Learn about our annual conference, featuring talks, workshops, and networking opportunities with the Genesis community."
                    icon={<Award size={24} />}
                    buttonText="Conference Details"
                    buttonLink="/conference"
                  />
                </div>

                <div className="bg-muted p-6 rounded-lg mt-8 text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    Stay Updated on Events
                  </h3>
                  <p className="mb-4">
                    Subscribe to our newsletter to receive updates about
                    upcoming Genesis events, meetups, and conferences.
                  </p>
                  <div className="flex max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-grow px-4 py-2 rounded-l-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <Button className="rounded-l-none">Subscribe</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 px-4 md:px-8 bg-muted/20">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Community Success Stories
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                See how developers and organizations are using Genesis to build
                amazing things.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 overflow-hidden">
                <div className="aspect-video rounded-md bg-muted mb-4 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                    alt="Team working on code"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  TechCorp Reduces Build Times by 70%
                </h3>
                <p className="text-muted-foreground mb-4">
                  "Switching our backend services to Genesis has dramatically
                  improved our development workflow and system performance."
                </p>
                <Button variant="outline" className="w-full">
                  Read Case Study
                </Button>
              </Card>

              <Card className="p-6 overflow-hidden">
                <div className="aspect-video rounded-md bg-muted mb-4 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                    alt="Startup team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Startup Builds ML Platform in Record Time
                </h3>
                <p className="text-muted-foreground mb-4">
                  "Genesis allowed our small team to build and deploy a
                  sophisticated machine learning platform in just three months."
                </p>
                <Button variant="outline" className="w-full">
                  Read Case Study
                </Button>
              </Card>

              <Card className="p-6 overflow-hidden">
                <div className="aspect-video rounded-md bg-muted mb-4 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                    alt="Developer coding"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Open Source Game Engine Thrives
                </h3>
                <p className="text-muted-foreground mb-4">
                  "Our community-built game engine has grown to over 5,000 stars
                  on GitHub, with contributors from around the world."
                </p>
                <Button variant="outline" className="w-full">
                  Read Case Study
                </Button>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button className="gap-2">
                View All Success Stories <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 md:px-8 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Become part of the Genesis ecosystem today. Connect with fellow
              developers, contribute to the project, and help shape the future
              of programming.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="gap-2" asChild>
                <a
                  href="https://discord.gg/genesis-lang"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="h-5 w-5" />
                  Join Discord Community
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a
                  href="https://github.com/genesis-lang/genesis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  Star on GitHub
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Community;
