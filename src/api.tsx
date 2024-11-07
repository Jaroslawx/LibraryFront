import axios from 'axios';
import {AuthorName, BookSearch, BookDetails} from "./library";

interface SearchResponse {
    docs: BookSearch[];
}

export const searchBooks = async (query: string): Promise<BookSearch[] | string>=> {
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

export const getAuthorName = async (authorKey: string): Promise<string[] | null> => {
    try {
        const response = await axios.get<AuthorName>(`https://openlibrary.org${authorKey}.json`);
        if (response.data) {
            return [response.data.personal_name || 'Unknown Author'];
        }
        
        return null;
    } catch (error) {
        console.error('Error fetching author details:', error);
        return null;
    }
};




