import React from "react";


const License = () =>{

    return(
        <div className="row" style={{textAlign: 'left'}}>
            <div className="col-lg-6">
               <div className="card">
                 <div className="card-header">
                   <strong>Активация лицензии:</strong>
                 </div>
                 <div className="card-body card-block">
                   <form action="#" method="post" enctype="multipart/form-data" className="form-horizontal">
                   <div className="row form-group">
                       <div className="col-12 col-md-12">
                        <label className=" form-control-label">Загрузить сертификат из файла:</label></div>
                     </div>
                     <div className="row form-group">
                       <div className="col col-md-3">
                         <label for="file-input" className=" form-control-label">Файл сертификата:</label>
                         </div>
                       <div className="col-12 col-md-9"><input type="file" id="file-input" name="file-input" className="form-control-file"/></div>
                     </div>
                     <div className="form-actions form-group">
                     <button type="submit" className="btn btn-primary btn-sm">ЗАГРУЗИТЬ</button>
                     </div>
                    <hr/>
                     <div className="row form-group">
                       <div className="col-12 col-md-12"><label className=" form-control-label">Если у вас есть 24 символьный ключ продукта вы можете активировать лицензию по сети:</label></div>
                     </div>

                     <div className="row form-group">
                       <div className="col col-md-3"><label for="text-input" className=" form-control-label">Ключ:</label></div>
                       <div className="col-12 col-md-9">
                         <input type="text" id="text-input" name="text-input" placeholder="Укажите ключ..." className="form-control"/><small className="form-text text-muted">не более 256 символов</small></div>
                     </div>
                     <div className="form-actions form-group">
                     <button type="submit" className="btn btn-danger btn-sm">АКТИВИРОВАТЬ</button>
                     </div>
             </form> 
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
                   <strong>Информация о лицензии:</strong>
                 </div>
                 <div className="card-body card-block">
                   <form action="#" method="post" enctype="multipart/form-data" className="form-horizontal">
                    <div className="row form-group">
                       <div className="col-12 col-md-12">
                        <label className=" form-control-label">
                        Регистрационный номер: 810033****G0<br/>
                        Тип лицензии: клиент<br/>
                        Наименование продукта:<br/>
                        Net Vulnerability monitoring system<br/>
                        Дата производства: 20.02.2019 10:26:05<br/>
                        Срок действия: не ограничен<br/>
                        Количество пользователей: 10<br/>
                        Количество пинкодов в группе: 1<br/>
                        Привязка: 3PC, Intel64 Family 6 Model 158 Stepping 10, 8157Mb RAM, Майкрософт Windows 10 Корпоративная LTSC<br/>
                        </label>
                        </div>
                     </div>
                     <hr/>
                     <div className="form-actions form-group">
                     <button type="submit" className="btn btn-success btn-sm">ОБНОВИТЬ ИНФОРМАЦИЮ</button>
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

export default License;