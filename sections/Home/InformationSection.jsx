import React from 'react'
import CustomCalendar from '@/components/CustomCalendar';
import UserProfile from '@/components/UserProfile';

const InformationSection = () => {
    return (
        <section className='space-y-20 flex flex-col items-center px-20'>
            <UserProfile />
            <CustomCalendar />
        </section>
    )
}

export default InformationSection