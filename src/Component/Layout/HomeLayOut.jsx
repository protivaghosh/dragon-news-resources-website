import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';
import LatestNews from '../LatestNews';

const HomeLayOut = () => {
    return (
        <div>
           <header>
            <Header></Header>
            <section className='w-11/12 mx-auto'>
                <LatestNews></LatestNews>
            </section>
            </header> 
           <main>
            <section className='left-nav'></section>
            <section className='main'>
                <Outlet></Outlet>
            </section>
            <section className='right-nav'></section>
           </main>

        </div>
    );
};

export default HomeLayOut;