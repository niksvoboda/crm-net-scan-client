import React from "react";
import { Link, useLocation } from "react-router-dom";
import {MAIN_ROUTE, LOGIN_ROUTE} from "../utils/RouterConst";
import {usermenu, adminmenu } from "../utils/MenuConst";

const Breadcrumbs = (props) =>{
   
    const location = useLocation()
    const menu = usermenu.concat(adminmenu)
    const result = menu.filter(menuitem => menuitem.link === location.pathname);

    return(
        <div className="breadcrumbs" style={{marginBottom: 25}}>
        <div className="breadcrumbs-inner">
            {location.pathname === MAIN_ROUTE || location.pathname === LOGIN_ROUTE?
                 <div></div> :
            <div className="row m-0">
                <div className="col-sm-4">
                    <div className="page-header float-left">
                        <div className="page-title">
                            <h1>Dashboard</h1>
                        </div>
                    </div>
                </div>
               
                 <div className="col-sm-8">
                 <div className="page-header float-right">
                     <div className="page-title">
                         <ol className="breadcrumb text-right">
                             
                              <li><Link  to={MAIN_ROUTE}>ГЛАВНАЯ </Link></li> <li className="active" style={{textTransform:'uppercase'}}>
                                {result[0].name}
                                </li>
                         </ol>
                     </div>
                 </div>
             </div>
            </div>}
        </div>
    </div>
    )
}

export default Breadcrumbs;