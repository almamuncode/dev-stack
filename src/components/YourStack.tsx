import React from 'react';

const YourStack = () => {
    return (
        <div className='border p-5 rounded-2xl border-gray-300 h-fit'>
            <h1 className='text-2xl font-bold'>Your Stack</h1>
            <p className='text-sm font-light text-gray-400'>No technologies selected yet.</p>
            <div className='border p-5 rounded-xl border-gray-300 mt-4'>
                <p className='text-sm font-light text-gray-400'>Your Stack is empty</p>
            </div>
        </div>
    );
};

export default YourStack;