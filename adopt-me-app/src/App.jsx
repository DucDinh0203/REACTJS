import SearchTab from './SearchTab';
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";
import './style.css';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Adopt Me</Link>
      </header>
    <Routes>
      <Route path="/details/:id" element={<Details />} />
      <Route path="/" element={<SearchTab/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
