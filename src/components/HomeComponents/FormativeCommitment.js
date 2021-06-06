import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'


const FormativeCommitment = () => {  
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  return (
    <section class="text-yellow body-font mb-40">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-20">
          <h1 class=" mb-12 text-3xl leading-8 font-extrabold tracking-tight text-blue-dark sm:text-4xl">Compromiso Formativo</h1>
          {/* <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p> */}
        </div>
        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 mb-44">
          <div class="p-2 sm:w-1/2 w-full" data-aos="fade-up-right">
            <div class="bg-blue-dark rounded flex p-4 h-full items-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-yellow w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span class="title-font font-medium">Compañerismo</span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full" data-aos="fade-up-left">
            <div class="bg-blue-dark rounded flex p-4 h-full items-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-yellow w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span class="title-font font-medium">Respeto</span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full" data-aos="fade-up-right">
            <div class="bg-blue-dark rounded flex p-4 h-full items-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-yellow w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span class="title-font font-medium">Responsabilidad</span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full" data-aos="fade-up-left">
            <div class="bg-blue-dark rounded flex p-4 h-full items-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-yellow w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span class="title-font font-medium">Tolerancia a la frustación</span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full" data-aos="fade-up-right">
            <div class="bg-blue-dark rounded flex p-4 h-full items-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-yellow w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span class="title-font font-medium">Perseverancia</span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full" data-aos="fade-up-left">
            <div class="bg-blue-dark rounded flex p-4 h-full items-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-yellow w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span class="title-font font-medium">Solidaridad</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FormativeCommitment
