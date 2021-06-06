//Layouts
import LayoutMain from '../layouts/LayoutMain'


//Pages
import Home from '../pages/Home'
import Campus from '../pages/Campus'
import Activities from '../pages/Activities'
import Projects from '../pages/Projects'
import Cup from '../pages/Cup'
import Inscription from '../pages/Inscription'
import Gallery from '../pages/Gallery'
import CampusVitacura from '../pages/Campus/otherCampus/CampusVitacura'
import CampusBatuco from '../pages/Campus/otherCampus/CampusBatuco'
import CampusConecta from '../pages/Campus/otherCampus/CampusConecta'





const routes = [
  {
    path: "/",
    layout:LayoutMain,
    component: Home,
    exact: true
  },
  {
    path: "/sedes",
    layout:LayoutMain,
    component: Campus,
    exact: true
  },
  {
    path: "/actividades",
    layout:LayoutMain,
    component: Activities,
    exact: true
  },
  {
    path: "/proyectos",
    layout:LayoutMain,
    component: Projects,
    exact: true
  },
  {
    path: "/copa-todos-juegan",
    layout:LayoutMain,
    component: Cup,
    exact: true
  },
  {
    path: "/galeria",
    layout:LayoutMain,
    component: Gallery,
    exact: true
  },
  {
    path: "/inscripcion",
    layout:LayoutMain,
    component: Inscription,
    exact: true
  },
  {
    path: "/sedes/vitacura",
    layout:LayoutMain,
    component: CampusVitacura,
    exact: true
  },
  {
    path: "/sedes/batuco",
    layout:LayoutMain,
    component: CampusBatuco,
    exact: true
  },
  {
    path: "/sedes/conecta",
    layout:LayoutMain,
    component: CampusConecta,
    exact: true
  },
  {
    layout:LayoutMain,
    component: Home
  }
]

export default routes