import {useEffect, useState} from 'react'
import { useCountries } from '../context/ContriesContext';

import {CartItem} from '../components';

import {CountriesDataType} from '../context/ContriesContext';

import {Container, Row, Col} from 'react-bootstrap';

import { HomeRootDiv, FilterDiv } from './Home.styles';

const Home = () => {

  const [countries, setCountries] = useState<CountriesDataType[]>([]);
  const {getAllCountries} = useCountries();

// Fetch all data from the database
  async function fetchAllCountries() {
    const countriesData = await getAllCountries(); 
    setCountries(countriesData)
  }
  
  useEffect(() => {
    fetchAllCountries();    
  }, [])

  if(!countries.length) return <div>Loading...</div>

  return (
    <HomeRootDiv>
      <FilterDiv>
        <input className='searchBox' placeholder='search...' />
        <input className='filters' />
      </FilterDiv>
      {/* <Row> */}
        {/* {countries.map(country => <CartItem key={country.capital} country={country} />)} */}
        <CartItem key={countries[1].capital} country={countries[1]} />
      {/* </Row> */}
    </HomeRootDiv>
  )
}

export default Home