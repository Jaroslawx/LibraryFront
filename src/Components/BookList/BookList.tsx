import React from "react";
import "./BookList.css";
import Book from "../Book/Book";

interface Props {}

const BookList = (props: Props) => {
    return (
        <div>
            <Book title="Lord of the Rings" author="J.R.R. Tolkien" description="book"/>
            <Book title="The Bible" author="God and human" description="book"/>
            <Book title="The Chronicles of Narnia" author="C.S. Lewis" description="book"/>
            <Book title="Harry Potter" author="J.K. Rowling" description="book"/>
        </div>
    );
};

export default BookList