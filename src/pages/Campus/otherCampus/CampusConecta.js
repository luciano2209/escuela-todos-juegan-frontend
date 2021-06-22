import React from 'react'
import Hero from '../../../components/Hero'
import CampusHero from '../../../components/CampusComponents/CampusHero'
import CampusContact from '../../../components/CampusComponents/CampusContact'
import CampusInscription from '../../../components/CampusComponents/CampusInscription'
import CampusFeature from '../../../components/CampusComponents/CampusFeature'
import CampusGallery from '../../../components/CampusComponents/CampusGallery'

import logoTenis from '../../../assets/icon/Tenis.png'
import logoMotricidad from '../../../assets/icon/Motricidad.png'
import logoHockey from '../../../assets/icon/Hockey.png'
import logoGimn from '../../../assets/icon/Gimn.png'
import logoFutFem from '../../../assets/icon/FufFem.png'
import logoFutMasc from '../../../assets/icon/FutMasc.png'
import logoBox from '../../../assets/icon/Box.png'
import logoAjedrez from '../../../assets/icon/AJedrez.png'
import logo3eraEDAD from '../../../assets/icon/3raEDAD.png'

const sports = [
  { id: 0,name: 'Futbol Masculino', icon: logoFutMasc, schedules:[
    { day: 'Lunes', _schedule: '16:00-17:00', course: 'Jardín-PK-Kinder' },
    { day: 'Lunes', _schedule: '16:00-17:00', course: '1°-2° básico' },
    { day: 'Martes', _schedule: '16:00-17:00', course: 'Jardín-PK-Kinder' },
    { day: 'Martes', _schedule: '17:00-18:00', course: '3°-4° básico' },
    { day: 'Martes', _schedule: '17:00-18:00', course: '5°-6° básico' },
    { day: 'Miércoles', _schedule: '16:00-17:00', course: 'Jardín-PK-Kinder-1°-2° básico' },
    { day: 'Jueves', _schedule: '16:00-17:00', course: '3°-4° básico' },
    { day: 'Jueves', _schedule: '17:00-18:00', course: '5°-6° básico' },
    { day: 'Viernes', _schedule: '16:00-17:00', course: 'Jardín-PK-Kinder'},

  ] },
  { id: 1,name: 'Hockey',icon: logoHockey,schedules:[
    { day: 'Lunes', _schedule: '16:00-17:00', course: 'Pk-K-1°-2° Básico' },
    { day: 'Lunes', _schedule: '17:00-18:00', course: '3°-4°-5°-6° Básico' },
    { day: 'Miércoles', _schedule: '16:00-17:00', course: 'Pk-K-1°-2° Básico' },
    { day: 'Miércoles', _schedule: '17:00-18:00', course: '3°-4°-5°-6° Básico' },
  ] },
  { id: 2,name: 'Gimnasia',icon: logoGimn ,schedules:[
    { day: 'Miércoles', _schedule: '16:00-17:00', course: 'Gimnasia Rítimica Pk- 1°' },
  ]},
  { id: 3,name: 'Futbol Femenino', icon: logoFutFem },
  { id: 4,name: 'Tenis', icon: logoTenis },
  { id: 5,name: 'Motricidad',icon: logoMotricidad },
  { id: 6,name: 'Box',icon: logoBox },
  { id: 7,name: 'Ajedrez',icon: logoAjedrez },
  { id: 8,name: 'Tercera Edad',icon: logo3eraEDAD },
]

const CampusConecta = () => {
  return (
    <>  
      <Hero 
        img="https://live.staticflickr.com/4901/44555505710_a01f4f753b_k_d.jpg"
        title="Sede Conecta"
        subTitle=" "
      />      
      <br/>     
      <br/>   
      <CampusHero img ="https://live.staticflickr.com/4881/45237523815_7b5775abbe_c_d.jpg"sede={"Conecta"} textSede={" "}/>
      <CampusFeature sports={sports}/>
      <CampusInscription/>
      <CampusGallery />
      <CampusContact phone={"+56 998334729"} email={"contacto_conecta@gmail.com"}/>
      
    </>
  )
}

export default CampusConecta
