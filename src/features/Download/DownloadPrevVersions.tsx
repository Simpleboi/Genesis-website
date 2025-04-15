import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";

export const DownloadPrevVersions = () => {
  return (
    <section className="py-12 px-4 md:px-8 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-8">Previous Versions</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Version</th>
                <th className="text-left py-3 px-4">Release Date</th>
                <th className="text-left py-3 px-4">Platforms</th>
                <th className="text-left py-3 px-4">Notes</th>
                <th className="text-left py-3 px-4">Download</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-muted/50">
                <td className="py-3 px-4">1.1.0</td>
                <td className="py-3 px-4">Feb 10, 2023</td>
                <td className="py-3 px-4">Windows, macOS, Linux</td>
                <td className="py-3 px-4">Performance improvements</td>
                <td className="py-3 px-4">
                  <Button variant="ghost" size="sm">
                    <DownloadIcon className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/50">
                <td className="py-3 px-4">1.0.5</td>
                <td className="py-3 px-4">Dec 15, 2022</td>
                <td className="py-3 px-4">Windows, macOS, Linux</td>
                <td className="py-3 px-4">Bug fixes</td>
                <td className="py-3 px-4">
                  <Button variant="ghost" size="sm">
                    <DownloadIcon className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/50">
                <td className="py-3 px-4">1.0.0</td>
                <td className="py-3 px-4">Oct 1, 2022</td>
                <td className="py-3 px-4">Windows, macOS, Linux</td>
                <td className="py-3 px-4">Initial stable release</td>
                <td className="py-3 px-4">
                  <Button variant="ghost" size="sm">
                    <DownloadIcon className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-center">
          <Button variant="outline">View All Previous Versions</Button>
        </div>
      </div>
    </section>
  );
};
