import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './CarForm.scss';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCarById, saveCar } from '../../../utils/http-utils/car-requests';

export function CarForm() {

    const navigate = useNavigate();
    const params = useParams();

    const [car, setCar] = useState({
        type: '',
        brand: '',
        model: '',
        constructionYear: '',
        fuelType: '',
        seats: '',
        picture: '',
        pricePerDay: '',
        count:''
    });

    useEffect(() => {
        if (params.id) {
            getCarById(params.id).then(response => {
                setCar(response.data);
            });
        }
    }, [params.id])

    const onFormSubmit = (event) => {
        event.preventDefault();

        saveCar(car).then(() => {
            console.log('Success');
            navigate('/cars-list');
        });
    }

    const onInputChange = (event) => {
        let value = event.target.value;
        setCar((prevState) => {
            return {
                ...prevState,
                [event.target.name]: value
            }
        })
    }

    return (
        <div className="car-form-wrapper">
            <Form onSubmit={onFormSubmit}>
                <Row>
                    <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Type</Form.Label>
                    <Form.Control type="text" placeholder="Enter type" name="type" value={car.type} onChange={onInputChange} />
                    </Form.Group></Col>
                    <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Brand</Form.Label>
                    <Form.Control type="text" placeholder="Enter brand" name="brand" value={car.brand} onChange={onInputChange} />
                    </Form.Group></Col>
                    <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Model</Form.Label>
                    <Form.Control type="text" placeholder="Enter model" name="model" value={car.model} onChange={onInputChange} />
                    </Form.Group></Col>
                    <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Construction year</Form.Label>
                    <Form.Control type="text" placeholder="Enter construction year" name="constructionYear" value={car.constructionYear} onChange={onInputChange} />
                </Form.Group></Col>
                    <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Fuel type</Form.Label>
                    <Form.Control type="text" placeholder="Enter fuel type" name="fuelType" value={car.fuelType} onChange={onInputChange} />
                </Form.Group></Col>
                    </Row>
                    <Row>
                        <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Seats</Form.Label>
                    <Form.Control type="text" placeholder="Enter seats" name="seats" value={car.seats} onChange={onInputChange} />
                </Form.Group></Col>
                        <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Picture Url</Form.Label>
                    <Form.Control type="text" placeholder="Enter picture url" name="picture" value={car.picture} onChange={onInputChange} />
                </Form.Group></Col>
                        <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Price per day</Form.Label>
                    <Form.Control type="text" placeholder="Enter price per day" name="pricePerDay" value={car.pricePerDay} onChange={onInputChange} />
                    </Form.Group></Col>
                        <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Car count</Form.Label>
                    <Form.Control type="text" placeholder="Enter car count" name="count" value={car.count} onChange={onInputChange} />
                </Form.Group></Col>
                        </Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}