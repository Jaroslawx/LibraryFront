import './App.css';
import BookList from "./Components/BookList/BookList";
import Search from "./Components/Search/Search";
import {ChangeEvent, SyntheticEvent, useState} from "react";
import {BookSearch} from "./library";
import {searchBooks} from "./api";

function App() {
    const [search, setSearch] = useState<string>("")
    const [searchResults, setSearchResults] = useState<BookSearch[]>([]);
    const [serverError, setServerError] = useState<string>("");
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e);
    };

    const onClick = async (e: SyntheticEvent) => {
        const result = await searchBooks(search);
        if (typeof result == "string") {
            setServerError(result);
        } else if (Array.isArray(result.data)) {
            setSearchResults(result.data);
        }
        console.log(searchResults);
    };
    
    return (
        <div className="App">
            <Search onClick={onClick} search={search} handleChange={handleChange} />
            <BookList />
        </div>
  );
}

export default App;
