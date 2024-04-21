import React from 'react'
import { Avatar } from '@mantine/core';
import { Menu, rem } from '@mantine/core';
import {
    IconSettings,
    IconKey,
    IconDownload,
    IconTrash,
} from '@tabler/icons-react';

const UserProfile = () => {
    return (
        <div className='h-[55px] flex justify-center items-center gap-2'>
            <Menu shadow="md" width={200}>
                <Menu.Target>
                    <Avatar src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png" alt="user profile" className='cursor-pointer' />
                </Menu.Target>

                <Menu.Dropdown>
                    <Menu.Label>
                        Account
                    </Menu.Label>
                    <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
                        Account Settings
                    </Menu.Item>
                    <Menu.Item leftSection={<IconKey style={{ width: rem(14), height: rem(14) }} />}>
                        Change Password
                    </Menu.Item>
                    <Menu.Item leftSection={<IconDownload style={{ width: rem(14), height: rem(14) }} />}>
                        Download Report
                    </Menu.Item>

                    <Menu.Divider />

                    <Menu.Label>Danger zone</Menu.Label>
                    <Menu.Item
                        color="red"
                        leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}
                    >
                        Delete Account
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
            <div className='space-y-0'>
                <p className='font-semibold text-[16px]'>Hi, Babar</p>
                <p className='text-gray-400 text-[12px]'>Software Engineer</p>
            </div>
        </div>
    )
}

export default UserProfile