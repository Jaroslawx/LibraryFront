import React, {SyntheticEvent} from "react";
import BookBookshelf from "../BookBookshelf/BookBookshelf";

interface Props {
    bookshelfValues: string[];
    onBookshelfDelete: (e: SyntheticEvent) => void;
}

const ListBookshelf = ({bookshelfValues, onBookshelfDelete}: Props) => {
    return (
        <>
            <h3>My Bookshelf</h3>
            <ul>
                {bookshelfValues && bookshelfValues.map((bookshelfValue) => {
                    return <BookBookshelf 
                        bookshelfValue={bookshelfValue} 
                        onBookshelfDelete={onBookshelfDelete} />; 
                })}
            </ul>
        </>
    );
};

export default ListBookshelf;