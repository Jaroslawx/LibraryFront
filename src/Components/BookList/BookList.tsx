import React, {SyntheticEvent} from "react";
import "./BookList.css";
import Book from "../../Components/Book/Book";
import { Book as BookType } from "../../library";
import { v4 as uuidv4 } from "uuid";

interface Props {
    searchResults: BookType[];
    onBookshelfCreate: (e: SyntheticEvent) => void;
}

const BookList: React.FC<Props> = ({ searchResults, onBookshelfCreate }: Props): JSX.Element => {
    return (
        <>
            {searchResults.length > 0 ? (
                searchResults.map((result) => {
                    return (
                        <Book
                            key={uuidv4()}
                            id={result.key}
                            searchResult={result}
                            onBookshelfCreate={onBookshelfCreate}
                        />
                    );
                })
            ) : (
                <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
                    No results found!
                </p>
            )}
        </>
    );
};

export default BookList;
