import React, {useState} from "react";
import { FaBook, FaBookmark, FaCheck, FaBan } from 'react-icons/fa';

interface Props {}

const BookShelfPage = (props: Props) => {
    const [activeTab, setActiveTab] = useState('planToRead');

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className="bookshelf-container p-8 bg-gray-100 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h1 className="text-3xl font-semibold text-center mb-6">My Bookshelf</h1>

            <div className="tabs flex justify-center space-x-4 mb-8">
                <button
                    onClick={() => handleTabChange('planToRead')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm md:text-base transition-colors duration-200 ${
                        activeTab === 'planToRead' ? 'bg-purple-500 text-white' : 'bg-white text-purple-500 border border-purple-500'
                    }`}
                >
                    <FaBookmark/>
                    Plan to Read
                </button>
                <button
                    onClick={() => handleTabChange('currentlyReading')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm md:text-base transition-colors duration-200 ${
                        activeTab === 'currentlyReading' ? 'bg-green-500 text-white' : 'bg-white text-green-500 border border-green-500'
                    }`}
                >
                    <FaBook/>
                    Currently Reading
                </button>
                <button
                    onClick={() => handleTabChange('read')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm md:text-base transition-colors duration-200 ${
                        activeTab === 'read' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border border-blue-500'
                    }`}
                >
                    <FaCheck/>
                    Read
                </button>
                <button
                    onClick={() => handleTabChange('neverRead')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm md:text-base transition-colors duration-200 ${
                        activeTab === 'neverRead' ? 'bg-red-500 text-white' : 'bg-white text-red-500 border border-red-500'
                    }`}
                >
                    <FaBan/>
                    Never Read
                </button>
            </div>

            <div className="tab-content text-center p-6 bg-white rounded-lg shadow-md">
                {activeTab === 'planToRead' && <div className="text-gray-700">Books you plan to read.</div>}
                {activeTab === 'currentlyReading' &&
                    <div className="text-gray-700">Books you are currently reading.</div>}
                {activeTab === 'read' && <div className="text-gray-700">Books you have read.</div>}
                {activeTab === 'neverRead' && <div className="text-gray-700">Books you never plan to read.</div>}
            </div>
            
            {/* in the future */}
            {/*<div className="tab-content text-center p-6 bg-white rounded-lg shadow-md">*/}
            {/*    {activeTab === 'planToRead' && <PlanToReadBooks/>}*/}
            {/*    {activeTab === 'currentlyReading' && <CurrentlyReadingBooks/>}*/}
            {/*    {activeTab === 'read' && <ReadBooks/>}*/}
            {/*    {activeTab === 'neverRead' && <NeverReadBooks/>}*/}
            {/*</div>*/}
        </div>
    );
};

export default BookShelfPage; 
