import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useCountries } from '../context/ContriesContext';

import {CountriesDataType} from '../context/ContriesContext';

import {Container, Row, Col, Button} from 'react-bootstrap';

import {ShowCountryRootDiv, DetailsDiv} from './ShowCountry.styles';

import { formatPopulation } from '../utils/formatPopulation';
import { retrunCurrencies } from '../utils/retrunCurrencies';
import { retrunLanguages } from '../utils/retrunLanguages';

const ArrowBack = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>


const ShowCountry = () => {

  const {name} = useParams();
  const {theme, getCountry, getCountryByCode} = useCountries();

  const navigate = useNavigate()

  const [country, setCountry] = useState<CountriesDataType | null>(null);
  const [borders, setBorders] = useState<any>([])

  const countryDetails = async () => {
    if(name !== 'undefined'){
      const country = await getCountry(name!);
      setCountry(country[0]);
      getCountryName(country[0].borders)
    }
  }

  useEffect(()=>{
    countryDetails();
  }, [name])

  function getCountryName(codes: string[] | undefined): string[] | void {
    if(codes) Promise.all(codes.map(code => getCountryByCode(code)))
      .then((values) => setBorders(values.map(border => border[0].name.common)))
      .catch(err=> {throw err})
  }

  if(!country) {
    return(
      <div className="mt-5 d-flex justify-content-center">
        <div className="spinner-grow" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    )
  }

  return (
    <ShowCountryRootDiv theme={theme}>
      <Container>
        <div className='btnDiv'>
          <Button variant="outline-secondary" onClick={() => navigate('/')}><ArrowBack />Back</Button>
        </div>
        {!country ? <div>Loading</div> :
        <Row className='justify-content-between'>
          <Col className='p-30 justify-content-space' sm={12} md={5}>
            <img className='w-100' src={country.flags.png} alt={country.name.official} />
          </Col>
          <Col sm={12} md={6}>
            <DetailsDiv>
              <Row>
                <Col md={12} className='text-start mb-4 mt-4 mt-sm-0 fs-2 fw-bold'>{country.name.official}</Col>
                <Col md={6} sm={12} className='text-start mb-5'>
                  <div className='title'>Native Name: <span>{country.name.common}</span></div>
                  <div className='title'>Population: <span>{formatPopulation(country.population)}</span></div>
                  <div className='title'>Region: <span>{country.region}</span></div>
                  <div className='title'>Sub Region: <span>{country.subregion}</span></div>
                  <div className='title'>Capital: <span>{country.capital[0]}</span></div>
                </Col>
                <Col md={6} sm={12} className='text-start mb-5'>
                  <div className='title'>Top Level Domain: <span>{country.tld[0]}</span></div>
                  <div className='title'>Currencies: <span>{retrunCurrencies(country.currencies)}</span></div>
                  <div className='title'>Languages: <span>{retrunLanguages(country.languages)}</span></div>
                </Col>
                <Col md={12} className='text-start'>
                  <div className='borderDiv'>
                    {borders.length ? <div className='title me-3 d-block d-sm-inline-block d-md-inline-block d-lg-inline-block'>Border Countries: </div> : ''}
                    {borders.length ? borders.map((border:string) => (
                      <span className='border'>{border}</span>
                    )) : ''}
                  </div>
                </Col>
              </Row>
            </DetailsDiv>
          </Col>
        </Row>
      } 
      </Container>
    </ShowCountryRootDiv>
  )
}

export default ShowCountry