import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

export function CarCard({ car, deleteCar}) {

    const navigate = useNavigate();
    const redirectToDetails = () => {
        navigate(`/car/${car.id}`);
    }

    const redirectToEdit = () => {
        navigate(`/car/edit/${car.id}`);
    }

    if (!car) {
        return <p>No Car!</p>;
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Text>
                    <span className='key'>Type: </span>
                    <span className='value'>{car.type}</span>
                </Card.Text>
                <Card.Text>
                    <span className='key'>Brand: </span>
                    <span className='value'>{car.brand}</span>
                </Card.Text>
                <Card.Text>
                    <span className='key'>Model: </span>
                    <span className='value'>{car.model}</span>
                </Card.Text>
                <Card.Text>
                    <span className='key'>Construction year: </span>
                    <span className='value'>{car.constructionYear}</span>
                </Card.Text>
                <Card.Text>
                    <span className='key'>Fuel type: </span>
                    <span className='value'>{car.fuelType}</span>
                </Card.Text>
                <Card.Text>
                    <span className='key'>Seats: </span>
                    <span className='value'>{car.seats}</span>
                </Card.Text>
                <Card.Img variant="top" src={car.picture} />
                <Card.Text>
                    <span className='key'>Price per day: </span>
                    <span className='value'>{car.pricePerDay}</span>
                </Card.Text>
                <Card.Text>
                    <span className='key'>Count: </span>
                    <span className='value'>{car.count}</span>
                </Card.Text>
                <div className='btn-holder'>
                    <Button variant="primary" onClick={redirectToEdit}>Edit</Button>
                    <Button variant="danger" onClick={() => deleteCar(car.id)}>Delete</Button>
                    <Button variant="info" onClick={redirectToDetails}>Details</Button>
                </div>
            </Card.Body>
        </Card>
        );
}