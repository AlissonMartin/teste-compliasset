import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button'
import { HeaderWrapper, Nav } from './HeaderElements'
const logo =  require("../../assets/logo.png");

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to='/'><img src={logo} alt="logo" /></Link>
      <Nav>
      </Nav>
      <Link to='/newproduct'><Button>Adicionar Produto</Button></Link>
    </HeaderWrapper>
  )
}

export default Header