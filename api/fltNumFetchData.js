
export const fltNumFetchData = async (fltNumApi, class_code, fromDirection, toDirection) => {
    const result = await fetch(
        `${fltNumApi}seg_class_code=${class_code}&sorg=${fromDirection}&sdst=${toDirection}`,
        {
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            method: "GET"
        }
    )

    const data = await result.json()
    console.log(data)

    return data

}