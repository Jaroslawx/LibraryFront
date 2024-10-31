import './App.css';
import BookList from "./Components/BookList/BookList";
import Search from "./Components/Search/Search";
import {ChangeEvent, SyntheticEvent, useState} from "react";
import {Book} from "./library";
import {searchBooks} from "./api";
import ListBookshelf from "./Components/Bookshelf/ListBookshelf/ListBookshelf";

function App() {
    const [search, setSearch] = useState<string>("")
    const [bookshelfValues, setBookshelfValues] = useState<string[]>([]); // ["wantToRead", "currentlyReading"
    const [searchResult, setSearchResult] = useState<Book[]>([]);
    const [serverError, setServerError] = useState<string>("");
    
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e);
    };
    
    const onBookshelfCreate = (e: any) => {
        e.preventDefault();
        const exists = bookshelfValues.find((value) => value === e.target[0].value);
        if (exists) return;
        const updatedBookshelf = [...bookshelfValues, e.target[0].value]
        setBookshelfValues(updatedBookshelf);
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
            <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange} />
            <ListBookshelf bookshelfValues={bookshelfValues}/>
            <BookList searchResults={searchResult} onBookshelfCreate={onBookshelfCreate}/>
        </div>
  );
}

export default App;
