import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Slider from '../Component/Slider/Slider'
import Cetegory from '../Component/Cetegory/Cetegory'
import Type from '../Component/Type/Type'
import Footer from '../Component/Footer/Footer'
import Container from '../Component/Container/Container'
import Productlist from '../Component/ProductList/Productlist'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Type/>
      <Container/>
      <Cetegory/>
      <Productlist/>
      <Footer/>
    </div>
  )
}

export default Home
