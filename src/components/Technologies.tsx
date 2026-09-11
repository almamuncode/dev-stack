import React, { use } from 'react';
import type { TechDataType } from '../types/types';
import Technology from './Technology';

interface TechnologiesProps {
    promiseData: Promise<TechDataType[]>;
}


const Technologies = ({ promiseData }: TechnologiesProps) => {
    const technologies = use(promiseData)

    console.log(technologies)
    return (
        <div className='container mx-auto'>
            <div className='my-8'>
                <h1 className='text-4xl font-extrabold'>Explore the <span className='text-fuchsia-700'>Technologies</span></h1>
            <h2 className='text-2xl font-light text-gray-500'>Pick one technology per category to build your ideal stack.</h2>
            </div>
            <div className='grid grid-cols-3 gap-10'>
                {
                    technologies.map((tech) => (
                        <Technology tech={tech} key={tech.id} />
                    ))
                }
            </div>
        </div>
    );
};

export default Technologies;