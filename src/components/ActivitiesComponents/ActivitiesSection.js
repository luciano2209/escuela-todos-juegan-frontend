import React, {useEffect, useState} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import ActivityModal from './ActivityModal'

const activities = [
  
  {
    id:0,
    title: 'Escuela de verano',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    imageUrl:
      'https://live.staticflickr.com/65535/47800421801_28cff45766_c_d.jpg',
    features: [
      {text: 'Juegos recreativos',},
      {text: 'Juegos de agua',},
      {text: 'Actividades deportivas',},
      {text: 'Monitores',},
      {text: 'talleres de manualidades',}
    ]
  },
  {
    id:1,
    title: 'Cumpleaños',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    imageUrl:
      'https://live.staticflickr.com/65535/47800421801_28cff45766_c_d.jpg',
    features: [
      {text: 'Cumpleaños en club y particulares',},
      {text: 'Materiales varios',},
      {text: 'Actividades recreativas',},
      {text: 'Alimentacion FootTrack The Company (solo cumpleaños en club)',}
    ]
  },
  {
    id:2,
    title: 'Paseos de cursos',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    imageUrl:
      'https://live.staticflickr.com/65535/47800421801_28cff45766_c_d.jpg',
    features: [
      {text: 'Actividades ludicas, recreativas y deportivas',},
      {text: 'Profesor - Monitor',},
      {text: 'Actividades recreativas',},
      {text: 'Alimentacion FootTrack The Company - colaciones',},
      {text: 'Lugar a realizar club conecta',},
      {text: 'Cancha futbolito incluida'},
    ]
  },
  {
    id:3,
    title: 'Asesoria',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    imageUrl:
      'https://live.staticflickr.com/65535/47800421801_28cff45766_c_d.jpg',
    features: [
      {text: 'gestion deportiva',},
      {text: 'Administracion escuelas deportivas',},
    ]
  },
]

export default function ActivitiesSection() {
  const [open, setOpen] = useState(false)
  const [isClicked, setIsClicked] = useState([]);
  
  const handleOpen = (id) => {
    setIsClicked(activities[id]);
    setOpen(true);
  };

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  return (
    <>
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Actividades</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
          </p>
        </div>
        {isClicked &&
          <ActivityModal isClicked={isClicked} open={open} setOpen={setOpen}></ActivityModal>
        }
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {activities.map((activity) => (
            <div key={activity.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden" data-aos="zoom-in" onClick={()=>handleOpen(activity.id)}>
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={activity.imageUrl} alt="" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <a href={activity.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{activity.title}</p>
                    <p className="mt-3 text-base text-gray-500">{activity.description}</p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
