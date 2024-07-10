import React from "react";
import Router from "./routes";
import { queryClient } from "./react-query";
import { QueryClientProvider } from "@tanstack/react-query";

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
