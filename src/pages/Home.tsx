import {useEffect, useState} from 'react'
import { useCountries } from '../context/ContriesContext';
import {CartItem} from '../components';
import {CountriesDataType} from '../context/ContriesContext';
import {Container, Row, Col} from 'react-bootstrap';
import { HomeRootDiv, FilterDiv } from './Home.styles';

const Home = ({mode}: any) => {

  const theme = mode === 'light' ? {bgColor:'white', color: '#2b3743'} : {bgColor:'#2b3743', color: 'white'};

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
    <HomeRootDiv theme={theme}>
      <FilterDiv>
        <input className='searchBox' placeholder='search...' />
        <input className='filters' />
      </FilterDiv>
      <Row>
        {countries.map(country => <CartItem key={country.capital} country={country} />)}
      </Row>
    </HomeRootDiv>
  )
}

export default Home