import React from 'react'
import NavBar from '../top-navBar/NavBar'

import './layout.scss'

const Layout = ({children}) => {
  return (
    <div>
      <NavBar />  

      <section className="main-content">
        <section>
         {children}
        </section>
        <footer>
          Este es el footer
        </footer>
      </section>
    </div>
  )
}

export default Layout
