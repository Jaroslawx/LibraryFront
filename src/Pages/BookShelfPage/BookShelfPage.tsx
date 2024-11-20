import React, { useState } from "react";
import {
    FaBook,
    FaBookmark,
    FaCheck,
    FaBan,
    FaPauseCircle,
    FaTrashAlt,
} from "react-icons/fa";

interface Tab {
    key: string;
    label: string;
    icon: React.ReactNode;
    description: string;
}

const tabs: Tab[] = [
    { key: "planToRead", label: "Plan to Read", icon: <FaBookmark />, description: "Books you plan to read." },
    { key: "currentlyReading", label: "Currently Reading", icon: <FaBook />, description: "Books you are currently reading." },
    { key: "completed", label: "Completed", icon: <FaCheck />, description: "Books you have completed." },
    { key: "onHold", label: "On Hold", icon: <FaPauseCircle />, description: "Books you have put on hold." },
    { key: "dropped", label: "Dropped", icon: <FaTrashAlt />, description: "Books you have dropped." },
    { key: "notInterested", label: "Not Interested", icon: <FaBan />, description: "Books you are not interested in." },
];

const BookShelfPage = () => {
    const [activeTab, setActiveTab] = useState("planToRead");

    return (
        <div className="bookshelf-container p-8 bg-gray-100 rounded-lg shadow-lg max-w-4xl mx-auto mt-3">
            <h1 className="text-3xl font-semibold text-center mb-6">My Bookshelf</h1>

            <div className="tabs flex flex-wrap justify-center gap-4 mb-8">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm md:text-base transition-colors duration-200 ${
                            activeTab === tab.key
                                ? "bg-purple-500 text-white"
                                : "bg-white text-purple-500 border border-purple-500"
                        }`}
                    >
                        {tab.icon}
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="tab-content text-center p-6 bg-white rounded-lg shadow-md">
                {tabs
                    .filter((tab) => tab.key === activeTab)
                    .map((tab) => (
                        <div key={tab.key} className="text-gray-700">
                            {tab.description}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default BookShelfPage;
