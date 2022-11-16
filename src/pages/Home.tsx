import {useEffect, useState} from 'react'
import { useCountries } from '../context/ContriesContext';
import {CartItem} from '../components';
import {CountriesDataType} from '../context/ContriesContext';
import {Container, Row} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { HomeRootDiv, FilterDiv } from './Home.styles';


const Home = ({mode}: any) => {

  const theme = mode === 'light' 
    ? {bgColor:'white', color: '#202d36', filterBg: 'white', filterColor: '#white'} 
    : {bgColor:'#202d36', color: 'white', filterBg: '#2b3743', filterColor: '#d4d4d4'}

  // let data: CountriesDataType[] = []
  const [data, setData] = useState<CountriesDataType[]>([]);
  const [countries, setCountries] = useState<CountriesDataType[]>([]);
  const [filterRegion, setFilterRegion] = useState<string>('');
  const [filterByName, setFilterByName] = useState<string>('');
  const {getAllCountries} = useCountries();

// Fetch all data from the database
  async function fetchAllCountries() {
    const data = await getAllCountries(); 
    setData(data)
  }
  
  useEffect(() => {
    fetchAllCountries();    
  }, [])

  useEffect(()=>{
    if(data.length) {
      let filteredData = data;

      if(filterRegion.length) filteredData = filteredData.filter(country => country.region === filterRegion)
      if(filterByName.length) filteredData = filteredData.filter(country => country.name.common.toLowerCase().includes(filterByName.toLowerCase()) ? country : '')
      
      setCountries(filteredData)
    }
  }, [data, filterRegion, filterByName])

  return (
    <HomeRootDiv theme={theme}>
      <Container>
        <FilterDiv theme={theme}>
          <input className='searchBox' placeholder='Search for a country...' onChange={(e)=> setFilterByName(e.target.value)} />
          <Form.Select aria-label="Default select example" onChange={(e)=> setFilterRegion(e.target.value)} className='selectForm'>
            <option disabled>Filter by Regions</option>
            <option value=''>All Region</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='Oceania'>Oceania</option>
            <option value='Americas'>Americas</option>
            <option value='Africa'>Africa</option>
          </Form.Select>
        </FilterDiv>
        <Row className='justify-content-center'>
          {
            !countries.length ? <div>Loading...</div>
            :countries.map(country => <CartItem key={country.name.common} country={country} mode={mode} />)
          }
        </Row>
      </Container>
    </HomeRootDiv>
  )
}

export default Home