// library.d.ts
export interface Book {
    key: string;
    title: string;
    author_name?: string[];
    author_key?: string[];
    cover?: Cover;
    subjects?: string[];
    description?: string;
}

interface BookDetails {
    key: string;
    title: string;
    authors?: { key: string }[];
    subjects: string[];
    description?: string | { value: string };
    cover?: { large: string };
}

export interface Author {
    personal_name: string;
}

export interface Cover {
    key: string;
    small: string;
    medium: string;
    large: string;
}
