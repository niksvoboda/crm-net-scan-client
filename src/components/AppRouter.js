import React, { useEffect, useState,  useContext } from "react";
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes } from '../routes';
import { AuthContext } from "../context/index.js";
import LeftPanel from './leftPanel'
import Header from './header';

const AppRouter = () =>{
    //const {user} = useContext(Context)
    const [togglePanel, setTogglePanel] = useState(false);
    const {isAuth} = useContext(AuthContext);

    useEffect(()=>{
       if(togglePanel){
        document.body.className = "open"
       }else {
        document.body.className = ""
       }
    }, [togglePanel])
    
    const setToggle = () =>{
      setTogglePanel(!togglePanel)
    }
 return(
   isAuth?
      <div>
         <LeftPanel/>
         <div id="right-panel" className="right-panel">
         <Header setToggle={setToggle}/>
            <Routes>
               { privateRoutes.map((p)=> 
                        <Route key={p.path} path = {p.path} element = {p.element}/>
                  )}    
            </Routes>
         </div>
      </div>
      
      :
      
      <div>
         <Routes>
            { publicRoutes.map((p)=> 
                     <Route key={p.path} path = {p.path} element = {p.element}/>
               )}    
         </Routes>
      </div>
   )
}

export default AppRouter;