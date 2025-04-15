import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Separator } from "./ui/separator";

interface FooterProps {
  logoText?: string;
  links?: {
    title: string;
    items: Array<{
      name: string;
      href: string;
    }>;
  }[];
  socialLinks?: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
  copyright?: string;
}

const Footer = ({
  logoText = "Genesis",
  links = [
    {
      title: "Resources",
      items: [
        { name: "Documentation", href: "/docs" },
        { name: "Tutorials", href: "/tutorials" },
        { name: "Examples", href: "/examples" },
        { name: "API Reference", href: "/api" },
      ],
    },
    {
      title: "Community",
      items: [
        { name: "GitHub", href: "https://github.com/Simpleboi/Genesis" },
        { name: "Discord", href: "/discord" },
        { name: "Twitter", href: "https://twitter.com/genesislang" },
        {
          name: "Stack Overflow",
          href: "https://stackoverflow.com/questions/tagged/genesis",
        },
      ],
    },
    {
      title: "More",
      items: [
        { name: "Blog", href: "/blog" },
        { name: "Roadmap", href: "/roadmap" },
        { name: "Contribute", href: "/contribute" },
        { name: "Privacy Policy", href: "/privacy" },
      ],
    },
  ],
  socialLinks = {
    github: "https://github.com/Simpleboi/Genesis",
    twitter: "https://twitter.com/genesislang",
    linkedin: "https://linkedin.com/company/genesis-lang",
    email: "mailto:info@genesislang.org",
  },
  copyright = `© ${new Date().getFullYear()} Genesis Programming Language. All rights reserved.`,
}: FooterProps) => {
  return (
    <footer className="bg-background border-t w-full py-12 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">{logoText}</h2>
            <p className="text-muted-foreground">
              A modern programming language designed for simplicity,
              performance, and developer productivity.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              )}
              {socialLinks.email && (
                <a
                  href={socialLinks.email}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Links sections */}
          {links.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-medium text-lg">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      to={item.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">{copyright}</p>
          <div className="mt-4 md:mt-0">
            <Link
              to="/terms"
              className="text-sm text-muted-foreground hover:text-foreground mr-4"
            >
              Terms of Service
            </Link>
            <Link
              to="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
