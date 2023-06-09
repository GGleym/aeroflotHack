export const checkForDirection = (toDirection, fromDirection) => {
    if (toDirection['value'] === fromDirection['value']) {
        console.log(toDirection['value'], fromDirection['value'])
        return true
    }
}