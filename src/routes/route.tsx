import { useRoutes, Routes, Route } from "react-router";
import Home from "@/pages/Home";
import Documentation from "@/pages/Documentation";
import Download from "@/pages/Download";
import Examples from "@/pages/Examples";
import Community from "@/pages/Community";
import Playground from "@/components/Playground";
import routes from "tempo-routes";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Documentation />} />
        <Route path="/docs/*" element={<Documentation />} />
        <Route path="/download" element={<Download />} />
        <Route path="/examples" element={<Examples />} />
        <Route path="/community" element={<Community />} />
        <Route path="/playground" element={<Playground />} />
      </Routes>
      {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
    </>
  );
};

export default AppRoutes;