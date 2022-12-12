import React from "react";
import styles from '../assets/css/style.css'
import { Link } from "react-router-dom";
import {MAIN_ROUTE, BUTTONS_ROUTE, COMPONENTS_ROUTE,BASICTABLE_ROUTE ,BASICFORM_ROUTE ,FONTAWESSOME_ROUTE , 
    WIDGETS_ROUTE, CHARTS_ROUTE, MAPS_ROUTE, ICONS_ROUTE, LOGIN_ROUTE } from "../utils/const";

const LeftPanel = () =>{
   
    return(
        <aside id="left-panel" className="left-panel">
        <nav className="navbar navbar-expand-sm navbar-default">
            <div id="main-menu" className="main-menu collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li className="active">

                    <Link  to={MAIN_ROUTE}><i className="menu-icon fa fa-laptop"></i>На главную</Link>
                       
                    </li>
                    <li className="menu-title">Разделы:</li>
                    <li >
                        <Link  to={BUTTONS_ROUTE}><i className="menu-icon fa fa-puzzle-piece"></i>Buttons</Link>
                    </li>
                    <li >
                        <Link  to={COMPONENTS_ROUTE}><i className="menu-icon fa fa-cogs"></i>Components </Link>
                    </li>
                    <li >
                        <Link  to={BASICTABLE_ROUTE}><i className="menu-icon fa fa-table"></i>Basic Table</Link>
                    </li>
                    <li >
                        <Link  to={BASICFORM_ROUTE}><i className="menu-icon fa fa-th"></i>Basic Form</Link>
                    </li>
            
                    <li className="menu-title">Операции:</li>
                    <li >
                        <Link  to={FONTAWESSOME_ROUTE}><i className="menu-icon fa  fa-fort-awesome"></i>Font Awesome</Link>
                    </li>
                  
                    <li>
                        <Link  to={WIDGETS_ROUTE}> <i className="menu-icon ti-email"></i>Widgets </Link>
                    </li>
                    <li>
                        <Link  to={CHARTS_ROUTE}> <i className="menu-icon fa fa-line-chart"></i>Charts JS</Link>
                    </li>
                    <li>
                        <Link  to={ MAPS_ROUTE}> <i className="menu-icon fa fa-map-o"></i>Maps</Link>
                    </li>
                    <li>
                        <Link  to={ICONS_ROUTE}> <i className="menu-icon fa fa-area-chart"></i>Icons</Link>
                    </li>
                    <li className="menu-title">Авторизация:</li>
                    <li>
                        <Link  to={LOGIN_ROUTE }> <i className="menu-icon fa fa-sign-in"></i>Вход</Link>
                    </li>
                  
                </ul>
            </div>
        </nav>
    </aside>
    )
}

export default LeftPanel;