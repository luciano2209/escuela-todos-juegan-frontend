import React from 'react'
import Hero from '../../components/Hero'
// import CupCourse from '../../components/CupCourse'
import CupFeatures from '../../components/CupComponents/CupFeature'




const Cup = () => {
  return (
    <div>
      <Hero img="https://live.staticflickr.com/65535/40834278403_5ced4ab68f_k_d.jpg" title ="Copa Todos Juegan" subTitle='Amet veniam commodo incididunt laborum sit.'/>
      {/* <CupCourse/> */}
      <CupFeatures/>
    </div>
  )
}

export default Cup
