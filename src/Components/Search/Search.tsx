import React, {ChangeEvent, useState, SyntheticEvent} from "react";

interface Props {
    onSearchSubmit: (e: SyntheticEvent) => void;
    search: string | undefined;
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({onSearchSubmit, search, handleSearchChange}: Props): JSX.Element => {
    return (
        <div className="flex flex-col items-center mt-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Search for a Book</h2>
            <form onSubmit={onSearchSubmit} className="w-full max-w-lg flex">
                <input
                    type="text"
                    value={search}
                    onChange={handleSearchChange}
                    placeholder="Enter book title or author..."
                    className="w-full p-4 border border-gray-300 rounded-l-lg text-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <button
                    type="submit"
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 rounded-r-lg text-lg font-semibold transform hover:scale-105 transition duration-200"
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default Search;