import React, {useEffect, useState} from "react";
import { useParams} from "react-router";
import {getAuthorName, getWorkDetails} from "../../api";
import {AuthorName, BookDetails} from "../../library";

interface Props {}

const BookPage = (props: Props) => {
    const { bookId } = useParams<{ bookId: string }>();
    const [bookDetails, setBookDetails] = useState<BookDetails | null>(null);
    const [authorKeys, setAuthorKeys] = useState<string[]>([]);
    const [authorNames, setAuthorNames] = useState<AuthorName[]>([]);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const bookData = await getWorkDetails(bookId as string);
                if (typeof bookData === 'string') {
                    console.error(bookData);
                } else {
                    setBookDetails(bookData);
                    
                    if (bookData.authors) {
                        const keys = bookData.authors?.map((authorObj) => {
                            console.log('authorObj:', authorObj); // Logowanie dla debugowania
                            return authorObj.author?.key || 'Unknown key';
                        });
                        setAuthorKeys(keys);

                        console.log('keys:', keys);

                        
                    }
                }
            } catch (error) {
                console.error('Error fetching book details:', error);
            }
        };

        fetchBook();
    }, [bookId]);

    if (!bookDetails) return <div>Loading...</div>;
    if (bookDetails) {
        // console.log(bookDetails);
        // console.log(bookDetails?.authors);
        // console.log(authorNames);
    }
    
    return (
        <div>
            <h1>{bookDetails.title}</h1>
            <p>
                Authors: {authorNames.length > 0 ? authorNames.join(', ') : 'No authors available'}
            </p>
            <p>
                AuthorsKeys: {bookDetails?.authors?.map((authorKey: any) => {
                return authorKey.author ? authorKey.author.key : 'Unknown Author';
            }).join(', ') || 'No authors available'}
            </p>

            <p>Subjects: {bookDetails.subjects.slice(0, 5).join(', ')}</p>
            {bookDetails.description && (
                <p>
                    Description: {
                    typeof bookDetails.description === 'string'
                        ? bookDetails.description.split(/(\[source]|\(\[source])/i)[0]
                        : (bookDetails.description as { value: string }).value.split(/(\[source]|\(\[source])/i)[0]
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