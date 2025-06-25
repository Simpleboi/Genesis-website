import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { QuickInstall } from "../Installation/QuickInstall";
import { ManualInstall } from "../Installation/ManualInstall";
import { VerifyInstall } from "../Installation/VerifyInstall";

export const GettingStartedInstallation = () => {
  return (
    <>
      {/* Installation Content */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Installing Genesis
        </h1>
        <p className="text-xl text-muted-foreground">
          Get Genesis up and running on your system in just a few steps.
        </p>
      </div>

      <Tabs defaultValue="quick" className="w-full">
        <TabsList className="w-full justify-start border-b rounded-none px-0 mb-4">
          <TabsTrigger
            value="quick"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Quick Install
          </TabsTrigger>
          <TabsTrigger
            value="manual"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Manual Install
          </TabsTrigger>
          <TabsTrigger
            value="verify"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Verification
          </TabsTrigger>
        </TabsList>

        {/* The Quick install section */}
        <QuickInstall />

        {/* The manual install section */}
        <ManualInstall />

        {/* The verify install section */}
        <VerifyInstall />
      </Tabs>
    </>
  );
};
