import React from "react";
import { Link, useLocation  } from "react-router-dom";

const SubMenuItem=(props)=>{
    const {part} = props
    const location = useLocation()
    return(
        <li className={location.pathname === part.link? "active" : null}>
    
            <i className={'menu-icon fa ' + part.icon}></i>
            <Link  to={part.link}>{part.name}</Link>
        </li>
  
    )
}

export default SubMenuItem;