import SearchTab from './SearchTab';
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Details from "./Details";
import './style.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <Link to="/">Adopt Me</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchTab/>} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
