'use client'
import React from 'react'
import { Modal, Button, Group, Text, } from '@mantine/core';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

const SessionModal = (props) => {

    return (
        <Modal opened={props.showSessionExpiredModal} onClose={() => props.setShowSessionExpiredModal(false)} withCloseButton={false} centered>
            <Text>Your Session is about to Expire. <br />
            </Text>
            <Group position="left" mt='md'>
                <Button style={{
                    backgroundColor: '#162A3A',
                    color: 'white'
                }} variant="filled" onClick={() => {
                    Cookies.remove('token');
                    props.setShowSessionExpiredModal(false);
                    // Logout logic here
                }}>Extend</Button>
                <Button style={{
                    backgroundColor: '#A53860',
                    color: 'white'
                }} variant="filled"
                    onClick={() => {
                        Cookies.remove('token');
                        props.setShowSessionExpiredModal(false);
                        // Logout logic here
                    }}>Logout</Button>
            </Group>
        </Modal>
    )
}

export default SessionModal