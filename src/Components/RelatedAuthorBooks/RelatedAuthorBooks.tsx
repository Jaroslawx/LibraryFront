import React, { useState, useEffect } from 'react';
import {getAuthorBooks} from "../../api";
import {Link} from "react-router-dom";

interface RelatedAuthorBooksProps {
    authorKey: string;
}

const RelatedAuthorBooks: React.FC<RelatedAuthorBooksProps> = ({ authorKey }) => {
    const [books, setBooks] = useState<any[]>([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const booksData = await getAuthorBooks(authorKey);
            if (booksData) {
                setBooks(booksData);
            }
        };

        fetchBooks();
    }, [authorKey]);

    if (books.length === 0) {
        return <p>No related books found.</p>;
    }
    if (books) {
        console.log(books)
    }

    return (
        <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">More Books by This Author</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {books.map((book) => (
                    <Link
                        key={book.key}
                        to={`/book/${book.key.replace("/works/", "")}`}
                        className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105"
                    >
                        {/* check if  */}
                        {book.cover_id ? (
                            <img
                                src={`https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`}
                                alt={book.title}
                                className="w-full h-auto rounded-lg mb-4"
                            />
                        ) : (
                            <div className="w-full h-40 bg-gray-300 rounded-lg flex justify-center items-center mb-4">
                                <span className="text-gray-500">No Cover</span>
                            </div>
                        )}

                        {/* Book Tittle */}
                        <h4 className="text-lg font-medium text-gray-700 mt-2">
                            {book.title}
                        </h4>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default RelatedAuthorBooks;
