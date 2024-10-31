import React, {SyntheticEvent} from "react";

interface Props {
    onBookshelfDelete: (e: SyntheticEvent) => void;
    bookshelfValue: string;
}

const DeleteBookshelf = ({onBookshelfDelete, bookshelfValue}: Props) => {
    return (
        <div>
            <form onSubmit={onBookshelfDelete}>
                <input hidden={true} value={bookshelfValue} />
                <button>x</button>
            </form>
        </div>
    );
};

export default DeleteBookshelf;