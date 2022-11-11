import {Card, Col} from 'react-bootstrap';

import {CountriesDataType} from '../../context/ContriesContext';

const CartItem = ({country} : any) => { // type for country should be corrected

    if(!country?.name) return <div>Loading......</div>

    return (
        // <Col lg={4} md={3} sm={2} xs={1}>
        //     <Card style={{ width: '18rem' }}>
        //         <Card.Img variant="top" src={country.flag.png} />
        //         <Card.Body>
        //             <Card.Title>{country.name.common}</Card.Title>
        //             <Card.Text>
        //                 <div>Population<span>{country.population}</span></div>
        //                 <div>Region<span>{country.region}</span></div>
        //                 <div>Capital<span>{country.capital}</span></div>
        //             </Card.Text>
        //         </Card.Body>
        //     </Card>
        // </Col>

        <div>
            <div style={{ width: '18rem' }}>
                <img src={country.flag.png} alt={country.name.common} />
                <div>
                    <div>{country.name.common}</div>
                    <div>
                        <div>Population<span>{country.population}</span></div>
                        <div>Region<span>{country.region}</span></div>
                        <div>Capital<span>{country.capital}</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem