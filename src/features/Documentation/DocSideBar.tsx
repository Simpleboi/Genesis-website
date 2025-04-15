import { Search, Bookmark } from "lucide-react";
import { useState } from "react";
import { sidebarLinks } from "@/data/DocSideBarLinks";
import { Button } from "@/components/ui/button";

interface DocSideBarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const DocSideBar: React.FC<DocSideBarProps> = ({
  currentPage,
  onPageChange,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <aside className="w-full md:w-64 shrink-0">
      <div className="sticky top-24 space-y-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search documentation..."
            className="w-full pl-10 pr-4 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Navigation */}
        <nav className="space-y-6">
          {sidebarLinks.map((section, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center text-sm font-medium text-muted-foreground">
                {section.icon}
                {section.title}
              </div>
              <ul className="space-y-1 pl-6 border-l border-border">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className={`block py-1 text-sm hover:text-primary transition-colors ${
                        currentPage === link.name.toLowerCase()
                          ? "text-primary font-medium"
                          : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        onPageChange(link.name.toLowerCase());
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="pt-4">
          <Button variant="outline" className="w-full justify-start">
            <Bookmark className="mr-2 h-4 w-4" />
            Download PDF Documentation
          </Button>
        </div>
      </div>
    </aside>
  );
};
