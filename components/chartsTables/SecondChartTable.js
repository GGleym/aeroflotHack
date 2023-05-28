import React from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Title,
    Tooltip,
    LineController,
    BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Title,
    Tooltip,
    LineController,
    BarController
);



//вторая таблица с данными
export const SecondChartTable = (props) => {
    return (
        <div className={props.className}>
            <Chart data={props.data} type={'bar'} options={props.options}/>
        </div>
    )
}
