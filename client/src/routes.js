import {Navigate} from "react-router-dom";
import {MAIN_ROUTE, BUTTONS_ROUTE, COMPONENTS_ROUTE, BASICTABLE_ROUTE ,BASICFORM_ROUTE ,FONTAWESSOME_ROUTE , 
    WIDGETS_ROUTE, CHARTS_ROUTE, MAPS_ROUTE, ICONS_ROUTE, LOGIN_ROUTE } from "./utils/RouterConst";
import Content from "./components/Content";



export const publicRoutes = [
    {path: MAIN_ROUTE, element: <Content name={'MAIN_ROUTE'}/>},
    {path: BUTTONS_ROUTE, element: <Content name={'BUTTONS_ROUTE'}/>},
    {path: COMPONENTS_ROUTE, element: <Content name={'COMPONENTS_ROUTE'}/>},
    {path: BASICTABLE_ROUTE, element: <Content name={'BASICTABLE_ROUTE'}/>},
    {path: BASICFORM_ROUTE, element: <Content name={'BASICFORM_ROUTE'}/>},
    {path: FONTAWESSOME_ROUTE, element: <Content name={'FONTAWESSOME_ROUTE'}/>},
    {path: WIDGETS_ROUTE, element: <Content name={'WIDGETS_ROUTE'}/>},
    {path: CHARTS_ROUTE, element: <Content name={'CHARTS_ROUTE'}/>},
    {path: MAPS_ROUTE, element: <Content name={'MAPS_ROUTE'}/>},
    {path: ICONS_ROUTE, element: <Content name={'ICONS_ROUTE'}/>},
    {path: LOGIN_ROUTE , element: <Content name={'LOGIN_ROUTE '}/>},
    {path: '*', element: <Navigate to="/" replace/>}
]