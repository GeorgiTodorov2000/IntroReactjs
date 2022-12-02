import axios from 'axios';

const apiUrl = 'http://localhost:3005/cars';

export function getAllCars() {
    return axios.get(apiUrl);
}

export function getCarById(id) {
    return axios.get(`${apiUrl}/${id}`);
}

export function deleteCar(id) {
    return axios.delete(`${apiUrl}/${id}`);
}

export function saveCar(car) {
    if (!car.picture)
        car.picture = `https://picsum.photos/200/300?random=${Math.random()}`;

    if (car.id) {
        return axios.put(`${apiUrl}/${car.id}`, car);
    }

    return axios.post(`${apiUrl}`, car);
}

export async function registerCar(car) {
    /* Leaving this in case we add "this car model already exists" etc*/
    return saveCar(car);
}