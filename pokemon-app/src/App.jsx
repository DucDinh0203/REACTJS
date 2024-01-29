import HeaderComponments from './componments/Header/Header.componments';
import { BrowserRouter } from 'react-router-dom';
import './style.css';

function App() {
  return (
    
    <div>
      <BrowserRouter>
        <HeaderComponments/>
      </BrowserRouter>
    </div>
  );
}

export default App;
