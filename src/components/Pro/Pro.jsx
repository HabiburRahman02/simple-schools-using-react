/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Pro = ({ pro }) => {
    const { name, profilePicture } = pro;
    return (
        <div className=''>
            <img className='h-5/6 w-5/6 rounded-lg' src={profilePicture} alt="" />
        </div>
    )
};

export default Pro;