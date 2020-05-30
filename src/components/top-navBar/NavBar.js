import React from 'react'
import Menu from './menu/MenuComponent'
import TopBar from './topBar/TopBar'

import './nav-bar.scss'

const NavBar = () => {
  return (
    <nav>
      <TopBar text="holas "/>
      <Menu/>
    </nav>
  )
}

export default NavBar
