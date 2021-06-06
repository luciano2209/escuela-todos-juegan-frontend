import React, {useEffect, useState} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import Modal from './ModalSportCampus'



export default function CampusFeature({sports}) {
  const [open, setOpen] = useState(false)
  const [isClicked, setIsClicked] = useState([]);

  const handleOpen = (id) => {
    setIsClicked(sports[id]);
    console.log(isClicked)
    setOpen(true);
    
  };
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  return (
    <>
    
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Deportes que impartimos aqui
        </p>
        {/* <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
          malesuada. Eleifend condimentum id viverra nulla.
        </p> */}
        <div className="mt-12">
            {isClicked &&
            <Modal isClicked={isClicked} open={open} setOpen={setOpen}></Modal>
            }
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sports.map((sport,i) => (
              <>
                <div key={sport.id} className="pt-6" data-aos="zoom-in-up" onClick={()=>handleOpen(sport.id)}>
                  <div className="flow-root bg- rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-blue-dark rounded-md shadow-lg">
                          
                          <img className="h-44 w-44" src={sport.icon} alt="icono deporte"/>
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 cking-tight">{sport.name}</h3>
                      {/* <p className="mt-5 text-base text-gray-500">
                        {sport.text}
                      </p> */}
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
