/* This example requires Tailwind CSS v2.0+ */
import { ExternalLinkIcon } from '@heroicons/react/solid'

export default function CampusInscription() {
  return (
    <div className="relative bg-blue-dark">
      <div className="h-56 bg-yellow sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://live.staticflickr.com/65535/33923450088_8eee444f07_k_d.jpg"
          alt=""
        />
         <div className="absolute inset-0 bg-yellow mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">Escuela todos juegan</h2>
          <p className="mt-2 text-yellow text-3xl font-extrabold tracking-tight sm:text-4xl">Inscribete!</p>
          
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a
                href={`/inscripcion`}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-yellow hover:bg-gray-50"
              >
                Aqui!
                <ExternalLinkIcon className="-mr-1 ml-3 h-5 w-5 text-blue-dark" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
