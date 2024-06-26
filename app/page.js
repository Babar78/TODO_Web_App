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
import SessionNotification from '@/components/SessionNotification';
import TasksSection from '@/sections/Home/TasksSection';
import InformationSection from '@/sections/Home/InformationSection';

export default function Home() {

  const router = useRouter()
  const token = Cookies.get('token');

  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showSessionExpireNotification, setShowSessionExpireNotification] = useState(false);


  // Verify the token after every 5 minutes
  useEffect(() => {
    if (!token) {
      router.replace('/login');
      return; // Exit early if there's no token
    }

    // Function to check token expiration
    const checkTokenExpiration = () => {
      const decoded = jwt.decode(token);

      // If 1 minute is left before token expiration, show session expiration modal
      if (decoded.exp - Math.floor(Date.now() / 1000) <= 60) {
        setShowSessionExpireNotification(true);
      }

      if (decoded.exp < Math.floor(Date.now() / 1000)) {
        toast.error('Session Expired! Please login again.', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        Cookies.remove('token');
        router.replace('/login'); // Redirect to login screen when token expires
      }
    };

    // Check token expiration immediately when component mounts or token changes
    checkTokenExpiration();

    // Set up interval to check token expiration every 55 minutes
    const interval = setInterval(() => {
      checkTokenExpiration();
    }, 55 * 60 * 1000);

    // Clean up interval when component unmounts or when token changes
    return () => clearInterval(interval);
  }, [token, router]);


  return (
    <>
      <LogoutModal showLogoutModal={showLogoutModal} setShowLogoutModal={setShowLogoutModal} />
      <SessionNotification showSessionExpireNotification={showSessionExpireNotification} setShowSessionExpireNotification={setShowSessionExpireNotification} />
      <section className='flex gap-10'>
        <div className='w-fit p-10 shadow-sm border-r-[0.5px] border-gray-100 h-screen flex-col justify-between lg:flex hidden'>
          <div className="h-[55px] flex items-center">
            <Image
              src={'/assets/logo/logo.png'}
              width={150}
              height={100}
              alt='logo'
              priority
              className='w-auto h-10'
            />
          </div>
          <div className="flex-grow my-20">
            <Sidebar />
          </div>
          <LogoutButton setShowLogoutModal={setShowLogoutModal} />
        </div>

        <div className='flex-grow lg:p-10 min-[450px]:px-10 px-5 min-[450px]:pb-10 pb-5 xl:flex'>
          <div className="flex-grow">
            <TasksSection />
          </div>
          <div className="w-[500px] min-w-fit xl:block hidden">
            <InformationSection />
          </div>

        </div>

      </section >
    </>
  );

}