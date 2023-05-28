import { faker } from '@faker-js/faker';

const labels = ["Январь", "Март", "Май", "Июль", "Сентябрь", "Ноябрь"]

export const fourthConfig = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Прогнозирование спроса'
        }
    }
}
export const fourthData = {
    labels,
    datasets: [
        {
            type: 'line',
            label: 'Данные',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
            fill: false,
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        },
        {
            type: 'bar',
            label: 'Данные',
            backgroundColor: 'rgb(75, 192, 192)',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'white',
            borderWidth: 2,
        },
        {
            type: 'bar',
            label: 'Данные',
            backgroundColor: 'rgb(53, 162, 235)',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        },
    ],
    options: {
        title: {
            display: true,
            text: 'Hello'
        }
    }
};
