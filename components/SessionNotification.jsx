import { Notification } from '@mantine/core';

import React from 'react'

const SessionNotification = (props) => {

    console.log(props.showSessionExpireNotification);

    return (
        <div className={`absolute z-10 bottom-10 right-10 ${props.showSessionExpireNotification ? 'block' : 'hidden'}`} >
            <Notification title="Session Expiry" closeButtonProps={{ 'aria-label': 'Hide notification' }} color="red" size="sm" shadow="xs" transition="slide" icon={<div>⚠️</div>
            } onClose={() => props.setShowSessionExpireNotification(false)}>
                Your session is about to expire in about 1 minute.<br />Please save your work and refresh the page.
            </Notification>
        </div>
    )
}

export default SessionNotification