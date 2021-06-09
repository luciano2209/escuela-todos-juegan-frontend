/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon } from '@heroicons/react/outline'

const transferFeatures = [
  {
    id: 1,
   
    description:
      'Categorías podrán participar de la Copa Todos Juegan. 1° - 2° - 3° - 4° - 5° - 6° -7° - 8°, Básicos.',
    icon: GlobeAltIcon,
  },
  {
    id: 2,    
    description:
      'Cada copa sera realizará en 1 día y con una duración de 2 horas.',
    icon: ScaleIcon,
  },
  {
    id: 3,
    description:
      'Cada categoría tendrá un día asignado para participar en la Copa Todos Juegan',
    icon: LightningBoltIcon,
  },
  {
    id: 4,
    description:
      'Exactamente 7 JUGADORES debe inscribir cada equipo (Exclusivo FASE 2).',
    icon: LightningBoltIcon,
  },
  {
    id: 5,
    description:
      'El partido se disputara con 5 JUGADORES EN CANCHA y 2 suplentes.',
    icon: LightningBoltIcon,
  },
  {
    id: 6,
    description:
      'Solamente podrá haber 2 ADULTOS ACOMPAÑANTES, esto para mantener el aforo correspondiente.',
    icon: AnnotationIcon,
  },
]
const communicationFeatures = [
  
  {
    id: 1,
    description:
      'NO se permitirá público en Fase 2. Posteriormente se evaluará según el avance el Plan Paso a Paso.',
    icon: MailIcon,
  },
  {
    id: 2,
    description:
      'Cada partido tendrá una duración de 10 minutos por lado, y 3 minutos de descanso.',
    icon: MailIcon,
  },
  {
    id: 3,
    description:
      'El formato de la Copa se ajustará según equipos inscritos',
    icon: MailIcon,
  },
]

export default function Example() {
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
          ¿Qué es la Copa Todos Juegan?
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
          La Copa Todos Juegan es una competición recreativa en la que el objetivo principal es que los participantes disfruten con su equipo y compañeros a través del fútbol y la sana competencia.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            {/* <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Transfer funds world-wide
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores
              officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere.
              Totam, velit.
            </p> */}

            <dl className="mt-0 space-y-14">
              {transferFeatures.map((item) => (
                <div key={item.id} className="relative">
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
              className="relative mx-auto"
              width={490}
              src="https://live.staticflickr.com/4913/45459111425_cae3c71791_c_d.jpg"
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

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              {/* <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">Always in the loop</h3>
              <p className="mt-3 text-lg text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex obcaecati natus eligendi delectus,
                cum deleniti sunt in labore nihil quod quibusdam expedita nemo.
              </p> */}

              <dl className="mt-0 space-y-16">
                {communicationFeatures.map((item) => (
                  <div key={item.id} className="relative">
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
                className="relative mx-auto"
                width={490}
                src="https://live.staticflickr.com/4819/45622523584_2bd1de33ba_k_d.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
