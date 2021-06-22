import React from 'react'
import Hero from '../../components/Hero'
import ActivitiesSection from '../../components/ActivitiesComponents/ActivitiesSection'
import CampusInscription from '../../components/CampusComponents/CampusInscription'


const Activities = () => {
  return (
    <div>
      <Hero img="https://live.staticflickr.com/4839/45649481354_80504be65f_k_d.jpg" title ="Actividades y Servicios" subTitle=' '/>
      <ActivitiesSection/>
      <CampusInscription/>
      <br/>

    </div>
  )
}

export default Activities
