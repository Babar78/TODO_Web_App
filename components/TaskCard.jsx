'use client'
import React, { useState, useEffect } from 'react'
import { MantineProvider, Card, Text, Group, Checkbox, } from '@mantine/core';
import { IconCalendarMonth, IconTrash, IconEdit } from '@tabler/icons-react'
import { createTheme } from '@mantine/core';
import DeleteTaskModal from './DeleteTaskModal';
import LoadingBackdrop from './LoadingBackdrop';


const theme = createTheme({
    cursorType: 'pointer',
});

const TaskCard = (props) => {

    const [deleteTaskModal, setDeleteTaskModal] = useState(false);
    const [loadingOverlay, setLoadingOverlay] = useState(false);

    return (
        <>
            <DeleteTaskModal deleteTaskModal={deleteTaskModal} setDeleteTaskModal={setDeleteTaskModal} loadingOverlay={loadingOverlay} setLoadingOverlay={setLoadingOverlay} taskID={
                props.task._id
            } trigger={props.trigger} setTrigger={props.setTrigger} />
            <LoadingBackdrop loading={loadingOverlay} />
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Group justify="space-between">
                    <div className='space-y-3'>
                        <MantineProvider theme={theme}>
                            <Checkbox
                                defaultChecked
                                color="#A53860"
                                label={props.task.title}
                                size='md'
                                className='font-semibold'
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
                        <IconEdit className='hover:text-secondary cursor-pointer text-[#7a7a7a]' />
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