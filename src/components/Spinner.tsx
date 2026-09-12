import React from 'react';

const Spinner = () => {
    return (
        <div className="container mx-auto flex flex-col items-center justify-center">
            <h2 className='text-lg'>Loading</h2>
            <span className="loading loading-spinner text-primary my-5"></span>
        </div>
    );
};

export default Spinner;