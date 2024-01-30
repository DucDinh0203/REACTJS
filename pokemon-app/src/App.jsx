import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';
import DefaultLayout from './Layout/Default.layout';
import HomePage from './Pages/Home/Home.page';

function App() {
  return (
    <div>
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
