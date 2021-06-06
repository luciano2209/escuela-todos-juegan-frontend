import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
// import {Link} from 'react-router-dom'

const campus = [
  {
    title: 'SEDE Conecta',
    href: '#',
    address:
      'El Rodeo 12699, La Dehesa',
    phone:
    '+569 77653799',
    email:
    'contacto@escuelatodosjuegan.cl',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    imageUrl:
      'https://images.pexels.com/photos/887584/pexels-photo-887584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    to:'/sedes/conecta'
  },
  {
    title: 'SEDE Batuco',
    href: '#',
    address:
      'Club Laesquina',
    phone:
    '+569 77653799',
    email:
    'contacto@escuelatodosjuegan.cl',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
   
    imageUrl:
      'https://images.pexels.com/photos/972513/pexels-photo-972513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    to:'/sedes/batuco'
  },
 
]

export default function CampusSection() {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-blue-dark sm:text-4xl">Conoce nuestas sedes</h2>
          {/* <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
          </p> */}
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {campus.map((camp) => (
            <a href={camp.to}>
              <div key={camp.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden" data-aos="zoom-out-up">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={camp.imageUrl} alt="" />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-xl font-semibold text-gray-900">{camp.title}</p>
                    <p className="mt-3 text-base text-gray-500">Direccion: {camp.address}</p>
                    <p className="mt-3 text-base text-gray-500">Telefono: {camp.phone}</p>  
                    <p className="mt-3 text-base text-gray-500">Email: {camp.email}</p>
                    {/* <Link to={camp.to}><p className="mt-5 text-blue-dark">Ver Mas</p></Link>  */}
                  </div>             
                </div>
              </div>
            </a> 
          ))}
          <a href='https://vitadeportes.cl/actividades/noticias/3310'>
              <div key='SEDE Vitacura' className="flex flex-col rounded-lg shadow-lg overflow-hidden" data-aos="zoom-out-up">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src='https://images.pexels.com/photos/2968077/pexels-photo-2968077.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' alt="" />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-xl font-semibold text-gray-900">SEDE Vitacura</p>
                    <p className="mt-3 text-base text-gray-500">Para registrarse tiene que ingiresar aqui!</p>
                    
                    {/* <Link to={camp.to}><p className="mt-5 text-blue-dark">Ver Mas</p></Link>  */}
                  </div>             
                </div>
              </div>
            </a> 
        </div>
      </div>
    </div>
  )
}
