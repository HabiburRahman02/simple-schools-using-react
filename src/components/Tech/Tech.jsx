/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Tech = ({ tech }) => {
    const { id, name, age, city, profilePicture, sub } = tech;
    return (
        <div className=' p-12 rounded-xl shadow-2xl flex items-center justify-center'>
            <div>
                <img className='h-48 w-48 rounded-full' src={profilePicture} alt="" />
                <h3 className='text-3xl font-bold text-center my-6'>{name}</h3>
                <p className='text-center text-lg font-semibold'>Age: {age}</p>
                <p className='text-center text-xl'>Subject: {sub}</p>
                <Link><button className=' bg-pink-200 hover:bg-pink-300 ms-7 px-6 py-3 rounded-lg mt-6'>Go To Profile</button></Link>
            </div>
        </div >
    );
};

export default Tech;