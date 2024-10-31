import React from "react";

interface Props {
    bookshelfValue: string;
}

const BookBookshelf = ({bookshelfValue}: Props) => {
    return (
        <>
            <h4>{bookshelfValue}</h4>
            <button>X</button>
        </>
    );
};

export default BookBookshelf;