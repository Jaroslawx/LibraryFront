import React, { SyntheticEvent } from "react";
import "./Book.css";
import { Book as BookType } from "../../library";
import AddBookshelf from "../Bookshelf/AddBookshelf/AddBookshelf";
import {Link} from "react-router-dom";

interface Props {
    id: string;
    searchResult: BookType;
    onBookshelfCreate: (e: SyntheticEvent) => void;
}

const Book: React.FC<Props> = ({ id, searchResult, onBookshelfCreate }: Props) : JSX.Element => {
    return (
        <div className="book w-60 p-4 m-3 bg-lightBlue rounded-lg shadow-card transition-transform transform hover:-translate-y-1 hover:shadow-lg">
            {searchResult.cover?.large && (
                <img
                    src={searchResult.cover.large}
                    alt={`Cover of ${searchResult.title}`}
                    className="w-full h-auto rounded-md mb-3"
                />
            )}
            <div className="details text-center">
                {/* eg. id = /works/OL82563W */}
                <Link to={`/book/${id.replace("/works/", "")}`} className="text-lg font-semibold text-grayDark mb-2">{searchResult.title}</Link>
                {searchResult.author_name && (
                    <p className="text-sm text-grayDark">{searchResult.author_name.join(", ")}</p>
                )}
            </div>
            {searchResult.description && (
                <p className="info text-sm text-gray-600 mt-3 text-center">{searchResult.description}</p>
            )}
            <AddBookshelf onBookshelfCreate={onBookshelfCreate} title={searchResult.title} />
        </div>
    );
};

export default Book