import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCarById } from "../../../utils/http-utils/car-requests";
import { CarCard } from "../car-card/CarCard";

export function Car(props) {

	const params = useParams();
	const [car, setCar] = useState(null);

	useEffect(() => {
		console.log(params.id);
		getCarById(params.id).then(response => setCar(response.data));
	}, [params.id])

	return (
		<div className="car">
			<CarCard car={car} />
		</div>
	);
}