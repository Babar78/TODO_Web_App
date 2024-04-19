'use client'
import SearchBar from '@/components/SearchBar'
import NotificationIcon from '@/components/NotificationIcon';
import React, { useState, useEffect } from 'react'
import CustomButton from '@/components/CustomButton';
import TaskCard from '@/components/TaskCard';
import AddTaskModal from '@/components/AddTaskModal';


const TasksSection = () => {

    const [addTaskModal, setAddTaskModal] = useState(false);
    const [tasks, setTasks] = React.useState([]);
    const [trigger, setTrigger] = useState(false);


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

                <div className='mt-10 space-y-2 max-h-[600px] overflow-hidden'>
                    {
                        tasks.map((task, index) => (
                            <TaskCard key={index} task={task} trigger={trigger} setTrigger={setTrigger} />
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default TasksSection