import LogoClubConecta from '../../assets/img/logoClubConecta.png'

export default function Sponsors() {
  return (
    <div className="bg-blue-dark">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-yellow">Nuestros Patrocinadores</h2>
        <div className="flow-root mt-8 lg:mt-10">
          <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
              <img className="h-20" src={LogoClubConecta} alt="Tuple" />
            </div>
            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
              <img className="h-24" src="https://tofuu.getjusto.com/orioneat-prod-resized/jHw6eGm66gXtNa7dM-x-500.webp" alt="Mirage" />
            </div>
            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
              <img
                className="h-12"
                src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Macron_SPA_%282019%29_logo.svg"
                alt="StaticKit"
              />
            </div>
            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
              <img
                className="h-12"
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Mitre_Logo.svg"
                alt="Transistor"
              />
            </div>
            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
              <img
                className="h-20"
                src="https://scontent.fscl8-1.fna.fbcdn.net/v/t1.6435-9/94189658_102526294776505_6246870790608781312_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=gFbp4LXmInMAX-hW1Lp&_nc_ht=scontent.fscl8-1.fna&oh=74a129c62885768556e921c009055f27&oe=60DAE4C3"
                alt="Workcation"
              />
            </div>
            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
              <img
                className="h-20"
                src="https://d2vphdpk7x4k7.cloudfront.net/app/logoComercios/47.jpeg"
                alt="asd"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
