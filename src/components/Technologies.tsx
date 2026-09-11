import { use, useState } from 'react';
import type { TechDataType } from '../types/types';
import Technology from './Technology';
import YourStack from './YourStack';
import { Bounce, toast } from 'react-toastify';

interface TechnologiesProps {
    promiseData: Promise<TechDataType[]>;

}


const Technologies = ({ promiseData }: TechnologiesProps) => {
    const technologies = use(promiseData)

    const [selectedTechs, setSelectedTechs] = useState<TechDataType[]>([]);

    const handleAddToStack = (tech: TechDataType) => {
        setSelectedTechs((prev) => [...prev, tech]);
        toast.success(`${tech.name} has been added to your Stack`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };

  const handleDeleteFromStack = (id: number) => {
    const tech = selectedTechs.find((item) => item.id === id);

    setSelectedTechs((prev) =>
        prev.filter((item) => item.id !== id)
    );

    toast.info(`${tech?.name ?? "Technology"} has been removed from your Stack`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
    });
};

    const handleRemoveAll = () => {
        setSelectedTechs([]);
        toast.info(`All Stacks has been removed from your Stack`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };

    return (
        <div className='container mx-auto px-4 sm:px-6'>
            <div className='container mx-auto'>
                <div className='my-8'>
                    <h1 className='text-3xl font-extrabold sm:text-4xl'>Explore the <span className='text-dev-gradient'>Technologies</span></h1>
                    <h2 className='text-base font-light text-gray-500 sm:text-xl'>Pick one technology per category to build your ideal stack.</h2>
                </div>
                <div className='grid grid-cols-1 gap-8 xl:grid-cols-4'>
                    <div className='xl:col-span-3'>
                        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8'>
                            {
                                technologies.map((tech) => (
                                    <Technology tech={tech} key={tech.id} handleAddToStack={handleAddToStack} selectedTechs={selectedTechs} />
                                ))
                            }
                        </div>
                    </div>
                    <YourStack selectedTechs={selectedTechs} handleDeleteFromStack={handleDeleteFromStack} handleRemoveAll={handleRemoveAll}></YourStack>
                </div>
            </div>
        </div>
    );
};

export default Technologies;