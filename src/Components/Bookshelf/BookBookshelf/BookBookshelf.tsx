import React, {SyntheticEvent} from "react";
import DeleteBookshelf from "../DeleteBookshelf/DeleteBookshelf";
import {Link} from "react-router-dom";

interface Props {
    bookshelfValue: string;
    onBookshelfDelete: (e: SyntheticEvent) => void;
}

const BookBookshelf = ({bookshelfValue, onBookshelfDelete}: Props) => {
    return (
        <>
            <Link to={`/book/${bookshelfValue}`}>{bookshelfValue}</Link>
            <DeleteBookshelf 
                onBookshelfDelete={onBookshelfDelete} 
                bookshelfValue={bookshelfValue} />
        </>
    );
};

export default BookBookshelf;