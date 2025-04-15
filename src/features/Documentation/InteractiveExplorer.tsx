import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
          <a href="/playground">Try Genesis Playground</a>
        </Button>
        <Button variant="outline" className="gap-2" asChild>
          <a href="/docs/syntax/cheatsheet">Download Syntax Cheatsheet</a>
        </Button>
      </div>
    </Card>
  );
};
