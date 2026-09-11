import React from 'react';
import heroImage from '../assets/banner-stack.png'

const Hero = () => {
    return (
        <div className='container mx-auto grid grid-cols-2 items-center gap-10'>
            <div className=''>
                <div className='my-10'>
                    <h1 className='text-6xl font-bold mb-5'>Build Your Ideal <br />
                        <span className='text-dev-gradient'>Development Stack</span></h1>
                    <p>Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.</p>
                </div>
                <div className='flex gap-5'>
                    <button className='btn text-white bg-dev-gradient rounded-xl'>Explore Technologies</button>
                    <button className='btn px-10 rounded-xl'>Learn More</button>
                </div>
            </div>
            <div><img className="w-full max-w-xl mx-auto" src={heroImage} alt="" /></div>
        </div>
    );
};

export default Hero;