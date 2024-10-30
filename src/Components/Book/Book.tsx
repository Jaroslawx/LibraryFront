import React from "react";
import "./Book.css";
import { Book as BookType } from "../../library";

interface Props {
    id: string;
    searchResult: BookType;
}

const Book: React.FC<Props> = ({ id, searchResult }: Props) : JSX.Element => {
  return (
      <div className="book">
          {searchResult.cover?.large && (
              <img
                  src={searchResult.cover.large}
                  alt={`Cover of ${searchResult.title}`}
              />
          )}
          <div className="details">
              <h2>{searchResult.title}</h2>
              {searchResult.author_name && (
                  <p>{searchResult.author_name.join(", ")}</p>
              )}
          </div>
          {searchResult.description && (
              <p className="info">{searchResult.description}</p>
          )}
      </div>
  );
};

export default Book