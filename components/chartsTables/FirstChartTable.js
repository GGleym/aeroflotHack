import React, {useContext} from 'react';
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
import {Chart, Line, Bar} from 'react-chartjs-2';
import {ToggleGroup} from "../tables/TogglesGroup";
import {useState} from "react";

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
    const [typeOfChart, setTypeOfChart] = useState('line')

    return (
        <div className={props.className}>
            <Chart data={props.data} options={props.options} type={typeOfChart}/>
            <ToggleGroup setTypeOfChart={setTypeOfChart}/>
        </div>
    )
}
