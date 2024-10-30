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
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e);
    };

    const onClick = async (e: SyntheticEvent) => {
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
            <Search onClick={onClick} search={search} handleChange={handleChange} />
            {serverError && <h1>{serverError}</h1>}
            <BookList searchResults={searchResult}/>
        </div>
  );
}

export default App;
