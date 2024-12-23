import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { Router } from "./routes/Router";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"; // React Query Devtools 추가
import { GalleristContextProvider } from "./contexts/ExhibitContext";

// React Query 클라이언트 생성
const queryClient = new QueryClient();

const App = () => (
  <GalleristContextProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  </GalleristContextProvider>
);

export default App;
