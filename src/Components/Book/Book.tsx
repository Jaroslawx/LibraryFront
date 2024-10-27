import React from "react";

type Props = {};

const Book = (props: Props) => {
  return (
      <div className="card">
          <img 
              src="https://res.cloudinary.com/ggeztrw22/image/upload/v1730045814/Library/books/usdrwx8ghz4cjflzpc0t.jpg" 
              alt="Image" 
          />
          <div className="details">
              <h2>Lord of the Rings</h2>
              <p>J.R.R. Tolkien</p>
          </div>
          <p className="info">
                The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold.
          </p>
      </div>
  );
};

export default Book