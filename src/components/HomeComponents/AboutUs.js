/* This example requires Tailwind CSS v2.0+ */
import React, {useEffect} from 'react'
import Aos from 'aos'
 
import { AnnotationIcon, CheckIcon, AcademicCapIcon, ChevronDoubleUpIcon, CubeTransparentIcon, TrendingUpIcon } from '@heroicons/react/outline'

// import ImgHero2 from '../../assets/img/aboutUs3.jpg'

import 'aos/dist/aos.css'


const generalObjetives = [
  {
    id: 1,
    // name: 'Competitive exchange rates',
    description:
      'Entregar la posibilidad de hacer deporte y actividad física a todos los niños, jóvenes y adultos independientemente de su condición física, social y cognitiva.',
    icon: CheckIcon,
  },
  {
    id: 2,
    // name: 'No hidden fees',
    description:
      'Potenciar y guiar la formación deportiva en base a su etapa de desarrollo motriz e intelectual respectando las capacidades.',
    icon: AnnotationIcon,
  },
  {
    id: 3,
    // name: 'Transfers are instant',
    description:
      'Orientar hacia un desarrollo integral el desarrollo físico, hábitos de autocuidado y vida saludable.',
    icon: AcademicCapIcon,
  },
]
const spesificObjetive = [
  {
    id: 1,
    // name: 'Mobile notifications',
    description:
      'Desarrollar valores y trabajo de forma integral, respetando las capacidades individuales y etapa de formación de cada una de las personas.',
    icon: CheckIcon,
  },
  {
    id: 2,
    // name: 'Reminder emails',
    description:
      'Lograr un aprendizaje en base al desarrollo técnicotáctico y metodológico en cada deporte.',
    icon: CubeTransparentIcon,
  },
  {
    id: 3,
    // name: 'Mobile notifications',
    description:
      'Enseñar aspectos teóricos y reglamentos básicos del deporte a desarrollar.',
    icon: TrendingUpIcon,
  },
  {
    id: 4,
    // name: 'Reminder emails',
    description:
      'Enfatizar en los procesos metodológicos más allá del resultado.',
    icon: ChevronDoubleUpIcon,
  }
]

export default function AboutUs() {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  return (
    <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <svg
          className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
        </svg>

        <div className="relative">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            ¿Quienes Somos?
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
              Somos una escuela deportiva que busca entregar
              herramientas motoras, físicas, cognitivas,
              psicológicas y sociales, para el aprendizaje del
              fútbol en un contexto donde todos estos factores
              son esenciales para aprender de manera
              significativa este juego.
          </p>
        </div>
        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">Objetivos Generales</h3>
              {/* <p className="mt-3 text-lg text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex obcaecati natus eligendi delectus,
                cum deleniti sunt in labore nihil quod quibusdam expedita nemo.
              </p> */}
              <dl className="mt-10 space-y-10">
                {generalObjetives.map((item) => (
                  <div key={item.id} className="relative" data-aos="fade-down">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-dark text-yellow">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={784} height={404} fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
              </svg>
              <img
                className="relative mx-auto shadow-2xl"
                width={490}
                src='https://live.staticflickr.com/65535/47800403091_be38d4d7ef_k_d.jpg'
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Objetivos Específicos
            </h3>
            {/* <p className="mt-3 text-lg text-gray-500">
              Somos una escuela deportiva que busca entregar
              herramientas motoras, físicas, cognitivas,
              psicológicas y sociales, para el aprendizaje del
              fútbol en un contexto donde todos estos factores
              son esenciales para aprender de manera
              significativa este juego.
            </p> */}

            <dl className="mt-10 space-y-10">
              {spesificObjetive.map((item) => (
                <div key={item.id} className="relative" data-aos="fade-down">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-dark text-yellow">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={784} height={404} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
            </svg>
            <img
              className="relative mx-auto shadow-2xl"
              width={490}
              src='https://live.staticflickr.com/65535/33923406848_88ece41a7f_k_d.jpg'
              alt=""
            />
          </div>
        </div>

        <svg
          className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
        </svg>

      </div>
    </div>
  )
}
