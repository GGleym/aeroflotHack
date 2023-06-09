import {invertDateString} from "../chartsData/firstTableData";
export const getAllDates = (dates, findDate) => {
    let arrOfDates = []
    for (let i = 0; i < dates.length; i++) {
        arrOfDates[i] = invertDateString(dates[i][findDate])
    }
    return arrOfDates
}