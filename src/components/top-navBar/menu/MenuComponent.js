import React from 'react'

import './menu-component.scss'
import logo from '../../../images/logo/menu-logo-static.png'


const MenuComponent = () => {
  return (
    <div id="menu">
      <div id="left-menu">
          <div className="menu-item">
            Nosotros
          </div>
          <div className="menu-item">
            Velas
          </div>
          <div className="menu-item">
            Complementos
          </div>
      </div>
      <div id="logo">
        <img src={logo} alt="logo"/>
      </div>
      <div id="rigth-menu">
        <div className="menu-item">
            Blog
          </div>
          <div className="menu-item">
            Tienda fisica
          </div>
          <div className="menu-item">
            Contacto
          </div>
      </div>
    </div>
  )
}

export default MenuComponent
