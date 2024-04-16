import React from 'react'
import { Card, Image, Text, Badge, Button, Group, Checkbox } from '@mantine/core';
import { IconMessageCircle, IconCalendarMonth, IconTrash, IconEdit } from '@tabler/icons-react'

const TaskCard = () => {
    return (
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
    )
}

export default TaskCard