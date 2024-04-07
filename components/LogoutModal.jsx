import React from 'react'
import { Modal, Button, Group, Text, } from '@mantine/core';
import Cookies from 'js-cookie';

const LogoutModal = (props) => {
    return (
        <Modal opened={props.showLogoutModal} onClose={() => props.setShowLogoutModal(false)} title="Logout Confirmation" centered>
            <Text>Are you sure you want to logout?</Text>
            <Group position="left" mt='md'>
                <Button style={{
                    backgroundColor: '#bebebe',
                    color: 'black'
                }} variant="filled" onClick={() => props.setShowLogoutModal(false)}>Cancel</Button>
                <Button style={{
                    backgroundColor: '#162A3A',
                    color: 'white'
                }} variant="filled"
                    onClick={() => {
                        Cookies.remove('token');
                        props.setShowLogoutModal(false);
                        // Logout logic here
                    }}>Logout</Button>
            </Group>
        </Modal>
    )
}

export default LogoutModal