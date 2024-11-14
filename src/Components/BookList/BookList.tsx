import React, {SyntheticEvent} from "react";
import "./BookList.css";
import Book from "../../Components/Book/Book";
import { BookSearch } from "../../library";
import { v4 as uuidv4 } from "uuid";
import Spinner from "../Spinner/Spinner";

interface Props {
    searchResults: BookSearch[];
    onBookshelfCreate: (e: SyntheticEvent) => void;
    isLoading: boolean;
}

const BookList: React.FC<Props> = ({ searchResults, onBookshelfCreate, isLoading }: Props): JSX.Element => {
    return (
        <>
            {isLoading ? ( // Spinner appears when loading
                <div className="flex justify-center items-center">
                    <Spinner isLoading={isLoading} />
                </div>
            ) : searchResults.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {searchResults.map((result) => (
                        <Book key={uuidv4()} id={result.key} searchResult={result} onBookshelfCreate={onBookshelfCreate} />
                    ))}
                </div>
            ) : (
                // Message appears when no results are found
                <div className="text-center py-4 px-6 bg-gray-100 text-gray-600 rounded-lg shadow-md">
                    <p className="text-xl font-semibold">No results found.</p>
                </div>
            )}
        </>
    );
};

export default BookList;
