import React from 'react';
import type { TechDataType } from '../types/types';
import { FaStar } from 'react-icons/fa';

interface TechnologyProps {
    tech: TechDataType;
}

const Technology = ({ tech }: TechnologyProps) => {
    return (
        <div className='container mx-auto border p-5 rounded-2xl border-gray-300'>
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
                <p className='text-sm font-light text-gray-400'>{tech.description}</p>
            </div>
            <div className="divider my-2"></div>
            <div className='flex justify-between mb-3 text-sm'>
                <p className='badge badge-ghost'>{tech.category}</p>
                <p>{tech.difficulty}</p>
                <p className='font-medium flex items-center gap-1'><span><FaStar className='text-orange-300' /></span> {tech.rating}</p>
            </div>
            <button className='w-full btn btn-neutral rounded-xl'>Add to Stack</button>
        </div>
    );
};

export default Technology;