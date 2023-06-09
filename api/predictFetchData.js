export const predictFetchData = async (
    url,
    dateOfBooking,
    period,
    classOfBooking,
    fromDirection,
    toDirection,
    fltNum
) => {
    let response;

    const result = await fetch(
        `${url}startDate=${dateOfBooking}&period=${period}&seg_class_code=${classOfBooking}&sorg=${fromDirection}&sdst=${toDirection}&flt_num=${fltNum}`,
        {
            headers: {
                "Content-type": 'application/json',
                "Accept": 'application/json'
            },
            method: 'GET'
        }
    );
    const data = await result.json();
    console.log(data)
    if (result.ok) {
        response = true
    } else {
        console.log('There is a trouble on the server...')
    }

    return [data, response];
};
