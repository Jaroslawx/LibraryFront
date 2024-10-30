import axios from 'axios';
import {BookSearch} from "./library";

interface SearchResponse {
    data: BookSearch[];
}

export const searchBooks = async (query: string)=> {
    try {
        const data= await axios.get<SearchResponse>(
            `https://openlibrary.org/search.json?q=${query}&apikey=${process.env.REACT_APP_OPEN_LIBRARY_API_KEY}`
        );
        return data;
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