import { Suspense } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import AppRoutes from "./routes/route";

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<p>Loading...</p>}>
        <AppRoutes />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
