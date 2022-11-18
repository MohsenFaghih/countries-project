import {useEffect, useState} from 'react'
import { useCountries } from '../context/ContriesContext';
import {CartItem} from '../components';
import {CountriesDataType} from '../context/ContriesContext';
import {Container, Row, Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { HomeRootDiv, FilterDiv } from './Home.styles';

const Home = ({mode}: any) => {

  const {theme} = useCountries()

  const colors = theme === 'light' 
    ? {bgColor:'hsl(0, 0%, 98%)', color: 'hsl(200, 15%, 8%)', filterBg: 'hsl(0, 0%, 100%)', filterColor: 'hsl(0, 0%, 52%)'} 
    : {bgColor:'hsl(207, 26%, 17%)', color: 'hsl(0, 0%, 100%)', filterBg: '#2b3743', filterColor: '#d4d4d4'}

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
    <HomeRootDiv theme={colors}>
      <Container>
        <FilterDiv theme={colors}>
          <Row className='justify-content-between pt-4 pb-4'>
            <Col xs={12} sm={12} md={5} lg={4}>
              <input className='searchBox w-100' placeholder='Search for a country...' onChange={(e)=> setFilterByName(e.target.value)} />
            </Col>
            <Col xs={6} sm={6} md={5} lg={3} xl={3}>
              <Form.Select aria-label="Default select example" onChange={(e)=> setFilterRegion(e.target.value)} className='selectForm w-100'>
                <option disabled>Filter by Regions</option>
                <option value=''>All Region</option>
                <option value='Asia'>Asia</option>
                <option value='Europe'>Europe</option>
                <option value='Oceania'>Oceania</option>
                <option value='Americas'>Americas</option>
                <option value='Africa'>Africa</option>
              </Form.Select>
            </Col>
          </Row>
        </FilterDiv>
        <Row className='justify-content-center justify-content-md-between'>
          {
            !countries.length ? <div>Loading...</div>
            :countries.map(country => <CartItem key={country.name.common} country={country} theme={theme} />)
          }
        </Row>
      </Container>
    </HomeRootDiv>
  )
}

export default Home