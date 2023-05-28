import { useEffect } from 'react';
import { useState } from 'react';

export const fetchData = async (url) => {
    const result = await fetch(
        url,
        {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            method: 'GET'
        }
    )
    const data = await result.json()
    return data


}
