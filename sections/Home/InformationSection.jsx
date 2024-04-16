import React from 'react'
import CalendarCard from '@/components/CalendarCard';
import UserProfile from '@/components/UserProfile';
import PerformanceCard from '@/components/PerformanceCard';

const InformationSection = () => {
    return (
        <section className='space-y-14 flex flex-col items-center px-20'>
            <UserProfile />
            <CalendarCard />
            {/* <PerformanceCard /> */}
        </section>
    )
}

export default InformationSection