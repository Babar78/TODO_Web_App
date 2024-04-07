'use client'
import React from 'react'
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import LogoutIcon from '@mui/icons-material/Logout';

const LogoutButton = () => {

    const router = useRouter();

    const handleLogout = () => {
        Cookies.remove('token');
        router.push('/login');
    }

    return (
        <button className="flex gap-3 items-center hover:cursor-pointer hover:bg-gray-100 p-2 rounded-full w-full" onClick={handleLogout} >
            <div className="bg-primary p-2 text-white rounded-full flex items-center justify-center">
                <LogoutIcon />
            </div>
            <span className="text-[16px] font-bold">Logout</span>
        </button >
    )
}

export default LogoutButton