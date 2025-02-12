import React, {useEffect, useState} from "react";
import { useParams} from "react-router";
import {getAuthorName, getPublishDate, getWorkDetails} from "../../api";
import {BookDetails} from "../../library";
import book from "../../Components/Book/Book";
import Spinner from "../../Components/Spinner/Spinner";
import RelatedAuthorBooks from "../../Components/RelatedAuthorBooks/RelatedAuthorBooks";

interface Props {}

const BookDetailsPage = (props: Props) => {
    const { bookId } = useParams<{ bookId: string }>();
    const [bookDetails, setBookDetails] = useState<BookDetails | null>(null);
    const [authorKeys, setAuthorKeys] = useState<string[]>([]);
    const [authorNames, setAuthorNames] = useState<string[]>([]);
    const [publishDate, setPublishDate] = useState<string | null>(null);

    // Get book details
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
                            console.log('authorObj:', authorObj);
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
    
    // Get author names
    useEffect(() => {
        const fetchAuthorNames = async () => {
            try {
                const names = await Promise.all(
                    authorKeys.map(async (authorKey) => {
                        const authorNames = await getAuthorName(authorKey);
                        
                        if (authorNames) {
                            return authorNames;
                        }
                        return ['Unknown Author'];
                    })
                );

                setAuthorNames(names.flat());

            } catch (error) {
                console.error('Error fetching author names:', error);
            }
        };

        if (authorKeys.length > 0) {
            fetchAuthorNames();
        }
    }, [authorKeys]);
    
    // Get publish date
    useEffect(() => {
        const fetchPublishDate = async () => {
            try {
                const date = await getPublishDate(bookId as string);
                if (date) {
                    setPublishDate(date);
                }
            } catch (error) {
                console.error('Error fetching publish date:', error);
            }
        };

        fetchPublishDate();
    });
    
    if (!bookDetails) return <Spinner />;
    if (bookDetails) {
        // console.log(bookDetails);
        // console.log(publishDate);
        // console.log(authorKeys);
        // console.log(authorNames);
    }
    
    return ( 
        <>
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
                {/* Title */}
                <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">{bookDetails.title}</h1>
    
                {/* Book Info (Left side) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="flex flex-col">
                        {/* Authors */}
                        <p className="text-lg text-gray-700 mb-3">
                            <strong>Authors:</strong> {authorNames.length > 0 ? authorNames.join(', ') : 'No authors available'}
                        </p>
    
                        {/* Publish Date */}
                        <p className="text-lg text-gray-700 mb-3">
                            <strong>Publish Date:</strong> {publishDate || 'Not available'}
                        </p>
    
                        {/* Subjects */}
                        <p className="text-lg text-gray-700 mb-3">
                            <strong>Subjects:</strong>
                            {bookDetails.subjects && bookDetails.subjects.length > 0
                                ? bookDetails.subjects.slice(0, 5).join(', ')
                                : 'No subjects available'}
                        </p>
                    </div>

                    {/* Book Cover (Right side) */}
                    {bookDetails.covers && bookDetails.covers.length > 0 && (
                        <div className="flex justify-center items-center">
                            <img
                                src={`https://covers.openlibrary.org/b/id/${bookDetails.covers[0]}-L.jpg`}
                                alt={`Cover of ${bookDetails.title}`}
                                className="rounded-lg shadow-md w-48 h-auto"
                            />
                        </div>
                    )}
                </div>
    
                {/* Description */}
                {bookDetails.description && (
                    <p className="text-lg text-gray-600 mb-3">
                        <strong>Description:</strong> {
                        typeof bookDetails.description === 'string'
                            ? bookDetails.description.split(/(\[source]|\(\[source])/i)[0]
                            : (bookDetails.description as { value: string }).value.split(/(\[source]|\(\[source])/i)[0]
                    }
                    </p>
                )}
            </div>
            <RelatedAuthorBooks authorKey={authorKeys[0]} />
        </>
    );
};

export default BookDetailsPage; 