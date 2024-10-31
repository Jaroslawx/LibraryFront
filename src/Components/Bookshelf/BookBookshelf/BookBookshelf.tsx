import React, {SyntheticEvent} from "react";
import DeleteBookshelf from "../DeleteBookshelf/DeleteBookshelf";

interface Props {
    bookshelfValue: string;
    onBookshelfDelete: (e: SyntheticEvent) => void;
}

const BookBookshelf = ({bookshelfValue, onBookshelfDelete}: Props) => {
    return (
        <>
            <h4>{bookshelfValue}</h4>
            <DeleteBookshelf 
                onBookshelfDelete={onBookshelfDelete} 
                bookshelfValue={bookshelfValue} />
        </>
    );
};

export default BookBookshelf;