import React from 'react'
import { Modal, TextInput, Textarea } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import CustomButton from './CustomButton';
import { useForm } from '@mantine/form';
import { toast } from 'react-toastify';

const EditTaskModal = ({
    editTaskModal, setEditTaskModal, task, trigger, setTrigger, loadingOverlay, setLoadingOverlay
}) => {


    const form = useForm({
        initialValues: {
            title: task.title,
            updateTaskDate: new Date(task.creationDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
            description: task.description
        },
        validate: {
            title: (value) => value.length > 0 ? null : 'Task Title is required',
        }
    })


    const handleEditTask = async (values) => {
        setLoadingOverlay(true);
        try {
            const res = await fetch(
                '/api/updateTask',
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ ...values, taskID: task._id })
                }
            );
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
                setEditTaskModal(false);
            } else {
                console.error('Error updating task:', res.status);
                toast.error('An Error Occoured while updating the task!', {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                setLoadingOverlay(false);
                setEditTaskModal(false);
            }
        }
        catch (err) {
            console.error('Error updating task:', err);
            toast.error('An Error Occoured while updating the task!', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            setLoadingOverlay(false);
            setEditTaskModal(false);
        }
    }

    return (
        <Modal opened={editTaskModal} onClose={
            loadingOverlay ? () => { } : () => setEditTaskModal(false)
        } title="Edit Task" padding={'xl'} radius={'lg'} centered id='editTaskModal' pos='relative'>

            <form onSubmit={form.onSubmit(handleEditTask)}>

                <TextInput label="Task Title" placeholder="Enter Task Title" {
                    ...form.getInputProps('title')
                } />
                <TextInput label="Date" mt={'md'} disabled {
                    ...form.getInputProps('updateTaskDate')
                } />
                <Textarea label="Task Description" placeholder="Enter Comment..." mt={'md'} mb={'lg'} {
                    ...form.getInputProps('description')
                } />
                <CustomButton title="Update Task" textColor="white" fullWidth={true} buttonType={'submit'} />
            </form>

        </Modal>
    )
}

export default EditTaskModal