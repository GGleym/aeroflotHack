import firstExcel from "../../data/excelJson/firstExcel.json";

export const getClass = () => {
    let mapOfClass = new Map();
    let filteredClassArr = [];
    for (let i = 0; i < firstExcel.length; i++) {
        if (!mapOfClass.get(firstExcel[i]['SEG_CLASS_CODE'])) {
            mapOfClass.set(firstExcel[i]['SEG_CLASS_CODE'], 0);
        }
    }

    for (let j = 0; j < [...mapOfClass.keys()].length; j++) {
        filteredClassArr[j] = {
            value: [...mapOfClass.keys()][j],
            label: [...mapOfClass.keys()][j]
        };
    }

    return filteredClassArr;
};
