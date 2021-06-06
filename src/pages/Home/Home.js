import React from 'react'
import Slider from "react-slick";

import Hero from '../../components/Hero'
import AboutUs from '../../components/HomeComponents/AboutUs'
import Methology from '../../components/HomeComponents/Methodology'
import FormativeCommitment from '../../components/HomeComponents/FormativeCommitment'
import GeneralVision from '../../components/HomeComponents/GeneralVision'
import Sponsors from '../../components/HomeComponents/Sponsors'
import CampusInscription from '../../components/CampusComponents/CampusInscription'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <Hero img="https://live.staticflickr.com/65535/32857042397_56113cc5c6_b.jpg" title ="Todos Juegan" subTitle='La mejor escuela deportiva'/>
        </div>
        <div>
          <Hero img="https://live.staticflickr.com/65535/40834307023_99dfa613da_k_d.jpg" title ="Todos Juegan" subTitle='La mejor escuela deportiva'/>
        </div>
        <div>
          <Hero img="https://live.staticflickr.com/4841/45434419715_338c494c8f_k_d.jpg" title ="Todos Juegan" subTitle='La mejor escuela deportiva'/>
        </div>
        <div>
          <Hero img="https://live.staticflickr.com/65535/32856933597_8d726c93b9_k_d.jpg" title ="Todos Juegan" subTitle='La mejor escuela deportiva'/>
        </div>
        <div>
          <Hero img="https://live.staticflickr.com/4808/46854740501_5fe5901c89_k_d.jpg" title ="Todos Juegan" subTitle='La mejor escuela deportiva'/>
        </div>
      </Slider>
      <AboutUs/>
      <Methology/>
      <FormativeCommitment/>
      <GeneralVision/>
      <Sponsors/>
      <br/>
      <br/>
      <br/>
      <CampusInscription/>
      <br/>
      <br/>
      <br/>

    </>
  )
}

export default Home
