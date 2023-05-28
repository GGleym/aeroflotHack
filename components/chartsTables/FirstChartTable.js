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
import { Line } from 'react-chartjs-2';
import firstExcel from "../../data/excelJson/firstExcel.json";

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



//1-ая таблица с данными
export const FirstChartTable = (props) => {
    return (
        <div className={props.className}>
            <Line data={props.data} options={props.options}/>
        </div>
    )
}
