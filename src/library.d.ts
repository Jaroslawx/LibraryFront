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

interface BookDetails {
    title: string;
    authors: { name: string }[];
    publish_date: string;
    subjects: string[];
    description?: string | { value: string };
    cover?: { large: string };
}

export interface Author {
    key: string;                 // Author key in Open Library
    name: string;                // Author name
    birth_date?: string;         // Birthdate
    death_date?: string;         // Death date
    top_work?: string;           // Author's top work
    works_count?: number;        // Number of works by the author
}




