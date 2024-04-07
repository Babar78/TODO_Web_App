'use client'
import React from 'react'
import Link from "next/link";
import SpeedIcon from '@mui/icons-material/Speed';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';


const Sidebar = () => {

    const [active, setActive] = React.useState('/');

    React.useEffect(() => {
        setActive(window.location.pathname);
    }, [
        window.location.pathname
    ]);

    return (
        <>
            <div className='space-y-5'>
                <Link href='/' className={`gap-2 flex items-center px-4 py-2 rounded-md ${active == "/" ? 'text-secondary bg-gray-100 font-semibold' : "text-[#bebebe]"}`}>
                    <SpeedIcon />
                    Dashboard
                </Link>
                <Link href='#' className={`gap-2 flex items-center px-4 py-2 rounded-md ${active == "/insights" ? 'text-secondary bg-gray-100 font-semibold' : "text-[#bebebe]"}`}>
                    <TipsAndUpdatesIcon />
                    Insights
                </Link>
            </div>
        </>
    )
}

export default Sidebar