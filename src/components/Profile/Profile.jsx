/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Pro from '../Pro/Pro';
import Banner from '../Banner/Banner';
import SecondBanner from '../SecondBanner/SecondBanner';

const Profile = () => {
    const profileImg = useLoaderData();
    console.log(profileImg)
    return (
        <div className='md:mx-24 mx-6 mt-12'>
            <Banner></Banner>
            <SecondBanner></SecondBanner>
            <div className='my-12 md:grid grid-cols-2 gap-2 '>
                {
                    profileImg.map(pro => <Pro
                        key={pro.id}
                        pro={pro}
                    ></Pro>)
                }
            </div>
        </div>
    );
};

export default Profile;