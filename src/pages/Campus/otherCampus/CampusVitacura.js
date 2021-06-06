import React from 'react'
import Hero from '../../../components/Hero'
import CampusHero from '../../../components/CampusComponents/CampusHero'
import CampusContact from '../../../components/CampusComponents/CampusContact'
import CampusInscription from '../../../components/CampusComponents/CampusInscription'
import CampusFeature from '../../../components/CampusComponents/CampusFeature'
import CampusGallery from '../../../components/CampusComponents/CampusGallery'


const CampusVitacura = () => {
  return (
    <div>
      <Hero 
        img="https://live.staticflickr.com/65535/33923433998_2c999e1f41_b.jpg"
        title="Sede Vitacura"
        subTitle="Aliqua ut quis ipsum amet."
      />
      <br/>   
      <br/>   
      <CampusHero img ="https://live.staticflickr.com/65535/32857061467_b367a653cb_c_d.jpg"sede={"Vitacura"} textSede={"Eu consequat qui eu laborum nisi ex irure eu."}/>
      <CampusFeature/>
      <CampusInscription/>
      <CampusGallery />
      <CampusContact phone={"+56 998334729"} email={"contacto_vitacura@gmail.com"}/>

    </div>
  )
}

export default CampusVitacura
