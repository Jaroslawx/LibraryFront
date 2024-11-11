import axios from 'axios';
import {AuthorName, BookSearch, BookDetails} from "./library";

interface SearchResponse {
    docs: BookSearch[];
}

interface Edition {
    publish_date?: string;
    key: string;
}

interface EditionsResponse {
    entries: Edition[];
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

export const getPublishDate = async (workId: string): Promise<string | null> => {
    try {
        {
            const response = await axios.get<EditionsResponse>(
                `https://openlibrary.org/works/${workId}/editions.json`
            );

            // Extract all publish dates and filter out any undefined/null values
            const publishDates = response.data.entries
                .map(entry => entry.publish_date)
                .filter(date => date !== undefined && date !== null);

            // Sort dates to find the oldest one, using a fallback to handle undefined values
            publishDates.sort((a, b) => new Date(a || "").getTime() - new Date(b || "").getTime());

            // Return the oldest date or null if no dates are found
            return publishDates[0] || null;
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Error fetching editions:", error.message);
            return null;
        } else {
            console.error("Unexpected error:", error);
            return null;
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




