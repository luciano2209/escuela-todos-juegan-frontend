/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/
// import { useState } from 'react'
// import { Switch } from '@headlessui/react'

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

export default function InscriptionForm() {
  // const [agreed, setAgreed] = useState(false)

  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <svg
          className="absolute left-full transform translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <svg
          className="absolute right-full bottom-0 transform -translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-blue-dark sm:text-4xl">Inscribete!</h2>
          
        </div>
        {/* Form */}
        <div className="mt-12">
          <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div className="sm:col-span-2">
              <label htmlFor="campus" className="block text-sm font-medium text-blue-dark">
                Sede
              </label>
              <div className="mt-1">
                <select
                  id="campus"
                  name="campus"
                  className="py-3 px-4 block w-full shadow-xl focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"                  
                >
                  <option>Sede Vitacura</option>
                  <option>Sede Conecta</option>
                  <option>Sede Batuco</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="first_name_student" className="block text-sm font-medium text-blue-dark">
                Nombre Alumno
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first_name_student"
                  id="first_name_student"
                  autoComplete="given-name"
                  className="py-3 px-4 block w-full shadow-xl focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last_name_student" className="block text-sm font-medium text-blue-dark">
                Apellido Alumno
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="last_name_student"
                  id="last_name_student"
                  autoComplete="family-name"
                  className="py-3 px-4 block w-full shadow-xl focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="company" className="block text-sm font-medium text-blue-dark">
                Curso Alumno
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="course"
                  id="course"
                  autoComplete="course"
                  className="py-3 px-4 block w-full shadow-xl focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-blue-dark">
                Colegio - Jardin
              </label>
              <div className="mt-1">
                <input
                  id="school"
                  name="school"
                  type="text"
                  autoComplete="school"
                  className="py-3 px-4 block w-full shadow-xl focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label htmlFor="first_name_student" className="block text-sm font-medium text-blue-dark">
                Nombre Apoderado 1 
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first_name_reperesentative"
                  id="first_name_reperesentative"
                  autoComplete="given-name"
                  className="py-3 px-4 block w-full shadow-xl focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last_name_student" className="block text-sm font-medium text-blue-dark">
                Apellido Apoderado 1
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="last_name_reperesentative"
                  id="last_name_reperesentative"
                  autoComplete="family-name"
                  className="py-3 px-4 block w-full shadow-xl focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-blue-dark">
                Rut Apoderado 1
              </label>
              <div className="mt-1">
                <input
                  id="rut_representative"
                  name="rut_representative"
                  type="text"
                  // autoComplete="school"
                  className="py-3 px-4 block w-full shadow-xl focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-blue-dark">
                Telefono Apoderado 1
              </label>
              <div className="mt-1">
                <input
                  id="rut_representative"
                  name="rut_representative"
                  type="text"
                  // autoComplete="school"
                  className="py-3 px-4 block w-full shadow-xl focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-blue-dark">
                Email Apoderado 1
              </label>
              <div className="mt-1">
                <input
                  id="email_representative"
                  name="email_representative"
                  type="email"
                  // autoComplete="school"
                  className="py-3 px-4 block w-full shadow-xl focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label htmlFor="first_name_student" className="block text-sm font-medium text-blue-dark">
                Nombre Apoderado 2
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first_name_reperesentative2"
                  id="first_name_reperesentative2"
                  autoComplete="given-name"
                  className="py-3 px-4 block w-full shadow-xl focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last_name_student" className="block text-sm font-medium text-blue-dark">
                Apellido Apoderado 2
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="last_name_reperesentative2"
                  id="last_name_reperesentative2"
                  autoComplete="family-name"
                  className="py-3 px-4 block w-full shadow-xl focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-blue-dark">
                Rut Apoderado 2
              </label>
              <div className="mt-1">
                <input
                  id="rut_representative"
                  name="rut_representative"
                  type="text"
                  // autoComplete="school"
                  className="py-3 px-4 block w-full shadow-xl focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-blue-dark">
                Telefono Apoderado 2
              </label>
              <div className="mt-1">
                <input
                  id="rut_representative"
                  name="rut_representative"
                  type="text"
                  // autoComplete="school"
                  className="py-3 px-4 block w-full shadow-xl focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-blue-dark">
                Email Apoderado 2
              </label>
              <div className="mt-1">
                <input
                  id="email_representative"
                  name="email_representative"
                  type="email"
                  // autoComplete="school"
                  className="py-3 px-4 block w-full shadow-xl focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-xl text-base font-medium text-yellow bg-blue-dark hover:bg-white-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-dark"
              >
                Inscribir!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
