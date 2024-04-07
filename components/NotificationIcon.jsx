import React from 'react'
import { Avatar, Indicator } from '@mantine/core';
import NotificationsIcon from '@mui/icons-material/Notifications';

const NotificationIcon = () => {

    // To control the visibility of the notification dot 
    // import { useDisclosure } from '@mantine/hooks';
    // const [visible, { toggle }] = useDisclosure();
    // <Indicator inline disabled={!visible} color="red" size={12}>

    return (
        <Indicator inline processing color="red" size={12} offset={7} withBorder>
            <NotificationsIcon className='text-[32px] cursor-pointer' />
        </Indicator>
    )
}

export default NotificationIcon