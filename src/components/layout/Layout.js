import React from 'react'
import NavBar from '../navbar/NavBar'
import Footer from '../footer/Footer'

const Layout = ({children}) => {
  return (
    <div>
        <NavBar/>
        <div className='content'>
        {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout