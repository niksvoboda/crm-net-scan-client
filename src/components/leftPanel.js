import React, {  useContext, useEffect,  useState } from "react";
import { Link, useLocation  } from "react-router-dom";
import MenuItem from "./MenuItem";
import SubMenuItem from "./SubMenuItem";
import {MAIN_ROUTE, LOGIN_ROUTE } from "../utils/RouterConst";
import {usermenu, adminmenu } from "../utils/MenuConst";
import { AuthContext } from "../context/index.js";

const LeftPanel = () =>{
    const location = useLocation()
    const subMenu = usermenu.slice(2,5)
    const {setIsAuth} = useContext(AuthContext)
    const logOut =(event)=>{
        setIsAuth(false);
        localStorage.removeItem('auth');
    }
  
    const [dropClass, setDropClass] = useState('menu-item-has-children dropdown show')
    const [subDropClass, setSubDropClass] = useState('sub-menu children dropdown-menu show')
    
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };

  

    useEffect(()=>{
        if (open) {
            setDropClass('menu-item-has-children dropdown show')  
            setSubDropClass('sub-menu children dropdown-menu show')
        } else {
            setDropClass('menu-item-has-children dropdown')  
            setSubDropClass('sub-menu children dropdown-menu')
        }

    },[open])

    return(
        <aside id="left-panel" className="left-panel">
        <nav className="navbar navbar-expand-sm navbar-default">
            <div id="main-menu" className="main-menu collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li className={location.pathname === MAIN_ROUTE? "active" : null}>
                        <Link  to={MAIN_ROUTE}><i className="menu-icon fa fa-laptop"></i>Общее состояние</Link>
                    </li>
                    <li className={location.pathname === usermenu[0].link? "active" : null}>
                        <Link  to={usermenu[0].link}><i className={'menu-icon fa ' + usermenu[0].icon}></i>{usermenu[0].name}</Link>
                    </li>
                    <li className={dropClass} >
                        <Link href="#" className="dropdown-toggle" aria-haspopup="true" aria-expanded="true" onClick={handleOpen}> 
                        <i className="menu-icon fa fa-puzzle-piece"></i>
                        Модель
                        </Link>
                        <ul className={subDropClass}>
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