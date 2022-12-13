import React from "react";


const Login = () =>{

    return(
    <div class="col-lg-6">
        <div class="d-flex justify-content-between mt-3 pl-6 pr-6 card">
            <div class="card-header">
            <strong>Вход в систему</strong>
            </div>
            <div class="card-body card-block">
                <form action="#" method="post" enctype="multipart/form-data" class="form-horizontal">
                    <div class="row form-group">

                    <div class="col-12 col-md-12">
                    <input type="email" id="email-input" name="email-input" placeholder="Enter Login" class="form-control"/>
                    <small class="help-block form-text">Пожалуйста введите свой логин</small></div>
                    </div>
                    <div class="row form-group">
                    <div class="col-12 col-md-12">
                    <input type="password" id="password-input" name="password-input" placeholder="Password" class="form-control"/>
                    <small class="help-block form-text">Пожалуйста введите свой пароль</small></div>
                    </div>
                </form>
            </div>
        </div> 
    </div>
    )
}

export default Login;