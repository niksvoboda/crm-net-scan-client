import React from "react";

const Login = () =>{

    return(
    <div className="col-lg-6">
        <div className="d-flex justify-content-between mt-3 pl-6 pr-6 card">
            <div className="card-header">
            <strong>Вход в систему</strong>
            </div>
            <div className="card-body card-block">
                <form action="#" method="post" enctype="multipart/form-data" className="form-horizontal">
                    <div className="row form-group">

                    <div className="col-12 col-md-12">
                    <input type="email" id="email-input" name="email-input" placeholder="Enter Login" className="form-control"/>
                    <small className="help-block form-text">Пожалуйста введите свой логин</small></div>
                    </div>
                    <div className="row form-group">
                    <div className="col-12 col-md-12">
                    <input type="password" id="password-input" name="password-input" placeholder="Password" className="form-control"/>
                    <small className="help-block form-text">Пожалуйста введите свой пароль</small></div>
                    </div>
                </form>
            </div>
        </div> 
    </div>
    )
}

export default Login;