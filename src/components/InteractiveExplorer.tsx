import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const InteractiveExplorer = () => {
  return (
    <Card className="p-6 bg-primary/5 border-primary/20">
      <h3 className="text-xl font-semibold mb-2">
        Interactive Syntax Explorer
      </h3>
      <p className="mb-4">
        Want to explore Genesis syntax interactively? Try our online playground
        where you can write and run Genesis code in your browser.
      </p>
      <div className="flex gap-4">
        <Button className="gap-2" asChild>
          <Link to="/playground">Try Genesis Playground</Link>
        </Button>
        <Button variant="outline" className="gap-2" asChild>
          <Link to="/">Download Syntax Cheetsheet</Link>
        </Button>
      </div>
    </Card>
  );
};

// Come back to fix the Syntax Cheetshee section
