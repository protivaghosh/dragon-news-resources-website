import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';
import LatestNews from '../LatestNews';
import Navbar from '../Navbar';

const HomeLayOut = () => {
    return (
        <div>
           <header>
            <Header></Header>
            <section className='w-11/12 mx-auto'>
                <LatestNews></LatestNews>
            </section>
            <nav className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </nav>
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