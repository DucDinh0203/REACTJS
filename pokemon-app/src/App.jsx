import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';
import DefaultLayout from './Layout/Default.layout';
import HomePage from './Pages/Home/Home.page';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  }
});

function App() {
  return (
    <div>
      <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<DefaultLayout/>}>
            <Route index element={<HomePage />} />
            <Route path="/details/:id"/>
            <Route path="/about"/>
            <Route path="/contact"/>  
          </Route>

          <Route path="/login" />
          <Route path="/register"/>
        </Routes>
      </QueryClientProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
