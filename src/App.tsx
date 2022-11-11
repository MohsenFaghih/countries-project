import {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import {Home, ShowCountry} from './pages';
import {Navbar} from './components';
import { CountriesProvider } from './context/ContriesContext';

function App() {

  const [mode, setMode] = useState('light')
  function changeMode():void {setMode((mode === 'light') ? 'dark' : 'light')}

  return (
    <CountriesProvider>
      <BrowserRouter>
      <div className="App">
        <Navbar mode={mode} changeMode={changeMode} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/country/:id' element={<ShowCountry />} />
        </Routes>
      </div>
      </BrowserRouter>
    </CountriesProvider>
  );
}

export default App;
