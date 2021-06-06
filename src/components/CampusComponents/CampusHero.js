/* This example requires Tailwind CSS v2.0+ */
export default function CampusHero({img,sede, textSede}) {
  return (
    <div className="relative bg-white">
      <div className="h-56 bg-blue-dark sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
        <img
          className="w-full h-full object-cover"
          src={img}
          alt="Support team"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
        <div className="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Conoce Nuestra Sede {sede}
          </h2>
          <p className="mt-6 text-lg text-gray-500">
            {textSede}
          </p>
         
        </div>
      </div>
    </div>
  )
}
