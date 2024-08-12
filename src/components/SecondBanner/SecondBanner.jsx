/* eslint-disable no-unused-vars */
import React from 'react';
import LogoBanner from '../SecondBanner/banner-2.png'
import { BookOpenIcon } from '@heroicons/react/24/solid'

const SecondBanner = () => {
    return (
        <div className='mt-12 flex justify-evenly items-center px-24 py-12'>
            <div>
                <img className='' src={LogoBanner} alt="" />
            </div>
            <div className='ms-12'>
                <h1 className='text-center text-7xl font-bold my-12 text-red-300'>The best playschool for your kid</h1>
                <div className='grid md:grid-cols-2 gap-12 '>
                    <div className=' hover:text-red-400'>
                        <div className='text-center rounded-full '>
                            <BookOpenIcon className='text-pink-500 h-12 w-12'></BookOpenIcon>
                        </div>
                        <h3 className='font-bold  mb-4'>Self-contained gifted programs</h3>
                        <p>By creating a safe, consistent and <br /> welcoming environment</p>
                    </div>
                    <div className=' hover:text-red-400'>
                        <div className='text-center rounded-full '>
                            <BookOpenIcon className='text-pink-500 h-12 w-12'></BookOpenIcon>
                        </div>
                        <h3 className='font-bold  mb-4'>Self-contained gifted programs</h3>
                        <p>By creating a safe, consistent and <br /> welcoming environment</p>
                    </div>
                    <div className=' hover:text-red-400'>
                        <div className='text-center rounded-full '>
                            <BookOpenIcon className='text-pink-500 h-12 w-12'></BookOpenIcon>
                        </div>
                        <h3 className='font-bold  mb-4'>Self-contained gifted programs</h3>
                        <p>By creating a safe, consistent and <br /> welcoming environment</p>
                    </div>
                    <div className=' hover:text-red-400'>
                        <div className='text-center rounded-full '>
                            <BookOpenIcon className='text-pink-500 h-12 w-12'></BookOpenIcon>
                        </div>
                        <h3 className='font-bold  mb-4'>Self-contained gifted programs</h3>
                        <p>By creating a safe, consistent and <br /> welcoming environment</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondBanner;