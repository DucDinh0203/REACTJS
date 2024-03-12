import './Home.style.css';
import PokeDex from '../../Componments/Pokemon/PokeDex';
// import { useState, useEffect } from 'react';

//  const Component = () => {
//   const [state, setState] = useState()


//   useEffect(() => {

//     console.log("trigger effect")

//   }, [])

//   console.log("render", state)

//   return <button onClick={() => setState(Math.random())}>Test</button>
//  }

const HomePage = () => {
  
  return (
    <div>
      <PokeDex/>
    </div>
  )
}

export default HomePage;