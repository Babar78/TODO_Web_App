'use client'
import React from 'react'
import Link from "next/link";
import SpeedIcon from '@mui/icons-material/Speed';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { usePathname } from 'next/navigation'


const Sidebar = () => {

    const pathname = usePathname()
    const [active, setActive] = React.useState('/');

    React.useEffect(() => {
        setActive(
            pathname
        );
    }, [
        pathname
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