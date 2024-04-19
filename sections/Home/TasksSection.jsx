'use client'
import SearchBar from '@/components/SearchBar'
import NotificationIcon from '@/components/NotificationIcon';
import React, { useState } from 'react'
import CustomButton from '@/components/CustomButton';
import TaskCard from '@/components/TaskCard';
import AddTaskModal from '@/components/AddTaskModal';
import { Tabs, rem, Pagination } from '@mantine/core';
import { IconCheckbox, IconBrandDatabricks } from '@tabler/icons-react';

const TasksSection = () => {

    // Tabs Icons
    const iconStyle = { width: rem(16), height: rem(16) };

    const [addTaskModal, setAddTaskModal] = useState(false);
    const [tasks, setTasks] = React.useState([]);
    const [trigger, setTrigger] = useState(false);

    // Pagination
    const [activePage, setPage] = React.useState(1);

    // Fetch all tasks
    React.useEffect(() => {
        const fetchTasks = async () => {
            try {
                const res = await fetch('/api/fetchAllTasks', {
                    method: 'GET',
                });
                if (res.ok) {
                    const data = await res.json();
                    setTasks(data);
                } else {
                    console.error('Error fetching tasks:', res.status);
                }
            } catch (err) {
                console.error('Error fetching tasks:', err);
            }
        };
        fetchTasks();
    }, [
        trigger
    ]);


    // Filter tasks based on taskStatus
    const todoTasks = tasks.filter(task => task.taskStatus === "pending");
    const completedTasks = tasks.filter(task => task.taskStatus === "completed");

    return (
        <>
            <AddTaskModal addTaskModal={addTaskModal} setAddTaskModal={setAddTaskModal} setTrigger={setTrigger} trigger={trigger} />

            <section className='flex flex-col'>
                <div className="flex justify-between items-center h-fit">
                    <SearchBar />
                    <NotificationIcon />
                </div>
                <div className="mt-10 text-secondary space-y-8">
                    <h1 className="lg:text-4xl text-2xl font-extrabold md:w-[80%]" style={{
                        lineHeight: "150%"
                    }}>Organize and Manage Your Tasks with <span className='text-primary'>TaskTrek</span></h1>
                    <CustomButton
                        title={'Add New Task'}
                        bgColor={'bg-primary'}
                        textColor={'white'}
                        roundedClass={'rounded-full'}
                        scaleAnimation={true}
                        onClick={() => { setAddTaskModal(true) }}
                    />
                </div>

                <div className='mt-10'>
                    <Tabs defaultValue="todo" className='pt-2' color='#a53860'>
                        <Tabs.List>
                            <Tabs.Tab value="todo" leftSection={<IconBrandDatabricks style={iconStyle} />}>
                                To-Do
                            </Tabs.Tab>
                            <Tabs.Tab value="completed" leftSection={<IconCheckbox style={iconStyle} />}>
                                Completed Tasks
                            </Tabs.Tab>

                        </Tabs.List>

                        <Tabs.Panel value="todo" className='h-[500px] overflow-hidden flex flex-col justify-between items-center'>
                            <div className='space-y-2 w-full'>
                                {
                                    todoTasks
                                        .slice((activePage - 1) * 4, activePage * 4) // Slice the tasks array based on the current page and 3 items per page
                                        .map((task, index) => (
                                            <TaskCard key={index} task={task} trigger={trigger} setTrigger={setTrigger} />
                                        ))
                                }
                            </div>
                            {
                                todoTasks.length > 4 && <Pagination total={Math.ceil(tasks.length / 4)} value={activePage} onChange={setPage} mt="sm" color='#A53860' />
                            }
                        </Tabs.Panel>

                        <Tabs.Panel value="completed" className='h-[500px] overflow-hidden flex flex-col justify-between items-center'>
                            <div className='space-y-2 w-full'>
                                {

                                    completedTasks.slice((activePage - 1) * 4, activePage * 4) // Slice the tasks array based on the current page and 3 items per page
                                        .map((task, index) => (
                                            <TaskCard key={index} task={task} trigger={trigger} setTrigger={setTrigger} />
                                        ))
                                }
                            </div>
                            {
                                completedTasks.length > 4 && <Pagination total={Math.ceil(tasks.length / 4)} value={activePage} onChange={setPage} mt="sm" color='#A53860' />
                            }
                        </Tabs.Panel>


                    </Tabs>

                </div>
            </section>
        </>
    )
}

export default TasksSection