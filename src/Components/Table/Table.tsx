import React from "react";
import { testBookData } from "./testData";

const data = testBookData;

interface Props {}

type Book = (typeof data)[0];

const configs = [
    {
        key: "title",
        header: "Title",
        render: (book: Book) => book.title,
    },
    {
        key: "author_name",
        header: "Author",
        render: (book: Book) => book.author_name || "Unknown",
    },
    {
        key: "subjects",
        header: "Genre",
        render: (book: Book) => book.subjects || "Unknown",
    },
    {
        key: "publish_year",
        header: "Year",
        render: (book: Book) => book.publish_year || "N/A",
    },
];

const Table = (props: Props) => {
    const renderedHeaders = configs.map((config: any) => {
        return (
            <th key={config.key} className="px-4 py-2 border-b">
                {config.header}
            </th>
        );
    });
    
    const renderedRows = data.map((book, index) => {
        return (
            <tr key={index} className="hover:bg-gray-100">
                {configs.map((config) => {
                    return (
                        <td key={config.key} className="px-4 py-2 border-b">
                            {config.render(book)}
                        </td>
                    );
                })}
            </tr>
        );
    });

    return (
        <div className="p-4">
            <table className="min-w-full bg-white shadow-md rounded-lg">
                <thead>
                    <tr className="bg-gray-200 text-left">
                        {renderedHeaders}
                    </tr>
                </thead>
                <tbody>
                    {renderedRows}
                </tbody>
            </table>
        </div>
    );
};

export default Table; 
