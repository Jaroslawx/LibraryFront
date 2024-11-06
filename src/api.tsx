import axios from 'axios';
import {Author, Book, BookDetails} from "./library";

interface SearchResponse {
    docs: Book[];
}

export const searchBooks = async (query: string): Promise<Book[] | string>=> {
    try {
        const response= await axios.get<SearchResponse>(
            `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
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

export const getWorkDetails = async (workId: string): Promise<BookDetails | string> => {
    try {
        const response = await axios.get<BookDetails>(
            `https://openlibrary.org/works/${workId}.json`
        );
        return response.data;
        
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Error message from API:", error.message);
            throw new Error(error.message);
        } else {
            console.error("Unexpected error:", error);
            throw new Error("An unexpected error occurred.");
        }
    }
}

export const getAuthorName = async (authorKey: string): Promise<Author | null> => {
    try {
        const response = await axios.get<Author>(
            `https://openlibrary.org${authorKey}.json`
        );
        return response.data;
        
    } catch (error) {
        console.error('Error fetching author details:', error);
        return null;
    }
};



