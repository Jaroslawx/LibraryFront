import React from "react";
import "./BookList.css";
import Book from "../Book/Book";

interface Props {}

const BookList : React.FC<Props> = (props: Props): JSX.Element => {
    return (
        <div>
            <Book title="Lord of the Rings" author="J.R.R. Tolkien" description="book"/>
            <Book title="The Bible" author="God and human" description="book"/>
            <Book title="The Chronicles of Narnia" author="C.S. Lewis" description="book"/>
            <Book title="Harry Potter" author="J.K. Rowling" description="book"/>
            <Book title="1984" author="George Orwell" description="book" />
        </div>
    );
};

export default BookList