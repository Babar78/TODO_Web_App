import React, { useState } from 'react'
import { Modal, Group } from '@mantine/core';
import { toast } from 'react-toastify';
import CustomButton from './CustomButton';

const DeleteTaskModal = ({ taskID, deleteTaskModal, setDeleteTaskModal, loadingOverlay, setLoadingOverlay, trigger, setTrigger }) => {
    const handleDeleteTask = async () => {
        setLoadingOverlay(true);
        try {
            const res = await fetch('/api/deleteTask', {
                method: 'DELETE',
                body: JSON.stringify({ taskID: taskID }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (res.ok) {
                const data = await res.json();
                toast.success(data.message, {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                setTrigger(!trigger);
                setLoadingOverlay(false);
                setDeleteTaskModal(false);
            } else {
                console.error('Error deleting task:', res.status);
                toast.error('An Error Occoured while deleting the task!', {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                setLoadingOverlay(false);
                setDeleteTaskModal(false);
            }
        } catch (err) {
            console.error('Error deleting task:', err);
            toast.error('An Error Occoured while deleting the task!', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            setLoadingOverlay(false);
            setDeleteTaskModal(false);
        }
    }

    return (
        <Modal opened={deleteTaskModal} onClose={
            loadingOverlay ? () => { } : () => setDeleteTaskModal(false)
        } title="Delete Task" padding={'xl'} radius={'xl'} centered id='deleteTaskModal' pos='relative'>
            <p className='text-[#7A7A7A] mb-[32px] text-[16px]'>
                Are you sure you want to delete this task?
            </p>
            <Group justify="flex-end">
                <CustomButton
                    title={'Cancel'}
                    bgColor={'bg-[#7A7A7A]'}
                    textColor={'white'}
                    buttonType={'button'}
                    onClick={() => { setDeleteTaskModal(false) }}
                />
                <CustomButton
                    title={'Delete'}
                    bgColor={'bg-secondary'}
                    textColor={'white'}
                    buttonType={'button'}
                    onClick={handleDeleteTask}
                />
            </Group>

        </Modal>
    )
}

export default DeleteTaskModal