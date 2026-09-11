import heroImage from '../assets/banner-stack.png'

const Hero = () => {
    return (
        <div className='container mx-auto grid grid-cols-1 items-center gap-8 px-4 pt-20 sm:px-6 md:gap-10 lg:grid-cols-2 lg:pt-0'>
            <div className=''>
                <div className='my-8 md:my-10'>
                    <h1 className='mb-5 text-4xl font-bold sm:text-5xl lg:text-6xl'>Build Your Ideal <br />
                        <span className='text-dev-gradient'>Development Stack</span></h1>
                    <p className='max-w-2xl'>Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.</p>
                </div>
                <div className='flex flex-col gap-3 sm:flex-row sm:gap-5'>
                    <button className='btn w-full rounded-xl bg-dev-gradient text-white sm:w-auto'>Explore Technologies</button>
                    <button className='btn w-full rounded-xl px-10 sm:w-auto'>Learn More</button>
                </div>
            </div>
            <div><img className="w-full max-w-xl mx-auto" src={heroImage} alt="" /></div>
        </div>
    );
};

export default Hero;