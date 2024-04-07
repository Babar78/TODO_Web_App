'use client'
import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';

const LogoutButton = ({ setShowLogoutModal }) => {

    return (
        <button className="flex gap-3 items-center hover:cursor-pointer hover:bg-gray-100 p-2 rounded-full w-full" onClick={() => setShowLogoutModal(true)} >
            <div className="bg-primary p-2 text-white rounded-full flex items-center justify-center">
                <LogoutIcon />
            </div>
            <span className="text-[16px] font-bold">Logout</span>
        </button >
    )
}

export default LogoutButton