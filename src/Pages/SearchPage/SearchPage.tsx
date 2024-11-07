import React, {ChangeEvent, SyntheticEvent, useState} from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Search from "../../Components/Search/Search";
import ListBookshelf from "../../Components/Bookshelf/ListBookshelf/ListBookshelf";
import BookList from "../../Components/BookList/BookList";
import {BookSearch} from "../../library";
import {searchBooks} from "../../api";

interface Props {}

const SearchPage = (props: Props) => {
    const [search, setSearch] = useState<string>("")
    const [bookshelfValues, setBookshelfValues] = useState<string[]>([]);
    const [searchResult, setSearchResult] = useState<BookSearch[]>([]);
    const [serverError, setServerError] = useState<string>("");

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        // console.log(e);
    };

    const onBookshelfCreate = (e: any) => {
        e.preventDefault();
        const exists = bookshelfValues.find((value) => value === e.target[0].value);
        if (exists) return;
        const updatedBookshelf = [...bookshelfValues, e.target[0].value]
        setBookshelfValues(updatedBookshelf);
    }

    const onBookshelfDelete = (e: any) => {
        e.preventDefault();
        const removed = bookshelfValues.filter((value) => {
            return value !== e.target[0].value;
        });
        setBookshelfValues(removed);
    }

    const onSearchSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const result = await searchBooks(search);
        if (typeof result === "string") {
            setServerError(result);
        } else {
            setSearchResult(result);
        }
        console.log(searchResult);
    };
    
    return (
        <div className="App">
            {serverError && <h1>{serverError}</h1>}
            <Search
                onSearchSubmit={onSearchSubmit}
                search={search}
                handleSearchChange={handleSearchChange}/>
            <ListBookshelf
                bookshelfValues={bookshelfValues}
                onBookshelfDelete={onBookshelfDelete}/>
            <BookList
                searchResults={searchResult}
                onBookshelfCreate={onBookshelfCreate}/>
        </div>
    );
};

export default SearchPage;