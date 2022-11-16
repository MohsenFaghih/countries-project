import { Link, Navigate } from "react-router-dom";
import {Card, Col} from 'react-bootstrap';

import {CountriesDataType} from '../../context/ContriesContext';

const CartItem = ({country, mode} : any) => ( // type for country should be corrected
    <Link 
        to={`/name/${country.name.official}`} 
        style={{
            width: 'auto', 
            textDecoration: 'none', 
            color: (mode === 'light') ? 'black' : 'white', 
            textAlign: 'left',
            marginBottom: '60px'
        }}>
        <Col lg={4} md={3} sm={2} xs={1}>
            <Card style={{ width: '18rem' }} className={mode === 'light' ? 'bg-light' : 'bg-secondary'}>
                <Card.Img variant="top" src={country.flags.png} style={{height: '170px'}} />
                <Card.Body style={{paddingBottom: '40px'}}>
                    <Card.Title>{country.name.common}</Card.Title>
                    <Card.Text>
                        <div><b>Population: </b><span>{country.population}</span></div>
                        <div><b>Region: </b><span>{country.region}</span></div>
                        <div><b>Capital: </b><span>{country.capital}</span></div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </Link>
)

export default CartItem