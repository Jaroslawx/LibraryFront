import React from "react";
import "./Book.css";

interface Props {
    title: string;
    author: string;
    description: string;
}

const Book = ({ title, author, description}: Props) => {
  return (
      <div className="book">
          <img 
              src="https://res.cloudinary.com/ggeztrw22/image/upload/v1730045814/Library/books/usdrwx8ghz4cjflzpc0t.jpg" 
              alt="Book Cover" 
          />
          <div className="details">
              <h2>{title}</h2>
              <p>{author}</p>
          </div>
          <p className="info">
              {description}
          </p>
      </div>
  );
};

export default Book