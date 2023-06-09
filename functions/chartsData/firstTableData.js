
const getApiData = (mapOfDates) => {
    const labels = [...mapOfDates.keys()]

    const data = {
        labels,
        datasets: [
            {
                label: 'Данные',
                borderColor: '#da291c',
                borderWidth: 2,
                fill: 'start',
                backgroundColor: 'hsla(225, 100%, 29%, 0.4)',
                data: [...mapOfDates.values()],
                tension: 0.4
            },
        ],
    }
    return data
}

export const convertDateString = date => {
    let dd = date.slice(0, 2); //01.12.2003
    let mm = date.slice(3, 5);
    let yy = date.slice(6, 10);
    return `${yy}-${mm}-${dd}`;
};

export const invertDateString = date => {
    let dd = date.slice(8,10) //2020-12-31
    let mm = date.slice(5,7)
    let yy = date.slice(0,4)
    return `${dd}.${mm}.${yy}`
}


export const filterEverything = (filteredArr, dateTable, demand) => {
    let mapOfDates = new Map()

    for (let i = 0; i < filteredArr.length; i++) {
        if (!mapOfDates.get(filteredArr[i][dateTable])) {
            mapOfDates.set(
                invertDateString(filteredArr[i][dateTable]), parseFloat(filteredArr[i][demand])
            )
        }

    }

    const table = getApiData(mapOfDates)
    return table
}


export const config = {
    bezierCurve: 'true',
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Динамика бронирования классов'
        }
    }
}
