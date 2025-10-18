import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';
import LatestNews from '../LatestNews';
import Navbar from '../Navbar';
import LeftAside from './LeftAside';
import RightAside from './RightAside';

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
           <main className='w-11/12 mx-auto grid grid-cols-12 gap-3 mt-5'>
            <aside className='col-span-3'>
                <LeftAside></LeftAside>
            </aside>
            <section className='main col-span-6'>
                <Outlet></Outlet>
            </section>
            <aside className='col-span-3'> 
                <RightAside></RightAside>
            </aside>
           </main>

        </div>
    );
};

export default HomeLayOut;