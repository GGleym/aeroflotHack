export const transpiler = data => {
    let options = [];
    for (let i = 0; i < data.length; i++) {
        options[i] = {
            value: data[i]['label'],
            label: data[i]['name']
        };
    }
    return options;
};
