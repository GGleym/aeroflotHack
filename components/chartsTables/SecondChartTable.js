import React, {useContext} from 'react';
import {
    Chart as ChartJS,
    registerables
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import {ToggleGroup} from "../tables/TogglesGroup";
import {useState} from "react";

ChartJS.register(
    ...registerables
);


//вторая таблица с данными
export const SecondChartTable = (props) => {
    const [typeOfChart, setTypeOfChart] = useState('line')

    return (
        <div className={props.className}>
            <Chart data={props.data} type={typeOfChart} options={props.options}/>
            <ToggleGroup setTypeOfChart={setTypeOfChart}/>
        </div>
    )
}
