import React, {SyntheticEvent} from "react";
import "./BookList.css";
import Book from "../../Components/Book/Book";
import { BookSearch } from "../../library";
import { v4 as uuidv4 } from "uuid";
import Spinner from "../Spinner/Spinner";

interface Props {
    searchResults: BookSearch[];
    onBookshelfCreate: (e: SyntheticEvent) => void;
}

const BookList: React.FC<Props> = ({ searchResults, onBookshelfCreate }: Props): JSX.Element => {
    return (
        <>
            {searchResults.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {searchResults.map((result) => (
                        <Book
                            key={uuidv4()}
                            id={result.key}
                            searchResult={result}
                            onBookshelfCreate={onBookshelfCreate}
                        />
                    ))}
                </div>
            ) : (
                <Spinner />
            )}
        </>
    );
};

export default BookList;
