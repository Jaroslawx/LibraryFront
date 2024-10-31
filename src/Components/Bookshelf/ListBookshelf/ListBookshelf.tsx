import React from "react";
import BookBookshelf from "../BookBookshelf/BookBookshelf";

interface Props {
    bookshelfValues: string[];
}

const ListBookshelf = ({bookshelfValues}: Props) => {
    return (
        <>
            <h3>My Bookshelf</h3>
            <ul>
                {bookshelfValues && bookshelfValues.map((bookshelfValue) => {
                    return <BookBookshelf bookshelfValue={bookshelfValue}/>; 
                })}
            </ul>
        </>
    );
};

export default ListBookshelf;