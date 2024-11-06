import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {getWorkDetails} from "../../api";
import {BookDetails} from "../../library";

interface Props {}

const BookPage = (props: Props) => {
    const {bookId} = useParams<{bookId: string}>();
    const [bookDetails, setBookDetails] = useState<BookDetails | null>(null);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const bookData = await getWorkDetails(bookId as string);
                if (typeof bookData === 'string') {
                    console.error(bookData);
                } else {
                    setBookDetails(bookData);
                }
            } catch (error) {
                console.error('Error fetching book details:', error);
            }
        };

        fetchBook();
    }, [bookId]);

    if (!bookDetails) return <div>Loading...</div>;
    
    return (
        <div>
            <h1>{bookDetails.title}</h1>
            <p>Authors: {bookDetails.authors.map((author) => author.name).join(', ')}</p>
            <p>Publication date: {bookDetails.publish_date}</p>
            <p>Subjects: {bookDetails.subjects.slice(0, 5).join(', ')}</p>
            {bookDetails.description && (
                <p>
                    Description: {
                    typeof bookDetails.description === 'string'
                        ? bookDetails.description.split(/(\[source\]|\(\[source\])/i)[0]
                        : (bookDetails.description as { value: string }).value.split(/(\[source\]|\(\[source\])/i)[0]
                }
                </p>
            )}
            <div>
                Cover: {bookDetails.cover && (
                <img src={bookDetails.cover.large} alt={bookDetails.title}/>
            )}
            </div>
        </div>
    );
};

export default BookPage; 