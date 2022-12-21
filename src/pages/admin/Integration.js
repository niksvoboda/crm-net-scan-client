import React from "react";


const Integrations = () =>{

    return(
            <div className="row" style={{textAlign: 'left'}}>
                <div className="col-lg-6">
                    <div className="card">
                            <div className="card-header">
                                <strong>Cопоставление с ролями в АД</strong>
                            </div>
                            <div className="card-body card-block">
                                <div className="form-group">
                                         <label className=" form-control-label">Роль в Active Directory:</label>
                                        <div className="input-group">
                                        <div className="input-group-addon"><i className="fa  fa-folder-open"></i></div>
                                            <select name="select" id="select" className="form-control">
                                                <option value="0">Выбрать роль в Active Directory:</option>
                                                <option value="1">Полные права</option>
                                                <option value="2">Системный администратор</option>
                                                <option value="3">Оператор</option>
                                            </select>
                                        </div>
                                </div>
                
                                <div className="form-group">
                                         <label className=" form-control-label">Роль в системе:</label>
                                        <div className="input-group">
                                        <div className="input-group-addon"><i className="fa fa-users"></i></div>
                                            <select name="select" id="select" className="form-control">
                                                <option value="0">Выбрать роль в системе:</option>
                                                <option value="1">Полные права</option>
                                                <option value="2">Системный администратор</option>
                                                <option value="3">Оператор</option>
                                            </select>
                                        </div>
                                </div>

                                <div className="form-actions form-group">
                                 <button type="submit" className="btn btn-primary btn-sm">ПРИВЯЗАТЬ</button> &nbsp;
                                 <button type="submit" className="btn btn-warning btn-sm">ОТВЯЗАТЬ</button>
                                 </div>
                                </div>
                                <div className="card-footer">
                                <button type="submit" className="btn btn-primary btn-sm"> </button>
                                <button type="reset" className="btn btn-danger btn-sm"> </button>
                        </div>
                      
                    </div>





                    <div className="card">
                            <div className="card-header">
                                <strong>Cопоставление  с учетными записями АД</strong>
                            </div>
                            <div className="card-body card-block">

                            <div className="form-group">
                                         <label className=" form-control-label">Учетная запись в Active Directory:</label>
                                        <div className="input-group">
                                        <div className="input-group-addon"><i className="fa  fa-folder-open"></i></div>
                                            <select name="select" id="select" className="form-control">
                                                <option value="0">Выбрать учетную запись в Active Directory:</option>
                                                <option value="1">Сергей Н</option>
                                                <option value="2">Федор П</option>
                                                <option value="4">Святослава Ш</option>
                                                <option value="5">Никита П</option>
                                                <option value="6">Владимир П</option>
                                                <option value="7">Игорь Е</option>
                                            </select>
                                        </div>
                                </div>
                
                                <div className="form-group">
                                         <label className=" form-control-label">Учетная запись в системе:</label>
                                        <div className="input-group">
                                        <div className="input-group-addon"><i className="fa fa-users"></i></div>
                                            <select name="select" id="select" className="form-control">
                                                <option value="0">Выбрать учетную запись в системе:</option>
                                                <option value="1">Сергей Н</option>
                                                <option value="2">Федор П</option>
                                                <option value="4">Святослава Ш</option>
                                                <option value="5">Никита П</option>
                                                <option value="6">Владимир П</option>
                                                <option value="7">Игорь Е</option>
                                            </select>
                                        </div>
                                </div>

                                <div className="form-actions form-group">
                                 <button type="submit" className="btn btn-primary btn-sm">ПРИВЯЗАТЬ</button> &nbsp;
                                 <button type="submit" className="btn btn-warning btn-sm">ОТВЯЗАТЬ</button>
                                </div>

                                </div>
                                <div className="card-footer">
                                <button type="submit" className="btn btn-primary btn-sm"> </button>
                                <button type="reset" className="btn btn-danger btn-sm"> </button>
                        </div>
                      
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header">
                        <strong>Включение возможности входа по LDAP:</strong>
                        </div>
                        <div className="card-body card-block">
                        <form action="#" method="post" encType="multipart/form-data" className="form-horizontal">
                            <div className="row form-group">
                            <div className="col-12 col-md-12">
                                <label className=" form-control-label"> Статус: <strong>Активно</strong></label></div>
                            </div>
                            <div className="row form-group">
                           
                            <div className="col col-md-3"><label htmlFor="text-input" className=" form-control-label">Найстроки:</label></div>
                            <div className="col-12 col-md-9">
                                <input type="text" id="text-input" name="text-input" placeholder="Укажите ..." className="form-control"/>
                            </div>
                            </div>
                            <div className="form-actions form-group">
                            <button type="submit" className="btn btn-success btn-sm">ВКЛЮЧИТЬ</button> &nbsp;
                            <button type="submit" className="btn btn-danger btn-sm">ВЫКЛЮЧИТЬ</button> &nbsp;
                            <button type="submit" className="btn btn-primary btn-sm">СОХРАНИТЬ НАСТРОЙКИ</button>
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
    )
}

export default Integrations;