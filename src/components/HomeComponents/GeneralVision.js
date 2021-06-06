/* This example requires Tailwind CSS v2.0+ */
import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { ExclamationCircleIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'


const supportLinks = [
  {
    name: 'Sales',
    description:
      'Todas nuestras áreas de trabajo tienen como foco el desarrollo de valores que van más allá del aprendizaje del deporte o actividad de desarrollar.',
    icon: ScaleIcon,
  },
  {
    name: 'Technical Support',
    description:
      'Un deportista sin valores, no genera un impacto positivo en su comunidad. Es fundamental inculcar hábitos y compromisos que harán de nuestros jugadores grandes personas.',
    icon: ExclamationCircleIcon,
  },
  {
    name: 'Media Inquiries',
    description:
      'Generar una alianza que relacione los objetivos de su proyecto deportivo-educativo, beneficiando a los vecinos de la comuna bajo el desarrollo de talleres deportivos.',
    icon: LightningBoltIcon,
  },
]

export default function GeneralVision() {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative pb-32 bg-gray-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://live.staticflickr.com/65535/40834204483_bc4cae0100_b.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-yellow mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Vision General</h1>
          {/* <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui
            laoreet diam sed lacus, fames. Dui, amet, nec sit pulvinar.
          </p> */}
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div key={link.name} className="flex flex-col bg-white rounded-2xl shadow-xl" data-aos="zoom-in-down">
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-blue-dark rounded-xl shadow-lg transform -translate-y-1/2">
                  <link.icon className="h-6 w-6 text-yellow" aria-hidden="true" />
                </div>
                <p className="mt-4 text-base text-gray-500">{link.description}</p>
              </div>
             
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
