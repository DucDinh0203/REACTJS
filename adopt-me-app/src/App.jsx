import SearchTab from './SearchTab';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";
import './style.css';

function App() {
  return (
    <BrowserRouter>
      <h1>Adopt Me!</h1>
    <Routes>
      <Route path="/details/:id" element={<Details />} />
      <Route path="/" element={<SearchTab/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
