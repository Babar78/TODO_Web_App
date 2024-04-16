'use client'
import React from 'react'
import { Modal, TextInput, Textarea } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import CustomButton from './CustomButton';
import { useForm } from '@mantine/form';

const AddTaskModal = ({ addTaskModal, setAddTaskModal }) => {


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
        console.log('Task Title', values)
    }


    return (
        <Modal opened={addTaskModal} onClose={() => setAddTaskModal(false)} title="Add New Task" centered padding={'xl'} radius={'xl'} size={'auto'} id='addTaskModal'>
            <form onSubmit={form.onSubmit(handleAddTask)}>
                <TextInput label="Task Title" placeholder="Enter Task Title" className='min-[500px]:w-[500px] w-[300px]' {
                    ...form.getInputProps('title')
                } />
                <DateInput defaultValue={new Date()} label="Date" mt={'md'} disabled />
                <Textarea label="Task Description" placeholder="Enter Comment..." mt={'md'} mb={'lg'} {
                    ...form.getInputProps('description')
                } />
                <CustomButton title="Add Task" bgColor="secondary" textColor="white" fullWidth={true} buttonType={'submit'} />
            </form>
        </Modal>
    )
}

export default AddTaskModal