import React from 'react'
import { Card, Text, Group, Checkbox } from '@mantine/core';
import { IconCalendarMonth, IconTrash, IconEdit } from '@tabler/icons-react'

const TaskCard = (props) => {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Group justify="space-between">
                <div className='space-y-3'>
                    <Checkbox
                        defaultChecked
                        color="#A53860"
                        label={props.task.title}
                        size='md'
                        className='font-semibold'
                    />
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
                    <IconTrash className='hover:text-secondary cursor-pointer text-[#7a7a7a]' />
                </div>
            </Group>
        </Card>
    )
}

export default TaskCard