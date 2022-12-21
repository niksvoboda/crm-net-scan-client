import {
  BrowserRouter,
} from "react-router-dom";
import AppRouter from './components/AppRouter';
import React, {  useState, useEffect } from "react";
import { AuthContext } from "./context";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(()=>{
    if(localStorage.getItem('auth')){
      setIsAuth(true);
    }
  },[])
  return (
    <div className="App">
    <AuthContext.Provider value={{
        isAuth,
        setIsAuth
        }}>  
    <BrowserRouter>

    <AppRouter/>

    </BrowserRouter>
    </AuthContext.Provider>
    </div>
  );
}

export default App;
