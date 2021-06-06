import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'


const GallerySection = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  return (
    <>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex w-full mb-20 flex-wrap">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Galeria</h1>
          <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
        </div>
        <div class="flex flex-wrap md:-m-2 -m-1">
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-1/2" data-aos="zoom-in">
              <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://live.staticflickr.com/65535/47800350921_68728d6da0_b.jpg"/>
            </div>
            <div class="md:p-2 p-1 w-1/2" data-aos="zoom-in">
              <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://live.staticflickr.com/65535/47800348941_375c165c18_c_d.jpg"/>
            </div>
            <div class="md:p-2 p-1 w-full" data-aos="zoom-in">
              <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://live.staticflickr.com/65535/47011183134_69ea726659_c_d.jpg"/>
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-full" data-aos="zoom-in">
              <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://live.staticflickr.com/65535/33923450088_8eee444f07_k_d.jpg"/>
            </div>
            <div class="md:p-2 p-1 w-1/2" data-aos="zoom-in">
              <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://live.staticflickr.com/65535/33923455418_0da51ddb18_c_d.jpg"/>
            </div>
            <div class="md:p-2 p-1 w-1/2" data-aos="zoom-in">
              <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://live.staticflickr.com/65535/47011190294_ea3d75198f_c_d.jpg"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        {/* <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
        </div> */}
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/3 sm:w-1/2 p-4" data-aos="zoom-in">
            <div class="flex relative">
              <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://live.staticflickr.com/65535/47748205012_3dd25eb5c3_c_d.jpg"/>
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4" data-aos="zoom-in">
            <div class="flex relative">
              <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://live.staticflickr.com/65535/47011193694_e8382d87b8_c_d.jpg"/>
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4" data-aos="zoom-in">
            <div class="flex relative">
              <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://live.staticflickr.com/65535/47011193694_e8382d87b8_c_d.jpg"/>
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4" data-aos="zoom-in">
            <div class="flex relative">
              <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://live.staticflickr.com/65535/33923465198_3f57b38dd5_c_d.jpg"/>
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
                <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4" data-aos="zoom-in">
            <div class="flex relative">
              <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://live.staticflickr.com/65535/47011199514_375c0e7c94_c_d.jpg"/>
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
                <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4" data-aos="zoom-in">
            <div class="flex relative">
              <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://live.staticflickr.com/65535/33923470318_a86616f04e_c_d.jpg"/>
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
                <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default GallerySection
