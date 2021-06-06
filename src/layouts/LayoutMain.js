import React from 'react'
import NavBar from './Navbar'
import Footer from './Footer'


const LayoutMain = (props) => {
  return (
    <div>
      <NavBar/>
        {props.children}
      <Footer/>
    </div>
  )
}

export default LayoutMain
