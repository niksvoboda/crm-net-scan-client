import React from "react";
import Breadcrumbs from "./Breadcrumbs";

const Content = (props) =>{
   const {component} = props
   
    return(
        <div>
         <Breadcrumbs/> <br/>
         <div align="center" className="contetnt" style={{
            minHeight: '90vh', 
           // textAlign: 'center', 
            justifyСontent:  'center',
            padding: '30px',
            marginTop: 30
             }}>
           
            {component}
         </div>
         </div>
    )
}

export default Content;