import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { VariableBasics } from "./Variables/basics";
import { VariableExpressions } from "./Variables/expressions";
import { VariableStatements } from "./Variables/statements";
import { VariablesAdvanced } from "./Variables/advanced";

const VariableGuide = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Variables
        </h1>
        <p className="text-xl text-muted-foreground">
          Learn how variables are defined, declared, and used in the Genesis language.
        </p>
      </div>

      <Tabs defaultValue="basics" className="w-full">
        <TabsList className="w-full justify-start border-b rounded-none px-0 mb-4">
          <TabsTrigger
            value="basics"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Basics
          </TabsTrigger>
          <TabsTrigger
            value="expressions"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Expressions
          </TabsTrigger>
          <TabsTrigger
            value="statements"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Statements
          </TabsTrigger>
          <TabsTrigger
            value="advanced"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Advanced
          </TabsTrigger>
        </TabsList>

        {/* The Basics Section of Variables */}
        <VariableBasics />

        {/* The Expression section of Variables */}
        <VariableExpressions />

        {/* The Statements Section of Variables */}
        <VariableStatements />

        {/* The Advanced Section of Variables */}
        <VariablesAdvanced />
      </Tabs>

      <Card className="p-6 bg-primary/5 border-primary/20">
        <h3 className="text-xl font-semibold mb-2">
          Interactive Syntax Explorer
        </h3>
        <p className="mb-4">
          Want to explore Genesis syntax interactively? Try our online
          playground where you can write and run Genesis code in your browser.
        </p>
        <div className="flex gap-4">
          <Button className="gap-2" asChild>
            <a href="/playground">Try Genesis Playground</a>
          </Button>
          <Button variant="outline" className="gap-2" asChild>
            <a href="#">Download Syntax Cheatsheet</a>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default VariableGuide;
