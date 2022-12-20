import React, { useEffect, useState,  useContext } from "react";
import { Link, useLocation  } from "react-router-dom";
import MenuItem from "./MenuItem";
import SubMenuItem from "./SubMenuItem";
import {MAIN_ROUTE, LOGIN_ROUTE } from "../utils/RouterConst";
import {usermenu, adminmenu } from "../utils/MenuConst";
import { AuthContext } from "../context/index.js";

const LeftPanel = () =>{
    const location = useLocation()
    const subMenu = usermenu.slice(2,5)
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const logOut =(event)=>{
        setIsAuth(false);
        localStorage.removeItem('auth');
    }
    return(
        <aside id="left-panel" className="left-panel">
        <nav className="navbar navbar-expand-sm navbar-default">
            <div id="main-menu" className="main-menu collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li className={location.pathname === MAIN_ROUTE? "active" : null}>
                        <Link  to={MAIN_ROUTE}><i className="menu-icon fa fa-laptop"></i>Панель управления</Link>
                    </li>
                    <li className={location.pathname === usermenu[0].link? "active" : null}>
                        <Link  to={usermenu[0].link}><i className={'menu-icon fa ' + usermenu[0].icon}></i>{usermenu[0].name}</Link>
                    </li>
                    <li className="menu-item-has-children dropdown">
                        <Link href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> 
                        <i className="menu-icon fa fa-puzzle-piece"></i>
                        Модель
                        </Link>
                        <ul className="sub-menu children dropdown-menu">
                            {subMenu.map(part =>
                             <SubMenuItem key={part.name} part = {part}/>
                            )}
                        </ul>
                    </li>
                    <li className={location.pathname === usermenu[5].link? "active" : null}>
                         <Link  to={usermenu[5].link}><i className={'menu-icon fa ' + usermenu[5].icon}></i>{usermenu[5].name}</Link>
                    </li>
                    <li className={location.pathname === usermenu[6].link? "active" : null}>
                         <Link  to={usermenu[6].link}><i className={'menu-icon fa ' + usermenu[6].icon}></i>{usermenu[6].name}</Link>
                    </li>

                    <li className="menu-title">Администратор:</li>
                    
                    {adminmenu.map(part =>
                      <MenuItem key={part.name} part = {part}/>
                    )}

                    <li className="menu-title">Авторизация:</li>
                    <li className={location.pathname === LOGIN_ROUTE? "active" : null}>
                        <Link  to={LOGIN_ROUTE} onClick={logOut}> <i className="menu-icon fa fa-sign-out"></i>Выход</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </aside>
    )
}

export default LeftPanel;