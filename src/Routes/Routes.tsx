import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import BookPage from "../Pages/BookPage/BookPage";
import DesignPage from "../Pages/DesignPage/DesignPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "", element: <HomePage /> },
            {path: "search", element: <SearchPage /> },
            {path: "design-guide", element: <DesignPage /> },
            {path: "book/:bookId", element: <BookPage /> },
        ]
    }
])