// library.d.ts
export interface BookSearch {
    key: string;
    title: string;
    author_name?: string[];
    author_key?: string[];
    cover_i?: string;
    subjects?: string[];
}

export interface BookDetails {
    key: string;
    title: string;
    authors?: Author[];
    subjects: string[];
    description?: string | { value: string };
    covers?: number[];
}

export interface Author {
    author: {
        key: string;
    };
}

export interface AuthorName {
    personal_name: string;
}
