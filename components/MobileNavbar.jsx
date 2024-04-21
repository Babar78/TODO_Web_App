'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import UserProfile from './UserProfile'
import { Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';

import SpeedIcon from '@mui/icons-material/Speed';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { usePathname } from 'next/navigation';
import MobileNavDropdown from './MobileNavDrawer';
import MobileNavDrawer from './MobileNavDrawer';

const MobileNavbar = () => {
    const [opened, { toggle }] = useDisclosure();

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
        <nav className='lg:hidden block min-[450px]:p-10 p-5 relative z-[10]'>
            <MobileNavDrawer opened={opened} toggle={toggle} />
            <ul className='flex gap-10 justify-between items-center'>
                <li>
                    <Image
                        src={'/assets/logo/logo.png'}
                        width={150}
                        height={100}
                        alt='logo'
                        priority
                        className='w-auto h-10'
                    />
                </li>
                <li className='md:flex gap-5 hidden'>
                    <Link href='/' className={`gap-2 flex items-center ${active == "/" ? 'text-secondary border-b-[1px] border-secondary font-semibold' : "text-[#7A7A7A]"}`}>
                        Dashboard
                    </Link>
                    <Link href='#' className={`gap-2 flex items-center ${active == "/insights" ? 'text-secondary border-b-[1px] border-secondary font-semibold' : "text-[#7A7A7A]"}`}>
                        Insights
                    </Link>
                </li>
                <li className='md:block hidden'>
                    <UserProfile />
                </li>
                <li className='md:hidden block'>
                    <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />
                </li>
            </ul>
        </nav>
    )
}

export default MobileNavbar