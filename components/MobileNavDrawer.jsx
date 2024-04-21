import React from 'react'
import { Drawer } from '@mantine/core';
import UserProfile from './UserProfile';
import { Menu, rem } from '@mantine/core';
import {
    IconSettings,
    IconKey,
    IconDownload,
    IconTrash,
} from '@tabler/icons-react';
import { Avatar } from '@mantine/core';
import SpeedIcon from '@mui/icons-material/Speed';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import LogoutModal from './LogoutModal';
import LogoutButton from './LogoutButton';

const MobileNavDrawer = ({ opened, toggle }) => {

    const [openedDrawer, setOpenedDrawer] = React.useState(opened);
    const [showLogoutModal, setShowLogoutModal] = React.useState(false);

    React.useEffect(() => {
        setOpenedDrawer(opened)
    }
        , [opened])

    return (
        <>
            <Drawer opened={openedDrawer} onClose={toggle} className='relative md:hidden'>
                <LogoutModal showLogoutModal={showLogoutModal} setShowLogoutModal={setShowLogoutModal} />
                <div className='h-full'>
                    <div className='userprofile flex flex-col justify-center items-center gap-1'>
                        <Avatar src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png" alt="user profile" className='cursor-pointer' />
                        <div className='space-y-0 text-center'>
                            <p className='font-semibold text-[16px]'>Hi, Babar</p>
                            <p className='text-gray-400 text-[12px]'>Software Engineer</p>
                        </div>
                    </div>
                    <div className='space-y-5 mt-5'>
                        <div>
                            <Menu classNames='flex flex-col gap-2' id='web-pages'>
                                <Menu.Label>
                                    Web Pages
                                </Menu.Label>
                                <Menu.Item leftSection={<SpeedIcon style={{ width: rem(14), height: rem(14) }} />}>
                                    Dashboard
                                </Menu.Item>
                                <Menu.Item leftSection={<TipsAndUpdatesIcon style={{ width: rem(14), height: rem(14) }} />} mt={'xs'}>
                                    Insights
                                </Menu.Item>
                            </Menu>
                        </div>
                        <div>
                            <Menu classNames='flex flex-col gap-2' id='account'>
                                <Menu.Label>
                                    Account
                                </Menu.Label>
                                <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
                                    Account Settings
                                </Menu.Item>
                                <Menu.Item leftSection={<IconKey style={{ width: rem(14), height: rem(14) }} />} mt={'xs'}>
                                    Change Password
                                </Menu.Item>
                                <Menu.Item leftSection={<IconDownload style={{ width: rem(14), height: rem(14) }} />} mt={'xs'}>
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
                            </Menu>
                        </div>
                    </div>
                </div>
                <div className='mt-auto absolute bottom-[60px] left-[50%] -translate-x-1/2'>
                    <LogoutButton setShowLogoutModal={setShowLogoutModal} />
                </div>
            </Drawer>
        </>
    )
}

export default MobileNavDrawer