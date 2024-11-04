import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {getBookDetails} from "../../api";
import {BookDetails} from "../../library";

interface Props {}

const BookPage = (props: Props) => {
    
    let { ticker } = useParams<{ ticker: string }>();
    const [book, setBook] = useState<BookDetails | null>(null);
    const [error, setError] = useState<string>("");
    
    useEffect(() => {
        const getDetailsInit = async () => {
            const result = await getBookDetails(ticker!);
            if (typeof result !== "string") {
                setBook(result);
            } else {
                setError(result);
            }
        }
        getDetailsInit();
    }, [ticker])
    return (
        <>
            {error && <div>{error}</div>}
            {book ? (
                <div>{book.title}</div>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
};

export default BookPage; 