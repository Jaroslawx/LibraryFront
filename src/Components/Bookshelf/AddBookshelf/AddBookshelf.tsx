import React, { SyntheticEvent } from "react";

interface Props {
  title: string;
    onBookshelfCreate: (e: SyntheticEvent) => void;
}

const AddBookshelf = ({onBookshelfCreate, title}: Props) => {
  return <form onSubmit={onBookshelfCreate}>
    <input readOnly={true} hidden={true} value={title}/>
    <button type="submit">Add to Bookshelf</button>
  </form>;
};

export default AddBookshelf;
