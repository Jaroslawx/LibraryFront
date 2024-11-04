// library.d.ts

export interface BookSearch {
    numFound: number;              // Number of books found
    start: number;                 // Starting position in the results
    docs: Book[];                  // List of books
    nextPage?: number;             // Optional number of the next page of results
    previousPage?: number;         // Optional number of the previous page of results
}

export interface Book {
    key: string;                   // Book key in Open Library
    title: string;                 // Book title
    author_name?: string[];        // List of authors of the book
    author_key?: string[];         // Keys of authors in Open Library
    cover?: Cover;                 // Cover image
    subjects?: string[];           // Subjects related to the book
    description?: string;          // Description of the book
}

export interface Cover {
    key: string;                 // Cover key
    small: string;               // Link to small cover image
    medium: string;              // Link to medium cover image
    large: string;               // Link to large cover image
}

export interface BookDetails {
    key: string;                   // Book key in Open Library
    title: string;                 // Book title
    author_name?: string[];        // List of authors of the book
    author_key?: string[];         // Keys of authors in Open Library
    publish_year?: number[];       // Year of publication
    first_publish_year?: number;   // Year of first publication
    isbn?: string[];               // List of ISBNs
    number_of_pages_median?: number; // Median number of pages
    cover?: Cover;                 // Cover image
    subjects?: string[];           // Subjects related to the book
    description?: string;     // Subjects related to the book
    publishers?: string[];           // Publishers of the book
    publish_places?: string[];       // Places of publication
    languages?: { key: string }[];   // Languages the book is available in
    number_of_pages?: number;        // Total number of pages
    created?: { type: string, value: string }; // Creation timestamp
    last_modified?: { type: string, value: string }; // Last modification timestamp
    cover_edition_key?: string;      // Key for the cover edition
}

export interface Author {
    key: string;                 // Author key in Open Library
    name: string;                // Author name
    birth_date?: string;         // Birthdate
    death_date?: string;         // Death date
    top_work?: string;           // Author's top work
    works_count?: number;        // Number of works by the author
}




