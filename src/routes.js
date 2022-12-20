import {Navigate} from "react-router-dom";
import {MAIN_ROUTE, REPORTS_ROUTE, VULNERABILITES_ROUTE, MODEL_ROUTE, NODS_ROUTE, CONTAINERS_ROUTE, NETS_ROUTE, CONSOLE_ROUTE, NETCONF_ROUTE,
    LICENSECONF_ROUTE, AUDITCONF_ROUTE, USERSCONF_ROUTE, LOGIN_ROUTE, INTEGRATION_ROUTE, 
    CONSOLE_ACTIVE_ROUTE, CONSOLE_END_ROUTE, CONSOLE_ERROR_ROUTE, CONSOLE_GROUPS_ROUTE} from "./utils/RouterConst";
import Content from "./components/content";
import Dashboard from "./pages/Dashboard"
import Console from "./pages/console/Console";
import Containers from "./pages/Containers";
import Model from "./pages/Model";
import Nets from "./pages/Nets";
import Nods from "./pages/Nods";
import Audit from "./pages/admin/Audit";
import Integrations from "./pages/admin/Integration";
import License from "./pages/admin/License";
import Net from "./pages/admin/Net";
import Users from "./pages/admin/Users";
import Login from "./pages/login";
import Reports from "./pages/Reports";
import Vulnerabilities from "./pages/Vulnerabilities";

const active = '';

export const publicRoutes = [
    {path: LOGIN_ROUTE , element: <Content component={<Login/>}/>},
    {path: '*', element: <Navigate to={LOGIN_ROUTE} replace/>}
]

export const privateRoutes = [
    {path: MAIN_ROUTE, element: <Content component={<Dashboard/>}/>},
    {path: VULNERABILITES_ROUTE, element: <Content component={<Vulnerabilities/>}/>},
    {path: MODEL_ROUTE, element: <Content component={<Model/>}/>},
    {path: NODS_ROUTE, element: <Content component={<Nods/>}/>},
    {path: CONTAINERS_ROUTE, element: <Content component={<Containers/>}/>},
    {path: NETS_ROUTE, element: <Content component={<Nets/>}/>},
    {path: CONSOLE_ROUTE, element: <Content component={<Console/>}/>},
        {path: CONSOLE_ACTIVE_ROUTE, element: <Content component={<Console props={active}/>}/>},
        {path: CONSOLE_END_ROUTE, element: <Content component={<Console props={active}/>}/>},
        {path: CONSOLE_ERROR_ROUTE, element: <Content component={<Console props={active}/>}/>},
        {path: CONSOLE_GROUPS_ROUTE, element: <Content component={<Console props={active}/>}/>},
    {path: REPORTS_ROUTE, element: <Content component={<Reports/>}/>},
    {path: NETCONF_ROUTE, element: <Content component={<Net/>}/>},
    {path: LICENSECONF_ROUTE, element: <Content component={<License/>}/>},
    {path: AUDITCONF_ROUTE, element: <Content component={<Audit/>}/>},
    {path: USERSCONF_ROUTE, element: <Content component={<Users/>}/>},
    {path: INTEGRATION_ROUTE, element: <Content component={<Integrations/>}/>},
    {path: '*', element: <Navigate to="/" replace/>}
]