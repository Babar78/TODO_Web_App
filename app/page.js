'use client'
import React, { useState, useEffect } from 'react';
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import LogoutButton from "@/components/LogoutButton";
import Sidebar from "@/components/Sidebar";

import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import LogoutModal from '@/components/LogoutModal';

import { toast } from 'react-toastify';
import jwt from 'jsonwebtoken'

export default function Home() {

  const router = useRouter()
  const token = Cookies.get('token');

  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showSessionExpiredModal, setShowSessionExpiredModal] = useState(false);

  // Redirect to login page if token is not present
  useEffect(() => {
    if (!token) {
      router.replace('/login')
    }
  }, [token])

  return (
    <>
      <LogoutModal showLogoutModal={showLogoutModal} setShowLogoutModal={setShowLogoutModal} />
      <section className='flex gap-10'>
        <div className='w-fit p-10 shadow-sm border-r-[0.5px] border-gray-100 h-screen flex flex-col justify-between'>
          <div className="h-[55px] flex items-center">
            <Image
              src={'/assets/logo/logo.png'}
              width={150}
              height={100}
              alt='logo'
            />
          </div>
          <div className="flex-grow my-20">
            <Sidebar />
          </div>
          <LogoutButton setShowLogoutModal={setShowLogoutModal} />
        </div>

        <div className='flex-grow p-10 grid grid-cols-5'>
          <div className="col-span-3">
            <SearchBar />
          </div>
          <div className="col-span-2"></div>

        </div>

      </section >
    </>
  );

}