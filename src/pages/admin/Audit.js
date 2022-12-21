import React from "react";


const Audit = () =>{

    return(
        <div className="row" style={{textAlign: 'left'}}>
            <div className="col-lg-6">
                             <div className="card">
                            <div className="card-header">
                                <strong>Создать отчет о действиях пользователей:</strong>
                            </div>
                            <div className="card-body card-block">
                                <div className="form-group">
                                    <label className=" form-control-label">Введите период отчета:</label>
                                    <div className="input-group">
                                        <div className="input-group-addon"><i className="fa fa-calendar"></i></div>
                                        <input className="form-control"/>
                                    </div>
                                    <small className="form-text text-muted">ex. 10/12/2022  - 20/12/2022</small>
                                </div>
                          

                                <div className="form-group">
                                         <label className=" form-control-label">Пожалуйста укажите события:</label>
                                        <div className="input-group">
                                        <div className="input-group-addon"><i className="fa  fa-folder-open"></i></div>
                                            <select name="select" id="select" className="form-control">
                                                <option value="0">Выбрать события:</option>
                                                <option value="1">Сканирование</option>
                                                <option value="2">Вход в систему</option>
                                                <option value="4">Выход из системы</option>
                                                <option value="5">Действия в консоли</option>
                                                <option value="6">Просмотр разделов</option>
                                                <option value="7">Просмотр отчетов</option>
                                            </select>
                                        </div>
                                </div>
                
                                <div className="form-group">
                                         <label className=" form-control-label">Пожалуйста укажите пользователей:</label>
                                        <div className="input-group">
                                        <div className="input-group-addon"><i className="fa fa-users"></i></div>
                                            <select name="select" id="select" className="form-control">
                                                <option value="0">Выбрать пользователей:</option>
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
                                 <button type="submit" className="btn btn-primary btn-sm">ПОКАЗАТЬ</button> &nbsp;
                                 <button type="submit" className="btn btn-warning btn-sm">СОХРАНИТЬ В ФАЙЛ</button>
                                 </div>
                                </div>
                                <div className="card-footer">
                                <button type="submit" className="btn btn-primary btn-sm"></button>
                                <button type="reset" className="btn btn-danger btn-sm"></button>
                                </div>
                                </div>


           
             </div>

                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header">
                        <strong>Добавить сервер бэкапов логов:</strong>
                        </div>
                        <div className="card-body card-block">
                        <form action="#" method="post" enctype="multipart/form-data" className="form-horizontal">
                        <div className="row form-group">
                            <div className="col-12 col-md-12">
                                <label className=" form-control-label">Укажите путь:</label></div>
                            </div>
                            <div className="row form-group">
                            <div className="col col-md-3"><label for="text-input" className=" form-control-label">Путь:</label></div>
                            <div className="col-12 col-md-9">
                                <input type="text" id="text-input" name="text-input" placeholder="Укажите путь..." className="form-control"/>
                                <small className="form-text text-muted">ex: http://10.10.1.79:3000/audits/writepath</small></div>
                            </div>
                            <div className="form-actions form-group">
                            <button type="submit" className="btn btn-primary btn-sm">СОХРАНИТЬ</button>
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

export default Audit;