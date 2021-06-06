import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from '@heroicons/react/outline'

const features = [
  { name: '1°Basico',text:'In officia aliquip consectetur Lorem qui exercitation elit.', icon: CloudUploadIcon },
  { name: '2°Basico',text:'In officia aliquip consectetur Lorem qui exercitation elit.', icon: LockClosedIcon },
  { name: '3°Basico',text:'In officia aliquip consectetur Lorem qui exercitation elit.', icon: RefreshIcon },
  { name: '4°Basico',text:'In officia aliquip consectetur Lorem qui exercitation elit.', icon: ShieldCheckIcon },
  { name: '5°Basico',text:'In officia aliquip consectetur Lorem qui exercitation elit.', icon: CogIcon },
  { name: '6°Basico',text:'In officia aliquip consectetur Lorem qui exercitation elit.', icon: ServerIcon },
  { name: '7°Basico',text:'In officia aliquip consectetur Lorem qui exercitation elit.', icon: ServerIcon },
  { name: '8°Basico',text:'In officia aliquip consectetur Lorem qui exercitation elit.', icon: ServerIcon },

]

export default function CupCourse() {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  return (
    <>
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        {/* <h2 className="text-base font-semibold tracking-wider text-yellow uppercase">Deploy faster</h2> */}
        <p className="mt-2 text-3xl font-extrabold text-blue-dark tracking-tight sm:text-4xl">
          Categorias
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
          malesuada. Eleifend condimentum id viverra nulla.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6" data-aos="zoom-in">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-dark rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-yellow" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    
    </>
  )
}
