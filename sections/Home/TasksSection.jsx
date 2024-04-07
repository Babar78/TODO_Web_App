import SearchBar from '@/components/SearchBar'
import NotificationIcon from '@/components/NotificationIcon';
import SettingsIcon from '@mui/icons-material/Settings';
import React from 'react'

const TasksSection = () => {
    return (
        <section className="flex justify-between items-center h-fit">
            <SearchBar />
            <NotificationIcon />
        </section>
    )
}

export default TasksSection