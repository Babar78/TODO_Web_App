'use client'
import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { Calendar } from '@mantine/dates';
import { Card } from '@mantine/core';

const CalendarCard = () => {
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        // Set today's date as the default selected date when the component mounts
        setSelected([dayjs().toDate()]);
    }, []);

    const handleSelect = (date) => {
        const isSelected = selected.some((s) => dayjs(date).isSame(s, 'date'));
        if (isSelected) {
            setSelected((current) => current.filter((d) => !dayjs(d).isSame(date, 'date')));
        } else if (selected.length < 1) {
            setSelected((current) => [...current, date]);
        }
    };

    return (
        <Card shadow="sm" padding="lg" radius="xl" className='w-full flex justify-center'>
            <Calendar
                className='m-auto'
                getDayProps={(date) => ({
                    selected: selected.some((s) => dayjs(date).isSame(s, 'date')),
                    onClick: () => handleSelect(date),
                })}
            />
        </Card>
    );
};

export default CalendarCard;
