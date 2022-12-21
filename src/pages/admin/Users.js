import React from "react";


const Users = () =>{
    const tabStyleActive = {
        background: 'white', 
        padding: '0.75rem 1.25rem', 
        borderRadius: '15px 15px 0px 0px' ,
        border: '1px solid',
        borderColor: 'rgba(0,0,0,.125) rgba(0,0,0,.125) rgba(0,0,0,0) rgba(0,0,0,.125)',
        maxWidth: '200px'}
    const tabStyle = {
           
            padding: '0.75rem 1.25rem', 
            borderRadius: '15px 15px 0px 0px' ,
            border: '1px solid',
            borderColor: 'rgba(0,0,0,.125) rgba(0,0,0,.125) rgba(0,0,0,0) rgba(0,0,0,.125)',
            maxWidth: '200px'}
    const mokNods = [
        {name: 'Федор П', type: 'разработчик', start: '20/12/2022 17:51', end: '20/12/2022 18:32', status: 'End', name_creator: 'Sergey'},
        {name: 'Святослав Ш', type: 'разработчик', start: '18/12/2022 11:20', end: '-------', status: 'live', name_creator: 'Fedor'},
        {name: 'Сергей Н', type: 'разработчик', start: '19/12/2022 16:51', end: '20/12/2022 10:50', status: 'End', name_creator: 'Sergey'},
        {name: 'Владимир П', type: 'разработчик', start: '19/12/2022 16:51', end: '20/12/2022 10:50', status: 'Error', name_creator: 'Vlad'},


    ]
    return(
        <div style={{textAlign: 'left'}}>
            <div className="animated fadeIn">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header" style={{height:'100%', padding: '0 1.25rem'}}>

                            <div className="row">
                            <div className="col-sm" style={tabStyleActive}>
                                Пользователи
                                </div>
                                <div className="col-sm"  style={tabStyle}>
                                Роли
                                </div>
                                <div className="col-sm" style={tabStyle}>
                                Тип авторизации
                                </div>
                             
                            </div>
                              
                            </div>
                            <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                <div className="card-header">
                                    <strong>Добавить пользователя:</strong>
                                </div>
                                <div className="card-body card-block">
                                    <form action="#" method="post" enctype="multipart/form-data" className="form-horizontal">
                                 
                                    <div className="row form-group">
                                        <div className="col col-md-3"><label for="text-input" className=" form-control-label">Имя:</label></div>
                                        <div className="col-12 col-md-3"><input type="text" id="text-input" name="text-input" placeholder="Укажите имя..." className="form-control"/></div>
                                        </div>
                                    <div className="row form-group">
                                        <div className="col col-md-3"><label for="text-input" className=" form-control-label">Фамилия:</label></div>
                                        <div className="col-12 col-md-3"><input type="text" id="text-input" name="text-input" placeholder="Укажите  фамилию..." className="form-control"/></div>
                                    
                                    </div>
                                    <div className="row form-group">
                                        <div className="col col-md-3"><label for="email-input" className=" form-control-label">Должность:</label></div>
                                        <div className="col-12 col-md-3">
                                        <input type="text" id="text-input" name="text-input" placeholder="Укажите примечание..." className="form-control"/></div>
                                    </div>
                                    <hr/>
                                    <div className="row form-group">
                                        <div className="col col-md-3"><label for="text-input" className=" form-control-label">Логин:</label></div>
                                        <div className="col-12 col-md-3"><input type="text" id="text-input" name="text-input" placeholder="Укажите логин..." className="form-control"/></div>
                                    
                                    </div>
                                    <div className="row form-group">
                                        <div className="col col-md-3"><label for="email-input" className=" form-control-label">Пароль:</label></div>
                                        <div className="col-12 col-md-3">
                                        <input type="text" id="text-input" name="text-input" placeholder="Укажите пароль..." className="form-control"/></div>
                                    </div>
                                    <hr/>
                                    <div className="row form-group">
                                        <div className="col col-md-3"><label for="textarea-input" className=" form-control-label">Примечания:</label></div>
                                        <div className="col-12 col-md-9">
                                        <textarea name="textarea-input" id="textarea-input" rows="9" placeholder="Информация о пользователе..." className="form-control"></textarea></div>
                                    </div>

                                    
                                    <hr/>
                                    <div className="form-group">
                                        <div className="col col-md-6">
                                        <label for="email-input" className=" form-control-label">Тип авторизации:</label>
                                        </div>
                                        <div className="col-12 col-md-6">
                                        <div className="input-group">
                                        <div className="input-group-addon"><i className="fa fa-sign-in"></i></div>
                                            <select name="select" id="select" className="form-control">
                                                <option value="0">Выбрать тип:</option>
                                                <option value="1">Логин и пароль системы</option>
                                                <option value="2">Учетная запись Active Directory</option>
                                             
                                            </select>
                                        </div>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row form-group">
                                                                           </div>

                                    <div class="row form-group">
                                        <div class="col col-md-3"><label class=" form-control-label">Права пользователя:</label></div>
                                        <div class="col col-md-9">
                                            <div class="form-check">
                                                <div class="checkbox">
                                                    <label for="checkbox1" class="form-check-label ">
                                                        <input type="checkbox" id="checkbox1" name="checkbox1" value="option1" class="form-check-input"/>Уязвимости
                                                    </label>
                                                </div>
                                                <div class="checkbox">
                                                    <label for="checkbox2" class="form-check-label ">
                                                        <input type="checkbox" id="checkbox2" name="checkbox2" value="option2" class="form-check-input"/>Модель
                                                    </label>
                                                </div>
                                                <div class="checkbox">
                                                    <label for="checkbox3" class="form-check-label ">
                                                        <input type="checkbox" id="checkbox3" name="checkbox3" value="option3" class="form-check-input"/>Ноды
                                                    </label>
                                                </div>
                                                <div class="checkbox">
                                                    <label for="checkbox3" class="form-check-label ">
                                                        <input type="checkbox" id="checkbox3" name="checkbox3" value="option3" class="form-check-input"/>Контейнеры
                                                    </label>
                                                </div>
                                                <div class="checkbox">
                                                    <label for="checkbox3" class="form-check-label ">
                                                        <input type="checkbox" id="checkbox3" name="checkbox3" value="option3" class="form-check-input"/>Консоль
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <hr/>
                                    <div className="form-actions form-group"><br/>
                                    <button type="submit" className="btn btn-warning btn-sm"><li className="fa fa-check"></li> СОЗДАТЬ ПОЛЬЗОВАТЕЛЯ</button> 
                                    </div>
                            </form> 
                            </div>
                            <div className="card-footer">
                                    <button type="submit" className="btn btn-primary btn-sm"></button>
                                    <button type="reset" className="btn btn-danger btn-sm"></button>
                                </div>
                            </div>
                            </div>                              
                            </div>

                            <div className="card-body">
                                <table id="bootstrap-data-table" className="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>job title</th>
                                            <th>Create</th>
                                            <th>Last visit</th>
                                            <th>Status</th>
                                            <th>Creator name</th>
                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            mokNods.map(mok =>  <tr key = {mokNods.indexOf(mok)}>
                                                <td>{mok.name}</td>
                                                <td>{mok.type}</td>
                                                <td>{mok.start}</td>
                                                <td>{mok.end}</td>
                                                <td>{mok.status}</td>
                                                <td>{mok.name_creator}</td>
                                                                                
                                            </tr>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Users;