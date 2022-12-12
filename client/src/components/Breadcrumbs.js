import React from "react";
import { Link, useLocation } from "react-router-dom";
import {MAIN_ROUTE} from "../utils/RouterConst";

const Breadcrumbs = (props) =>{
    const {name} = props
    const location = useLocation()
    
    return(
        <div className="breadcrumbs" style={{marginBottom: 25}}>
        <div className="breadcrumbs-inner">
            <div className="row m-0">
                <div className="col-sm-4">
                    <div className="page-header float-left">
                        <div className="page-title">
                            <h1>Dashboard</h1>
                        </div>
                    </div>
                </div>
                {location.pathname === MAIN_ROUTE?
                 <div></div> :
                 <div className="col-sm-8">
                 <div className="page-header float-right">
                     <div className="page-title">
                         <ol className="breadcrumb text-right">
                             
                              <li><Link  to={MAIN_ROUTE}>ГЛАВНАЯ </Link></li> <li className="active">{name}</li>
                         </ol>
                     </div>
                 </div>
             </div>}
            </div>
        </div>
    </div>
    )
}

export default Breadcrumbs;