'use client'
import React, { useState } from 'react'
import { LoadingOverlay, Modal, TextInput, Textarea } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import CustomButton from './CustomButton';
import { useForm } from '@mantine/form';
import { toast } from 'react-toastify';

const AddTaskModal = ({ addTaskModal, setAddTaskModal, setTrigger, trigger }) => {

    const [loadingOverlay, setLoadingOverlay] = useState(false);

    const form = useForm({
        initialValues: {
            title: '',
            creationDate: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            description: ''
        },
        validate: {
            title: (value) => value.length > 0 ? null : 'Task Title is required',
        }
    })


    const handleAddTask = async (values) => {
        // Add Task Logic Here
        setLoadingOverlay(true);

        try {
            const res = await fetch(
                '/api/createTask',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(values)
                }
            );

            if (res.ok) {
                setLoadingOverlay(false);
                setAddTaskModal(false);
                // Change the trigger value to update the tasks list on parent element
                setTrigger(!trigger);
                // This will update the tasks list with the new task
                toast.success('Task Added Successfully!', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                // Reset the values of form
                form.reset({ title: '', description: '' });
            }
            else {
                setLoadingOverlay(false);
                toast.error('An Error Occoured while adding the Task!', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
        }
        catch (err) {
            console.log('Error Adding Task', err);
        }
    }


    return (
        <Modal opened={addTaskModal} onClose={
            loadingOverlay ? () => { } : () => setAddTaskModal(false)
        } title="Add New Task" centered padding={'xl'} radius={'xl'} size={'auto'} id='addTaskModal' pos='relative' withCloseButton={false}>
            <LoadingOverlay visible={loadingOverlay} loaderProps={{ children: 'Adding your Task...' }} />
            <form onSubmit={form.onSubmit(handleAddTask)}>
                <TextInput label="Task Title" placeholder="Enter Task Title" className='min-[500px]:w-[500px] w-[300px]' {
                    ...form.getInputProps('title')
                } />
                <DateInput defaultValue={new Date()} label="Date" mt={'md'} disabled />
                <Textarea label="Task Description" placeholder="Enter Comment..." mt={'md'} mb={'lg'} {
                    ...form.getInputProps('description')
                } />
                <CustomButton title="Add Task" textColor="white" fullWidth={true} buttonType={'submit'} />
            </form>
        </Modal>
    )
}

export default AddTaskModal