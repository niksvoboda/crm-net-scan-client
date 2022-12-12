import React from "react";
import { Link, useLocation  } from "react-router-dom";

const MenuItem=(props)=>{
    const {part} = props
    const location = useLocation()
    const thisLink = location.pathname 
    const classActiv = 'active'
    console.log(part)
    return(
        <li className={location.pathname === part.link? classActiv : null}>
        <Link  to={part.link}><i className={'menu-icon fa ' + part.icon}></i>{part.name}</Link>
       </li>
    )
}

export default MenuItem;