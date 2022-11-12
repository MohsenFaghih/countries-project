import { Link, Navigate } from "react-router-dom";
import {Card, Col} from 'react-bootstrap';

import {CountriesDataType} from '../../context/ContriesContext';

const CartItem = ({country} : any) => ( // type for country should be corrected
    <Link to={`/country/${country.name.common}`}>
    {/* <Col lg={4} md={3} sm={2} xs={1} onClick={() => <Navigate to={`/country/${country.name.common}`} replace={true} />}> */}
    <Col lg={4} md={3} sm={2} xs={1}>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={country.flags.png} />
            <Card.Body>
                <Card.Title>{country.name.common}</Card.Title>
                <Card.Text>
                    <div>Population<span>{country.population}</span></div>
                    <div>Region<span>{country.region}</span></div>
                    <div>Capital<span>{country.capital}</span></div>
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
    </Link>
)

export default CartItem