/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import CampusInscription from './CampusInscription'



export default function Modal({open, setOpen, isClicked}) {
  
  console.log(isClicked)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" static className="fixed z-10 inset-0 overflow-y-auto" open={open} onClose={setOpen}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-blue-dark bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            
              <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-blue-dark pb-4 mr-4">
                  {isClicked.name}
              </Dialog.Title>
            {isClicked.schedules ? 
            <>
              <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-blue-dark pb-4">
                  Horarios
              </Dialog.Title>
              
              

              <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Día
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Horario
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Curso
                            </th>
                            
                            <th scope="col" className="relative px-6 py-3">
                              <span className="sr-only">Edit</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {isClicked.schedules.map((schedule, scheduleIdx) => (
                            <tr key={scheduleIdx} className={scheduleIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{schedule.day}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{schedule._schedule}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{schedule.course}</td>
                            
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a href="/" className="text-indigo-600 hover:text-indigo-900 opacity-0">
                                  Edit
                                </a>
                              </td>
                            </tr>
                          ))}
                          
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <br/>
              <br/>
              <CampusInscription/>
              </>
              :
              <>
              <p className="mb-4">Inscribete en nuestro nuevo taller y se parte de una gran experiencia junto a la escuela deportiva todos juegan</p>
              <CampusInscription/>
              </>
              }



            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
