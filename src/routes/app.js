import Login from '../views/Login'
import Profile from '../views/Profile'
import Colaborations from '../views/Colaborations'
import MyDiagrams from '../views/MyDiagrams'
import Trash from '../views/Trash'
import Tools from '../views/Tools'

import Face from '@material-ui/icons/Face';
import FormatShapes from '@material-ui/icons/FormatShapes';
import Share from '@material-ui/icons/Share';
import DeleteSweep from '@material-ui/icons/DeleteSweep';
import Settings from '@material-ui/icons/Settings';
const appRoutes = [
    {
        path: '/profile',
        sidebarName: 'Perfil',
        icon: Face,
        component: Profile
    },
    {
        path: '/collaborations',
        sidebarName: 'Colaboraciones',
        icon: Share,
        component: Colaborations
    },
    {
        path: '/diagrams',
        sidebarName: 'Mis Diagramas',
        icon: FormatShapes,
        component: MyDiagrams
    },
    {
        path: '/trash',
        sidebarName: 'Descartados',
        icon: DeleteSweep,
        component: Trash
    },
    {
        path: '/tools',
        sidebarName: 'Herramientas',
        icon: Settings,
        component: Tools
    }
]

export default appRoutes