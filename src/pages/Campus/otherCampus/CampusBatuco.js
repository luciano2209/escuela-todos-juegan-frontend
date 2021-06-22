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
  { id: 0,name: 'Futbol Masculino', icon: logoFutMasc  },
  { id: 1,name: 'Hockey',icon: logoHockey},
  { id: 2,name: 'Gimnasia',icon: logoGimn },
  { id: 3,name: 'Futbol Femenino', icon: logoFutFem },
  { id: 4,name: 'Tenis', icon: logoTenis },
  { id: 5,name: 'Motricidad',icon: logoMotricidad },
  { id: 6,name: 'Box',icon: logoBox },
  { id: 7,name: 'Ajedrez',icon: logoAjedrez },
  { id: 8,name: 'Tercera Edad',icon: logo3eraEDAD },
]


const CampusBatuco = () => {
  return (
    <div>
      <Hero 
        img="https://live.staticflickr.com/4838/32278310128_7de0df90a1_h_d.jpg"
        title="Sede Batuco"
        subTitle=" "
      />      
      <br/>   
      <br/>   
      <CampusHero img ="https://live.staticflickr.com/4906/45237522505_faaf74299c_h_d.jpg"sede={"Batuco"} textSede={" "}/>
      <CampusFeature sports={sports}/>
      <CampusInscription/>
      <CampusGallery />
      <CampusContact phone={"+56 998334729"} email={"contacto_conecta@gmail.com"}/>
    </div>
  )
}

export default CampusBatuco
