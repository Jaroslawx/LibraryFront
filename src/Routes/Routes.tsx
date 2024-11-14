import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import BookDetailsPage from "../Pages/BookDetailsPage/BookDetailsPage";
import DesignPage from "../Pages/DesignPage/DesignPage";
import BookShelfPage from "../Pages/BookShelfPage/BookShelfPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "", element: <HomePage /> },
            {path: "search", element: <SearchPage /> },
            {path: "design-guide", element: <DesignPage /> },
            {path: "book/:bookId", element: <BookDetailsPage /> },
            { path: "bookshelf", element: <BookShelfPage /> },
        ]
    }
])