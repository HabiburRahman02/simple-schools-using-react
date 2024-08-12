/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import Logo from '../Header/logo.png'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

const Header = () => {
    return (
        <nav className='bg-pink-100 p-6 md:flex justify-between px-24 items-center'>
            <img src={Logo} alt="" />
            <div>
                <Link to='/'>Home</Link>
                <Link to='/teacher'>Teacher</Link>
                <Link to='/classes'>Classes</Link>
                <Link to='/about'>About</Link>
                <Link to='/page'>Page</Link>
                <Link to='/blogs'>Blogs</Link>
            </div>
            <div>
                <p>Have any questions?</p>
                <h3 className='text-2xl font-semibold text-purple-400'>+844 1800 33355</h3>
            </div>

        </nav>
    );
};

export default Header;