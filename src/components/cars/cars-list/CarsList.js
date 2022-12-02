import { useEffect, useState } from "react";
import { deleteCar, getAllCars } from "../../../utils/http-utils/car-requests";
import { CarCard } from "../car-card/CarCard";

export function CarsList() {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        getAllCars().then(response => {
            setCars(response.data);
        });
    }, []);

    const deleteCarHandler = async (id) => {
        await deleteCar(id);
        setCars(pervState => {
            return pervState.filter(car => car.id != id);
        });
    }

    return (
        <div className="cars-list-wrapper">
            {cars.map(car => <CarCard key={car.id} car={car} deleteCar={deleteCarHandler}/>)}
        </div>
    );
}