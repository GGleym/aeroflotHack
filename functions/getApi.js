
export const sendRequest = (method, url, body = null) => {
    return fetch(url).then(response => response.json())
}
