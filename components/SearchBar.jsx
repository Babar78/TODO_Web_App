'use client'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    return (
        <div className="relative shadow-sm rounded-full max-w-[500px] flex-grow h-fit">
            <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none text-gray-500 dark:text-gray-400">
                <SearchIcon />
            </div>
            <input type="search" id="tasks-search-bar" className="rounded-full w-full p-4 ps-14 text-sm text-gray-900 bg-white border border-gray-200 focus:border-primary" placeholder="Search Tasks..." />
        </div>
    )
}

export default SearchBar