import React from "react";
import styles from '../assets/css/style.css'
import { Link, useLocation  } from "react-router-dom";
import MenuItem from "./MenuItem";

import {MAIN_ROUTE, BUTTONS_ROUTE, COMPONENTS_ROUTE,BASICTABLE_ROUTE ,BASICFORM_ROUTE ,FONTAWESSOME_ROUTE , 
    WIDGETS_ROUTE, CHARTS_ROUTE, MAPS_ROUTE, ICONS_ROUTE, LOGIN_ROUTE } from "../utils/const";

const LeftPanel = () =>{
    const location = useLocation()
    const thisLink = location.pathname 
   
    const partition =[
        {link:BUTTONS_ROUTE, icon: 'fa-puzzle-piece', name: 'Buttons' },
        {link:COMPONENTS_ROUTE, icon: 'fa-cogs', name: 'Components' },
        {link:BASICTABLE_ROUTE, icon: 'fa-table', name: 'Basic Table' },
        {link:BASICFORM_ROUTE, icon: 'fa-th', name: 'Basic Form' },
    ] 
    console.log(partition)
    const operations =[
       
        {link: FONTAWESSOME_ROUTE, icon: 'fa-fort-awesome', name: 'Font Awesome' },
        {link: WIDGETS_ROUTE, icon: 'ti-email', name: 'Widgets' },
        {link: CHARTS_ROUTE, icon: 'fa-line-chart', name: 'Charts JS' },
        {link: MAPS_ROUTE, icon: 'fa-map-o', name: 'Maps' },
        {link: ICONS_ROUTE, icon: 'fa-area-chart', name: 'Icons' },

    ] 
  
    return(
        <aside id="left-panel" className="left-panel">
        <nav className="navbar navbar-expand-sm navbar-default">
            <div id="main-menu" className="main-menu collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li className={location.pathname === MAIN_ROUTE? "active" : null}>
                        <Link  to={MAIN_ROUTE}><i className="menu-icon fa fa-laptop"></i>На главную</Link>
                    </li>
                    
                    <li className="menu-title">Разделы:</li>

                    {partition.map(part =>
                      <MenuItem key={part.name} part = {part}/>
                    )}
           
                    <li className="menu-title">Операции:</li>
                    
                    {operations.map(part =>
                      <MenuItem key={part.name} part = {part}/>
                    )}

                    <li className="menu-title">Авторизация:</li>
                    <li className={location.pathname === LOGIN_ROUTE? "active" : null}>
                        <Link  to={LOGIN_ROUTE}> <i className="menu-icon fa fa-sign-in"></i>Вход</Link>
                    </li>
                  
                </ul>
            </div>
        </nav>
    </aside>
    )
}

export default LeftPanel;