import React from "react";
import "./BookList.css";
import Book from "../../Components/Book/Book";
import { Book as BookType } from "../../library";
import { v4 as uuidv4 } from "uuid";

interface Props {
    searchResults: BookType[];
}

const BookList: React.FC<Props> = ({ searchResults }: Props): JSX.Element => {
    return (
        <>
            {searchResults.length > 0 ? (
                searchResults.map((result) => {
                    return (
                        <Book
                            key={uuidv4()}
                            id={result.key}
                            searchResult={result}
                        />
                    );
                })
            ) : (
                <h1>No results found</h1>
            )}
        </>
    );
};

export default BookList;
