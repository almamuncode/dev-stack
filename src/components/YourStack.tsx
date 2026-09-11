import type { TechDataType } from "../types/types";
import { RiDeleteBin6Line } from "react-icons/ri";

interface YourStackProps {
    selectedTechs: TechDataType[];
    handleDeleteFromStack: (id: number) => void;
    handleRemoveAll: () => void;
}

const YourStack = ({selectedTechs, handleDeleteFromStack, handleRemoveAll}: YourStackProps) => {
    return (
        <div className="h-fit rounded-2xl border border-gray-300 p-5">
            <h1 className="text-2xl font-bold">Your Stack</h1>

            <p className="text-sm font-light text-gray-400">
                {selectedTechs.length === 0 ? "No technologies selected yet."
                    : `${selectedTechs.length} ${selectedTechs.length === 1 ? "technology" : "technologies"} selected.`}</p>

            {selectedTechs.length === 0 ? (
                <div className="mt-4 rounded-xl border border-gray-300 p-5">
                    <p className="text-sm font-light text-gray-400">Your Stack is empty</p>
                </div>) : (
                <div>
                    <div className="mt-4 space-y-3">
                        {selectedTechs.map((tech) => (
                            <div key={tech.id} className="rounded-xl border border-gray-200 p-4">
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={tech.icon}
                                            alt={tech.name}
                                            className="h-8 w-8" />
                                        <h2 className="font-semibold">{tech.name}</h2>
                                    </div>
                                    <div className="text-fuchsia-600 cursor-pointer"
                                        onClick={() => handleDeleteFromStack(tech.id)}>
                                        <RiDeleteBin6Line />
                                    </div>
                                </div>
                                <p className="mt-2 text-sm font-light text-gray-400">
                                    {tech.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    <button
                    className="btn btn-outline btn-error mt-4 w-full rounded-xl"
                    onClick={handleRemoveAll}>Remove All
                    </button>
                </div>
            )}
        </div>
    );
};

export default YourStack;
