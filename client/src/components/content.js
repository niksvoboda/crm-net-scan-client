import React from "react";
import Breadcrumbs from "./Breadcrumbs";

const Content = (props) =>{
   const {component} = props
   console.log(component)
    return(
        <div>
         <Breadcrumbs/>
         <div className="contetnt" >
            <br/><br/><br/><br/><br/><br/><br/>
            {component}
         </div>
         </div>
    )
}

export default Content;