import React from 'react';
import HomePage from '../Pages/Home/Home.page';
import HeaderComponments from '../Componments/Header/Header.componments';

const DefaultLayout = () => {
  return (
    <>
        <header>
            <HeaderComponments/>
        </header>
        <main>
            <HomePage/>
        </main>
    </>
  )
}

export default DefaultLayout;