/* eslint-disable no-unused-vars */
import React from 'react';
import BannerImg from '../Banner/banner.png'

const Banner = () => {
    return (
        <div className='md:flex justify-between items-center  bg-purple-400 text-white rounded-md px-24'>
            <div>
                <h1 className='text-7xl font-bold italic'>
                    Develop Skilled
                    <br /><span className='text-red-700'> More & More</span>
                </h1>
                <button className='mt-12 bg-orange-400 px-8 py-4 font-bold rounded-lg hover:bg-orange-500'>Find Out More</button>
            </div>
            <div>
                <img className='h-3/6 w-10/12' src={BannerImg} alt="" />
            </div>
           
        </div>
    );
};

export default Banner;