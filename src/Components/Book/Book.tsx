import React, { SyntheticEvent } from "react";
import "./Book.css";
import { BookSearch } from "../../library";
import AddBookshelf from "../Bookshelf/AddBookshelf/AddBookshelf";
import {Link} from "react-router-dom";

interface Props {
    id: string;
    searchResult: BookSearch;
    onBookshelfCreate: (e: SyntheticEvent) => void;
}

const Book: React.FC<Props> = ({ id, searchResult, onBookshelfCreate }: Props) : JSX.Element => {
    return (
        <div className="book w-60 p-4 m-3 bg-lightBlue rounded-lg shadow-card transition-transform transform hover:-translate-y-1 hover:shadow-lg">
            <Link
                to={`/book/${id.replace("/works/", "")}`}
                className="text-lg font-semibold text-grayDark mb-2"
            >
                {searchResult.cover_i && (
                    <img
                        src={`https://covers.openlibrary.org/b/id/${searchResult.cover_i}.jpg`}
                        alt={`Cover of ${searchResult.title}`}
                        className="w-full h-auto rounded-md mb-3"
                    />
                )}
                <div className="details text-center">
                    {/* eg. id = /works/OL82563W */}
                        {searchResult.title}
                    
                    {searchResult.author_name && (
                        <p className="text-sm text-grayDark">{searchResult.author_name.join(", ")}</p>
                    )}
                </div>
            </Link>
            <AddBookshelf onBookshelfCreate={onBookshelfCreate} title={searchResult.title} />
        </div>
    );
};

export default Book