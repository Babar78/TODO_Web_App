import React from 'react'
import { DonutChart } from '@mantine/charts';
import { data } from '@/constants/chartsData';

const ProgressChart = () => {
    return (
        <DonutChart data={data} paddingAngle={10} chartLabel="Progress" size={130} />
    )
}

export default ProgressChart