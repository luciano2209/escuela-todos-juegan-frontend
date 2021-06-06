import React from 'react'
import Hero from  '../../components/Hero'
import CampusSection from  '../../components/CampusComponents/CampusSection'
import headerCampus1 from '../../assets/img/headerCampus1.jpg'


const Campus = () => {
  return (
    <>
      <Hero img={headerCampus1} title ="Sedes" subTitle='Conoce nuestras sedes'/>
      <CampusSection/>
    </>
  )
}

export default Campus
