import React from 'react';
import { Link } from "react-router-dom";
import {NavRootDiv, ContainerDiv} from './Navbar.styles'
import DarkIcon from '../../assets/icons/dark-mode-night-moon-svgrepo-com.svg'
import LightIcon from '../../assets/icons/white-balance-sunlight-mode-svgrepo-com.svg'

import {Container} from 'react-bootstrap';

type NavbarProps = {
  mode: string;
  changeMode: ()=>void
}

const Navbar = ({mode, changeMode} : NavbarProps) => {

  const theme = mode === 'light' ? {bgColor:'white', color: '#2b3743'} : {bgColor:'#2b3743', color: 'white'};

  return (
    <NavRootDiv>
      <Container>
        <ContainerDiv theme={theme}>
          <Link to='/'>Where in the world</Link>
          <h6 onClick={()=>changeMode()}>
            <span>{mode === 'light' ? <img src={DarkIcon} alt='themeIcon' /> : <img src={LightIcon} alt='themeIcon' />}</span>
            {mode === 'light' ? 'Dark' : 'Light'} Mode
          </h6>
        </ContainerDiv>
      </Container>
    </NavRootDiv>
  )
}

export default Navbar