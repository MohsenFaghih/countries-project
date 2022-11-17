import { Link, Navigate } from "react-router-dom";
import {Card, Col} from 'react-bootstrap';

import { formatPopulation } from "../../utils/formatPopulation";

import {CartItemRoot} from './CartItem.styles'

const CartItem = ({country, theme} : any) => ( // type for country should be corrected
    <CartItemRoot theme={theme}>
        <Link to={`/name/${country.name.official}`}>
            <Col lg={4} md={3} sm={2} xs={1}>
                <Card style={{ width: '18rem', backgroundColor: theme === 'light' ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)' }}>
                    <Card.Img variant="top" src={country.flags.png} style={{height: '170px'}} />
                    <Card.Body style={{paddingBottom: '40px'}}>
                        <Card.Title>{country.name.common}</Card.Title>
                        <Card.Text>
                            <div className='details'><b>Population: </b><span>{formatPopulation(country.population)}</span></div>
                            <div className='details'><b>Region: </b><span>{country.region}</span></div>
                            <div className='details'><b>Capital: </b><span>{country.capital}</span></div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Link>
    </CartItemRoot>
)

export default CartItem