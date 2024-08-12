/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tech from '../Tech/Tech';

const Teacher = () => {
    const teachers = useLoaderData();
    console.log(teachers)
    return (
        <div className='my-12'>
            <div className='grid md:grid-cols-3 gap-8 md:mx-24'>
                {
                    teachers.map(tech => <Tech
                        key={tech.id}
                        tech={tech}
                    ></Tech>)
                }
            </div>
        </div>
    );
};

export default Teacher;