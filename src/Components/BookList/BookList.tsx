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
                <h1>No results found</h1>
            )}
        </>
    );
};

export default BookList;
