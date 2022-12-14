import LeftPanel from './components/LeftPanel'
import Header from './components/Header';
import {
  BrowserRouter,
} from "react-router-dom";
import AppRouter from './components/AppRouter';
import React, { useEffect, useState } from "react";

function App() {
  const body = document.body
  const [togglePanel, setTogglePanel] = useState(false)
  useEffect(()=>{
     if(togglePanel){
      body.className = "open"
     }else {
      body.className = ""
     }
 }, [togglePanel])
  
  const setToggle = () =>{
    setTogglePanel(!togglePanel)
    console.log(togglePanel)
  }

  return (
    <BrowserRouter>
        <div className="App">
        <LeftPanel/>
       <div id="right-panel" className="right-panel">
       <Header setToggle={setToggle}/>
       <AppRouter/>
       </div>
       </div>
    </BrowserRouter>
  
  );
}

export default App;
