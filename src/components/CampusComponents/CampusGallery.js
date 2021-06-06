import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const CampusGallery = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  return (
    <section class="text-blue-dark body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex w-full mb-20 flex-wrap">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-blue-dark lg:w-1/3 lg:mb-0 mb-4">Galeria</h1>
          {/* <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p> */}
        </div>
        <div class="flex flex-wrap md:-m-2 -m-1">
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-1/2" data-aos="fade-up">
              <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://live.staticflickr.com/65535/47800350921_68728d6da0_b.jpg"/>
            </div>
            <div class="md:p-2 p-1 w-1/2" data-aos="fade-up">
              <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://live.staticflickr.com/4913/31210224747_a7eb49a48d_c_d.jpg"/>
            </div>
            <div class="md:p-2 p-1 w-full" data-aos="fade-up">
              <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://live.staticflickr.com/4813/45237518195_9243c7118a_c_d.jpg"/>
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-full" data-aos="fade-up">
              <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://live.staticflickr.com/4891/45237519615_4c88d6d054_c_d.jpg"/>
            </div>
            <div class="md:p-2 p-1 w-1/2" data-aos="fade-up">
              <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://live.staticflickr.com/4894/45237519995_1c6b8dd4d1_c_d.jpg"/>
            </div>
            <div class="md:p-2 p-1 w-1/2" data-aos="fade-up">
              <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://live.staticflickr.com/4816/45237522165_bd2faba52f_c_d.jpg"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CampusGallery
