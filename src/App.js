import LeftPanel from './components/leftPanel'
import Header from './components/header';
import {
  BrowserRouter,
} from "react-router-dom";
import AppRouter from './components/AppRouter';
import React, { useEffect, useState } from "react";

function App() {
  
  const [togglePanel, setTogglePanel] = useState(false)

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
