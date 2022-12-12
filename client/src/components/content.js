import React from "react";
import Breadcrumbs from "./Breadcrumbs";

const Content = (props) =>{
   const {name} = props
   console.log(name)
    return(
        <div>
         <Breadcrumbs name={name}/>
        <div className="contetnt" >
            <br/><br/><br/><br/><br/><br/><br/>
        </div>
        </div>
    )
}

export default Content;