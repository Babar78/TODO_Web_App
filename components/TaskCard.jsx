'use client'
import React, { useState } from 'react'
import { MantineProvider, Card, Text, Group, Checkbox, } from '@mantine/core';
import { IconCalendarMonth, IconTrash, IconEdit } from '@tabler/icons-react'
import { createTheme } from '@mantine/core';
import EditTaskModal from './EditTaskModal';
import DeleteTaskModal from './DeleteTaskModal';
import LoadingBackdrop from './LoadingBackdrop';
import { toast } from 'react-toastify';


const theme = createTheme({
    cursorType: 'pointer',
});

const TaskCard = (props) => {

    const [deleteTaskModal, setDeleteTaskModal] = useState(false);
    const [editTaskModal, setEditTaskModal] = useState(false);
    const [loadingOverlay, setLoadingOverlay] = useState(false);
    const [taskStatus, setTaskStatus] = useState(props.task.taskStatus);

    console.log(taskStatus);


    const handleTaskStatusChange = async () => {
        try {
            const response = await fetch(`/api/completeTask/`, {
                method: 'PUT',
                body: JSON.stringify({ taskID: props.task._id, taskStatus: props.task.taskStatus === 'pending' ? 'completed' : 'pending' }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                props.setTrigger(!props.trigger);
                {
                    props.task.taskStatus === 'pending' ? toast.success('Task Completed Successfully!', {
                        position: "bottom-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    }) : toast.success('Task marked as Pending!', {
                        position: "bottom-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    });
                }
            } else {
                console.error('Error completing task:', res.status);
                toast.error('An Error Occoured while updating Task Status!', {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });

            }
        } catch (error) {
            console.error(error);
            toast.error('An Error Occoured while updating Task Status!', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    }

    return (
        <>
            <LoadingBackdrop loading={loadingOverlay} />

            <DeleteTaskModal deleteTaskModal={deleteTaskModal} setDeleteTaskModal={setDeleteTaskModal} loadingOverlay={loadingOverlay} setLoadingOverlay={setLoadingOverlay} taskID={
                props.task._id
            } trigger={props.trigger} setTrigger={props.setTrigger} />

            <EditTaskModal editTaskModal={editTaskModal} setEditTaskModal={setEditTaskModal} loadingOverlay={loadingOverlay} setLoadingOverlay={setLoadingOverlay} task={props.task} trigger={props.trigger} setTrigger={props.setTrigger} />

            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Group justify="space-between">
                    <div className='space-y-3'>
                        <MantineProvider theme={theme}>
                            <Checkbox
                                checked={taskStatus === 'pending' ? false : true}
                                onChange={() => { setTaskStatus(taskStatus === 'pending' ? 'completed' : 'pending'), handleTaskStatusChange() }}
                                color="#A53860"
                                label={props.task.title}
                                size='md'
                                className={`font-semibold ${taskStatus === 'completed' ? 'line-through' : ''}`}
                            />
                        </MantineProvider>
                        <Group gap={"xs"} className='text-[#7A7A7A]' ml={'30px'}>
                            <IconCalendarMonth />
                            <Text size="sm">{new Date(props.task.creationDate).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}</Text>
                        </Group>
                    </div>
                    <div className='flex gap-5 w-fit'>
                        <IconEdit className='hover:text-secondary cursor-pointer text-[#7a7a7a]'
                            onClick={
                                () => setEditTaskModal(true)
                            }
                        />
                        <IconTrash className='hover:text-secondary cursor-pointer text-[#7a7a7a]' onClick={
                            () => setDeleteTaskModal(true)
                        } />
                    </div>
                </Group>
            </Card>
        </>
    )
}

export default TaskCard