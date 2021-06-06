/* This example requires Tailwind CSS v2.0+ */
import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { ExclamationCircleIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Competitive exchange rates',
    description:
      'Forma global e integral, preocupados de todas las áreas de enseñanza en el deporte.',
    icon: ExclamationCircleIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'Respetar las capacidades personales y ritmo de aprendizaje, entendiendo el contexto y la situación fortaleciendo la motivación y enseñanza significativa.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Transfers are instant',
    description:
      'Formar valores más allá del deporte. “con alegría y motivación se aprende mejor”',
    icon: ScaleIcon,
  },
]

export default function Methodology() {
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
            src="https://live.staticflickr.com/4831/31407287207_be65597a91_b.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-blue-400 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-yellow md:text-5xl lg:text-6xl">Metodologias</h1>
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
          {features.map((link) => (
            <div key={link.name} className="flex flex-col bg-white rounded-2xl shadow-xl" data-aos="fade-down">
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
