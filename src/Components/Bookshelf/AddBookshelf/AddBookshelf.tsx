import React, { SyntheticEvent } from "react";

interface Props {
  title: string;
    onBookshelfCreate: (e: SyntheticEvent) => void;
}

const AddBookshelf = ({onBookshelfCreate, title}: Props) => {
  return (
      <form onSubmit={onBookshelfCreate}>
        <input readOnly={true} hidden={true} value={title} />
        <button
            type="submit"
            className="px-6 py-2 mt-4 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
        >
          Add to Bookshelf
        </button>
      </form>
  );
};

export default AddBookshelf;
