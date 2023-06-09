export const getAllData = (data, demand) => {
    let arrOfData = []
    for (let i = 0; i < data.length; i++) {
        arrOfData[i] = data[i][demand]
    }
    return arrOfData
}
