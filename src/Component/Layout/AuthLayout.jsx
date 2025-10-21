import React from 'react';
import Navbar from '../Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
       <div className='bg-base-200 min-h-screen'>
         <div className='w-11/12  mx-auto py-4'>
            <Navbar></Navbar>
        </div>
        <main>
            <div className='w-11/12  mx-auto py-4'>

             <Outlet></Outlet>
            </div>
        </main>
       </div>
    );
};

export default AuthLayout;