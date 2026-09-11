import React from 'react';
import type { TechDataType } from '../types/types';
import { FaStar } from 'react-icons/fa';

interface TechnologyProps {
  tech: TechDataType;
  handleAddToStack: (tech: TechDataType) => void;
  selectedTechs: TechDataType[];
}

const Technology = ({ tech, handleAddToStack, selectedTechs }: TechnologyProps) => {
    const isAdded = selectedTechs.some(
        (item) => item.id === tech.id
    );
    return (
        <div className='container mx-auto flex h-full flex-col border p-5 rounded-2xl border-gray-300'>
            <div className='flex justify-between'>
                <img className='w-8' src={tech.icon} alt="Tech Icon" />
                <p className={`badge badge-soft ${tech.badge === "Popular"
                    ? "badge-primary"
                    : tech.badge === "Fast"
                        ? "badge-info"
                        : tech.badge === "Essential"
                            ? "badge-success"
                            : tech.badge === "Containers"
                                ? "badge-secondary"
                                : tech.badge === "Reliable"
                                    ? "badge-accent"
                                    : tech.badge === "Flexible"
                                        ? "badge-warning"
                                        : "badge-neutral"}`}>{tech.badge}</p>
            </div>
            <div className='my-3'>
                <h1 className='text-xl font-semibold'>{tech.name}</h1>
                <p className='text-sm font-light text-gray-400 min-h-12'>
                    {tech.description}
                </p>
            </div>
            <div className="divider my-2"></div>
            <div className='flex justify-between mb-3 text-sm'>
                <p className='badge badge-ghost'>{tech.category}</p>
                <p>{tech.difficulty}</p>
                <p className='font-medium flex items-center gap-1'><span><FaStar className='text-orange-300' /></span> {tech.rating}</p>
            </div>
            <button onClick={()=>handleAddToStack(tech)} className='btn btn-neutral mt-auto w-full rounded-xl' disabled={isAdded}>
                {isAdded ? "Added already" : "Add to Stack"}
            </button>
        </div>
    );
};

export default Technology;