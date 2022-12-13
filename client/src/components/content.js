import React from "react";
import Breadcrumbs from "./Breadcrumbs";

const Content = (props) =>{
   const {component} = props
   console.log(component)
    return(
        <div>
         <Breadcrumbs/>
         <div align="center" className="contetnt" style={{
            minHeight: '90vh', 
           // textAlign: 'center', 
            justifyСontent:  'center',
            padding: '30px' 
             }}>
            <br/><br/><br/><br/><br/>
            {component}
         </div>
         </div>
    )
}

export default Content;