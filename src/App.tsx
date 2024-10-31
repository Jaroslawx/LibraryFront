import './App.css';
import BookList from "./Components/BookList/BookList";
import Search from "./Components/Search/Search";
import {ChangeEvent, SyntheticEvent, useState} from "react";
import {Book} from "./library";
import {searchBooks} from "./api";

function App() {
    const [search, setSearch] = useState<string>("")
    const [searchResult, setSearchResult] = useState<Book[]>([]);
    const [serverError, setServerError] = useState<string>("");
    
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e);
    };
    
    const onBookshelfCreate = (e: SyntheticEvent) => {
        e.preventDefault();
        console.log(e)
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
            <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange} />
            {serverError && <h1>{serverError}</h1>}
            <BookList searchResults={searchResult} onBookshelfCreate={onBookshelfCreate}/>
        </div>
  );
}

export default App;
