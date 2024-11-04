import axios from 'axios';
import {Book, BookDetails} from "./library";

interface SearchResponse {
    docs: Book[];
}

export const searchBooks = async (query: string): Promise<Book[] | string>=> {
    try {
        const response= await axios.get<SearchResponse>(
            `https://openlibrary.org/search.json?q=${query}&apikey=${process.env.REACT_APP_OPEN_LIBRARY_API_KEY}`
        );
        return response.data.docs;
    } 
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("error message: ", error.message);
            return error.message;
        }
        else {
            console.log("unexpected error: ", error);
            return "An unexpected error occurred.";
        }
    } 
}

export const getBookDetails = async (query: string) => {
    try {
        const response = await axios.get<{ [key: string]: BookDetails }>(
            `https://openlibrary.org/api/books?bibkeys=OLID:${query}&format=json&jscmd=data`
        );
        const data = response.data[query]; // Access the specific book data using the key
        return data ? data : "Book not found!";
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            console.log("error message from API: ", error.message);
            return error.message;
        } else {
            console.log("unexpected error: ", error);
            return "An unexpected error occurred.";
        }
    }
}