import { InteractiveExplorer } from "./InteractiveExplorer";

const ClassesAndObjectsGuide = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Classes & Objects</h1>
        <p className="text-xl text-muted-foreground">
          Learn how variables are defined, declared, and used in the Genesis
          language.
        </p>
      </div>

      <InteractiveExplorer />
    </div>
  );
};

export default ClassesAndObjectsGuide;