import React from "react";
import { testBookData } from "./testData";
import book from "../Book/Book";

const data = testBookData;

interface Props {}

type Book = (typeof data)[0];

const configs = [
    {
        key: "title",
        header: "Title"
    },
    {
        key: "author",
        header: "Author"
    },
    {
        key: "genre",
        header: "Genre"
    }
]


const Table = (props: Props) => {
    const renderedHeaders = configs.map((config: any) => {
        return (
            <th
                key={config.label}
            >
                {config.header}
            </th>
        );
    });
    
    const renderedRows = data.map((book) => {
        return (
            <tr>
                {configs.map((val: any) => {
                    return (
                        <td>
                            {val.render(book)}
                        </td>
                    );
                })}
            </tr>
        );
    });
    
    return (
        <div>
            <table>
                <thead>
                    {renderedHeaders}
                </thead>
                <tbody>
                    {renderedRows}
                </tbody>
            </table>
        </div>
    );
};

export default Table; 
