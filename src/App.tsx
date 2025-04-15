import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Documentation from "./pages/Documentation";
import Download from "./pages/Download";
import Examples from "./components/Examples";
import Community from "./components/Community";
import Playground from "./components/Playground";
import routes from "tempo-routes";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<p>Loading...</p>}>
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
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
