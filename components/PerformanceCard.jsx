import React from 'react'
import { Card } from '@mantine/core';
import { Tabs, rem } from '@mantine/core';
import ProgressChart from './ProgressChart';

const PerformanceCard = () => {

    // Get the Weekly Date Range
    const currentDate = new Date();
    const previousWeekDate = new Date(currentDate);
    previousWeekDate.setDate(previousWeekDate.getDate() - 7);

    // Format the dates as required
    const formattedPreviousWeekDate = previousWeekDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    const formattedCurrentDate = currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

    // Concatenate the dates with a hyphen
    const weeklyDateRange = `${formattedPreviousWeekDate} - ${formattedCurrentDate}`;

    return (
        <div className='w-full text-center space-y-2'>
            <h2 className='font-bold text-[24px] text-primary'>My Performance</h2>
            <Card shadow="sm" padding="lg" radius="xl" className='w-full flex justify-center'>
                <Tabs defaultValue="daily" className='space-y-5'>
                    <Tabs.List>
                        <Tabs.Tab value="daily">
                            Daily
                        </Tabs.Tab>
                        <Tabs.Tab value="weekly" >
                            Weekly
                        </Tabs.Tab>
                        <Tabs.Tab value="monthly">
                            Monthly
                        </Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="daily" className='text-secondary space-y-5'>
                        <h3 className='font-bold text-[16px]'>
                            {/* Current Date and Day */}
                            {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                            <br />
                            <span className='text-gray-400 text-[14px]'>(Total Tasks: 05)</span>
                        </h3>

                        <div className='flex justify-between px-4 items-center'>
                            <div className='space-y-2'>
                                <p className='font-bold text-[16px]'>
                                    3{" "}
                                    <span className='text-gray-400'>Completed</span>
                                </p>
                                <p className='font-bold text-[16px]'>
                                    2{" "}
                                    <span className='text-gray-400'>In Progress</span>
                                </p>
                            </div>
                            <ProgressChart />
                        </div>

                    </Tabs.Panel>

                    <Tabs.Panel value="weekly" className='text-secondary space-y-5'>
                        <h3 className='font-bold text-[16px]'>
                            {/* Current Week  with start and end date*/}
                            {weeklyDateRange}
                            <br />
                            <span className='text-gray-400 text-[14px]'>(Total Tasks: 08)</span>
                        </h3>

                        <div className='flex justify-between px-4 items-center'>
                            <div className='space-y-2'>
                                <p className='font-bold text-[16px]'>
                                    5{" "}
                                    <span className='text-gray-400'>Completed</span>
                                </p>
                                <p className='font-bold text-[16px]'>
                                    3{" "}
                                    <span className='text-gray-400'>In Progress</span>
                                </p>
                            </div>
                            <ProgressChart />
                        </div>
                    </Tabs.Panel>

                    <Tabs.Panel value="monthly" className='text-secondary space-y-5'>
                        <h3 className='font-bold text-[16px]'>
                            {/* Current Date and Day */}
                            {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                            <br />
                            <span className='text-gray-400 text-[14px]'>(Total Tasks: 13)</span>
                        </h3>

                        <div className='flex justify-between px-4 items-center'>
                            <div className='space-y-2'>
                                <p className='font-bold text-[16px]'>
                                    10{" "}
                                    <span className='text-gray-400'>Completed</span>
                                </p>
                                <p className='font-bold text-[16px]'>
                                    3{" "}
                                    <span className='text-gray-400'>In Progress</span>
                                </p>
                            </div>
                            <ProgressChart />
                        </div>
                    </Tabs.Panel>
                </Tabs>
            </Card>
        </div>
    )
}

export default PerformanceCard