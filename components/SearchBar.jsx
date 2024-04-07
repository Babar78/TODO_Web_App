'use client'
import React from 'react'

const SearchBar = () => {
    return (
        <div className="relative shadow-sm rounded-full max-w-[500px]">
            <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </div>
            <input type="search" id="tasks-search-bar" className="rounded-full w-full p-4 ps-14 text-sm text-gray-900 bg-white border border-gray-200 focus:border-primary" placeholder="Search Tasks..." />
        </div>
    )
}

export default SearchBar