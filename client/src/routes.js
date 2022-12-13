import {Navigate} from "react-router-dom";
import { MAIN_ROUTE, MODEL_ROUTE, NODS_ROUTE, CONTAINERS_ROUTE, NETS_ROUTE, CONSOLE_ROUTE, NETCONF_ROUTE,
    LICENSECONF_ROUTE, AUDITCONF_ROUTE, USERSCONF_ROUTE, LOGIN_ROUTE, INTEGRATION_ROUTE} from "./utils/RouterConst";
import Content from "./components/Content";
import Dashboard from "./pages/Dashboard"
import Console from "./pages/Console";
import Containers from "./pages/Containers";
import Model from "./pages/Model";
import Nets from "./pages/Nets";
import Nods from "./pages/Nods";


export const publicRoutes = [
    {path: MAIN_ROUTE, element: <Content component={<Dashboard/>}/>},
    {path: MODEL_ROUTE, element: <Content component={<Model/>}/>},
    {path: NODS_ROUTE, element: <Content component={<Nods/>}/>},
    {path: CONTAINERS_ROUTE, element: <Content component={<Containers/>}/>},
    {path: NETS_ROUTE, element: <Content component={<Nets/>}/>},
    {path: CONSOLE_ROUTE, element: <Content component={<Console/>}/>},
    {path: NETCONF_ROUTE, element: <Content component={<Dashboard/>}/>},
    {path: LICENSECONF_ROUTE, element: <Content component={<Dashboard/>}/>},
    {path: AUDITCONF_ROUTE, element: <Content component={<Dashboard/>}/>},
    {path: USERSCONF_ROUTE, element: <Content component={<Dashboard/>}/>},
    {path: INTEGRATION_ROUTE, element: <Content component={<Dashboard/>}/>},
    {path: LOGIN_ROUTE , element: <Content component={<Dashboard/>}/>},
    {path: '*', element: <Navigate to="/" replace/>}
]

export const privateRoutes = [

]