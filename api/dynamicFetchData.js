import { useEffect } from 'react';
import { useState } from 'react';

// export const useFetch = (url) => {
//     const [data, setData] = useState()
//     const [loading, setLoading] = useState()
//     const [error, setError] = useState()
//
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const result = await fetch(
//                     url,
//                     {
//                         headers: {
//                             "Content-type": 'application/json',
//                             "Accept": 'application/json'
//                         },
//                         method: "GET",
//                     }
//                 )
//                 const data = await result.json()
//                 setData(data)
//                 setLoading(false)
//             } catch (err) {
//                 console.log(err)
//                 setError(err)
//             }
//         }
//         fetchData().then((data) => setData(data.json()))
//
//     }, url)
//
//     return {
//         data,
//         loading,
//         error
//     }
// }


export const dynamicFetchData = (url) => {
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState()

    useEffect(() => {
        try {
            const result = async () => {
                const response = await fetch(url)
                const data = await response.json()
                setData(data)
                setLoading(false)
            }
            result()
        } catch (err) {
            setError(err)
            console.log(err)
        }
    }, [url])

    return {
        data,
        error
    }

}