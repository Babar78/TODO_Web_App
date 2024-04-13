import SearchBar from '@/components/SearchBar'
import NotificationIcon from '@/components/NotificationIcon';
import React from 'react'
import { Card, Image, Text, Badge, Button, Group, Checkbox } from '@mantine/core';
import CustomButton from '@/components/CustomButton';

import { IconMessageCircle, IconCalendarMonth, IconTrash, IconEdit } from '@tabler/icons-react'

const TasksSection = () => {
    return (
        <section className='flex flex-col'>
            <div className="flex justify-between items-center h-fit">
                <SearchBar />
                <NotificationIcon />
            </div>
            <div className="grid grid-cols-7 gap-10 mt-10 text-secondary">
                <div className='space-y-8 col-span-5'>
                    <h1 className="lg:text-4xl text-2xl font-extrabold">Organize and Manage Your Tasks with <span className='text-primary'>TaskTrek</span></h1>
                    <CustomButton
                        title={'Add New Task'}
                        bgColor={'primary'}
                        textColor={'white'}
                        roundedClass={'rounded-full'}
                        scaleAnimation={true}
                        onClick={() => { console.log('Add New Task Clicked') }}
                    />
                </div>


            </div>

            <div className='mt-10'>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Group justify="space-between">
                        <div className='space-y-3'>
                            <Checkbox
                                defaultChecked
                                color="#A53860"
                                label="Finish User Authentication"
                                size='md'
                                className='font-semibold'
                            />
                            <Group ml={'30px'}>
                                <Group gap={"xs"} className='text-[#7A7A7A]'>
                                    <IconCalendarMonth />
                                    <Text size="sm">12th August, 2021</Text>
                                </Group>
                                <Group gap={"xs"} className='text-[#7A7A7A]'>
                                    <IconMessageCircle />
                                    <Text size="sm">01</Text>
                                </Group>

                            </Group>
                        </div>
                        <div className='flex gap-5 w-fit'>
                            <IconEdit className='hover:text-secondary cursor-pointer text-[#7a7a7a]' />
                            <IconTrash className='hover:text-secondary cursor-pointer text-[#7a7a7a]' />
                        </div>
                    </Group>
                </Card>
            </div>
        </section>
    )
}

export default TasksSection