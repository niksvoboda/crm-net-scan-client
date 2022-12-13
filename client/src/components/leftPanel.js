import React from "react";
import { Link, useLocation  } from "react-router-dom";
import MenuItem from "./MenuItem";
import {MAIN_ROUTE, LOGIN_ROUTE } from "../utils/RouterConst";
import {usermenu, adminmenu } from "../utils/MenuConst";

const LeftPanel = () =>{
    const location = useLocation()
    return(
        <aside id="left-panel" className="left-panel">
        <nav className="navbar navbar-expand-sm navbar-default">
            <div id="main-menu" className="main-menu collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li className={location.pathname === MAIN_ROUTE? "active" : null}>
                        <Link  to={MAIN_ROUTE}><i className="menu-icon fa fa-laptop"></i>На главную</Link>
                    </li>
                    
                    <li className="menu-title">Пользователь:</li>

                    {usermenu.map(part =>
                      <MenuItem key={part.name} part = {part}/>
                    )}
           
                    <li className="menu-title">Администратор:</li>
                    
                    {adminmenu.map(part =>
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