import React, {ChangeEvent, useState, SyntheticEvent} from "react";
import { AiOutlineSearch } from 'react-icons/ai';

interface Props {
    onSearchSubmit: (e: SyntheticEvent) => void;
    search: string | undefined;
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({onSearchSubmit, search, handleSearchChange}: Props): JSX.Element => {
    return (
        <div className="flex flex-col items-center mt-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Search for a Book</h2>
            <form onSubmit={onSearchSubmit} className="w-full max-w-lg flex relative">
                <input
                    type="text"
                    value={search}
                    onChange={handleSearchChange}
                    placeholder="Enter book title or author..."
                    className="w-full p-4 pl-12 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <AiOutlineSearch
                    onClick={onSearchSubmit}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-green-500 cursor-pointer text-2xl"
                />
            </form>
        </div>
    );
};

export default Search;