import firstExcel from '../../data/excelJson/firstExcel.json'
import DynamicTable from "../../pages/dynamicTable";
import {useFetch} from "../../api/dynamicFetchData";
import {dynamicApi} from "../../data/apiUrls/dynamicApi";
import {useEffect} from "react";
import {useState} from "react";

const labels = ["Январь","Февраль", "Март","Апрель", "Май","Июнь", "Июль","Август", "Сентябрь","Октябрь", "Ноябрь", "Декабрь"]


const getApiData = (arrOfNums) => {
    const data = {
        labels,
        datasets: [
            {
                type: 'line',
                label: 'Данные',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
                fill: false,
                data: arrOfNums
            },
        ],
    }
    return data
}
const getMonth = date => {
    return parseInt(date.slice(5, 7)); //2018-12-31
};

const getYear = date => {
    return parseInt(date.slice(0, 5));
};

const convertDateString = date => {
    let dd = date.slice(0, 2); //01.12.2003
    let mm = date.slice(3, 5);
    let yy = date.slice(6, 10);
    return `${yy}-${mm}-${dd}`;
};




export const filterEverything = (segClass, date, period, direction, tables) => {

    let arrOfNums = []

    let filteredArr = firstExcel.filter((item) => {
        let firstDemand = item['SEG_CLASS_CODE'] === segClass['value']
        let thirdDemand = item['DIRECTION'] === direction
        let fourthDemand = null
        if (period['value'] === "1") {
            fourthDemand = true
        } else if (period['value'] === "6") {
            fourthDemand = Math.abs(getMonth(item["SDAT_S"]) - getMonth(convertDateString(date))) <= 6
        } else if (period['value'] === "11") {
            fourthDemand = Math.abs(getMonth(item["SDAT_S"]) - getMonth(convertDateString(date))) <= 1
        }
        if (firstDemand && fourthDemand) { //добавь thirdDemand
            return true
        }
    })

    for (let i = 0; i < filteredArr.length; i++) {
        arrOfNums[i] = filteredArr[i]['PRED_DEMAND']
    }
    const table = getApiData(arrOfNums)
    return table
}


export const config = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Динамика бронирования классов'
        }
    }
}
