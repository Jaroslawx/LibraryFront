import React, {useEffect, useState} from "react";
import { useParams} from "react-router";
import {getAuthorName, getWorkDetails} from "../../api";
import {BookDetails} from "../../library";

interface Props {}

const BookPage = (props: Props) => {
    const { bookId } = useParams<{ bookId: string }>();
    const [bookDetails, setBookDetails] = useState<BookDetails | null>(null);
    const [authorKeys, setAuthorKeys] = useState<string[]>([]);
    const [authorNames, setAuthorNames] = useState<string[]>([]);

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
    
    // Get author names
    useEffect(() => {
        const fetchAuthorNames = async () => {
            try {
                const names = await Promise.all(
                    authorKeys.map(async (authorKey) => {
                        const authorNames = await getAuthorName(authorKey);

                        // Jeśli otrzymamy tablicę imion, zwrócimy je
                        if (authorNames) {
                            return authorNames; // Zwracamy tablicę imion
                        }
                        return ['Unknown Author']; // Domyślnie, jeśli nie ma imienia
                    })
                );

                // Ustawiamy wszystkie imiona autorów w stanie
                setAuthorNames(names.flat()); // Używamy .flat() do spłaszczenia tablicy

            } catch (error) {
                console.error('Error fetching author names:', error);
            }
        };

        if (authorKeys.length > 0) {
            fetchAuthorNames();
        }
    }, [authorKeys]);
    
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
            
            {/*<p>*/}
            {/*    AuthorsKeys: {bookDetails?.authors?.map((authorKey: any) => {*/}
            {/*    return authorKey.author ? authorKey.author.key : 'Unknown Author';*/}
            {/*    }).join(', ') || 'No authors available'}*/}
            {/*</p>*/}

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