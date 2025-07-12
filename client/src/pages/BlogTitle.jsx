import React, { useState } from 'react';
import { Sparkles, Hash } from 'lucide-react';

const BlogTitle = () => {
    // State to hold the value of the keyword input field
    const [keyword, setKeyword] = useState('');

    // Array of categories and state to track the selected one
    const categories = ['General', 'Technology', 'Business', 'Health', 'Lifestyle', 'Education', 'Travel', 'Food'];
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    // Form submission handler
    const onSubmitHandler = (e) => {
        e.preventDefault();
        // Here you would typically send the data to an API
        console.log('Generating titles for keyword:', keyword);
        console.log('Selected category:', selectedCategory);
        // You can add logic to show generated titles in the right column here
    };

    return (
        <div className="flex flex-col md:flex-row gap-6 p-4 md:p-8 bg-gray-100 min-h-screen">

            {/* Left Column: AI Title Generator */}
            <form onSubmit={onSubmitHandler} className="w-full h-full max-w-lg p-6 bg-white rounded-xl shadow-lg">

                <div className="flex items-center gap-2 text-lg font-semibold mb-6">
                    <Sparkles className="w-6 h-6 text-purple-600" />
                    <h1 className="text-xl">AI Title Generator</h1>
                </div>

                <label htmlFor="keyword" className="block text-gray-600 mb-2 font-medium">Keyword</label>
                <input
                    required
                    type="text"
                    id="keyword"
                    placeholder="The future of artificial intelligence"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    className="w-full p-2 px-4 mt-2 outline-none border border-gray-300 text-sm rounded-md"
                />


                <p className='mt-6 text-sm font-medium'  > Category</p>
                <div className="flex flex-wrap gap-2 mb-8 mt-4">
                    {categories.map((category) => (
                        <button
                            type="button"
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium border
                                ${selectedCategory === category
                                    ? 'bg-blue-100 text-blue-700 border-blue-300'
                                    : 'text-gray-600 bg-gray-100 border-gray-300 hover:border-gray-400'
                                }
                            `}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 mt-6 text-white
                    px-4 py-2 rounded-lg text-sm cursor-pointer bg-gradient-to-r from-[#C341F6] to-[#8E37EB] "
                >
                    <Hash className="w-5 h-5" />
                    Generate title
                </button>

            </form>

            {/* Right Column: Generated titles */}
            <div className="w-full md:w-1/2 overflow-y-auto p-6 bg-white rounded-xl shadow-lg flex flex-col max-h-[500px]">

                <div className="flex items-center gap-2 text-lg font-semibold mb-6">
                    <Hash className="w-5 h-5 text-[#8E37EB]" />
                    <h2 className="text-xl">Generated titles</h2>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center text-center text-gray-400">
                    <Hash className="w-20 h-20 text-gray-300" />
                    <p className="mt-4 text-sm max-w-sm">Enter keywords and click “Generate Titles” to get started</p>
                </div>
            </div>
        </div>
    );
};

export default BlogTitle;