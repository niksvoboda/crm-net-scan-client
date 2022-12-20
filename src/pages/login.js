import React, { useContext, useEffect } from "react";

import { AuthContext } from "../context"
import logo from "../images/logo.png"
    
const Login = () =>{

    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login =(event)=>{
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
        console.log(isAuth);
    }
    useEffect(()=>{
        document.body.className = "bg-dark"
    }, [])
    return(
    <div className="sufee-login d-flex align-content-center flex-wrap">
        <div className="container">
            <div className="login-content">
                <div className="login-logo">
                    
                        <img className="align-content" src={logo} alt=""/>
                    
                </div>
                <div className="login-form">
                    <form onSubmit={login}>
                        <div className="form-group">
                            <label>Имя пользователя</label>
                            <input type="text" className="form-control" placeholder="Введите имя..."/>
                        </div>
                        <div className="form-group">
                            <label>Ваш пароль</label>
                            <input type="password" className="form-control" placeholder="Введите пароль..."/>
                        </div>
                
                        <button type="submit" className="btn btn-success btn-flat m-b-30 m-t-30">Войти</button>
                        <div className="social-login-content">
                            <div className="social-button">
                                <button type="submit" className="btn facebook btn-flat btn-addon mb-3">Sign in with active directory</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Login;