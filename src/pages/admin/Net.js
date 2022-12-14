import React from "react";


const Net = () =>{

  return(
    <div className="row" style={{textAlign: 'left'}}>
     <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <strong>Загрузить сертфикат SSL</strong>
              </div>
              <div className="card-body card-block">
                <form action="#" method="post" encType="multipart/form-data" className="form-horizontal">
                  <div className="row form-group">
                    <div className="col-12 col-md-12"><label className=" form-control-label">Загрузить сертификат:</label></div>
                  </div>
                  <div className="row form-group">
                    <div className="col col-md-3"><label htmlFor="text-input" className=" form-control-label">Имя:</label></div>
                    <div className="col-12 col-md-9">
                      <input type="text" id="text-input" name="text-input" placeholder="Укажите имя сертифика..." className="form-control"/><small className="form-text text-muted">не более 256 символов</small></div>
                  </div>
                  <div className="row form-group">
                    <div className="col col-md-3"><label htmlFor="email-input" className=" form-control-label">Примечание:</label></div>
                    <div className="col-12 col-md-9">
                      <input type="text" id="text-input" name="text-input" placeholder="Укажите примечание..." className="form-control"/><small className="form-text text-muted">не более 256 символов</small></div>
                  </div>
                  <div className="row form-group">
                    <div className="col col-md-3"><label htmlFor="textarea-input" className=" form-control-label">Сертификат:</label></div>
                    <div className="col-12 col-md-9">
                      <textarea name="textarea-input" id="textarea-input" rows="9" placeholder="Вставить содержимое сертификата..." className="form-control"></textarea></div>
                  </div>
                  <hr/>
                  <div className="row form-group">
                    <div className="col-12 col-md-12"><label className=" form-control-label">Загрузить сертификат из файла:</label></div>
                  </div>
                  <div className="row form-group">
                    <div className="col col-md-4">
                      <label htmlFor="file-input" className=" form-control-label">Файл сертификата:</label>
                      </div>
                    <div className="col-12 col-md-8"><input type="file" id="file-input" name="file-input" className="form-control-file"/></div>
                  </div>
                  <hr/>
                  <div className="form-actions form-group"><br/>
                  <button type="submit" className="btn btn-danger btn-sm"><li className="fa fa-cloud-upload"></li> ЗАГРУЗИТЬ</button> 
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
                <strong>Настройка портов:</strong>
              </div>
              <div className="card-body card-block">
                <form action="#" method="post" encType="multipart/form-data" className="form-horizontal">

                  <div className="row form-group">
                    <div className="col col-md-6">
                        <label htmlFor="text-input" className=" form-control-label">Порт фронтенда:</label></div>
                    <div className="col-12 col-md-6">
                      <input type="number" id="text-input" name="text-input" placeholder="3000" className="form-control"/><small className="form-text text-muted">Допустимый диапазон: 1-65535</small></div>
                  </div>
                  <div className="row form-group">
                    <div className="col col-md-6"><label htmlFor="email-input" className=" form-control-label">Порт бэкенда:</label></div>
                    <div className="col-12 col-md-6">
                      <input type="number" id="text2-input" name="text-input" placeholder="5000" className="form-control"/><small className="form-text text-muted">Допустимый диапазон: 1-65535</small></div>
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
          <div className="card">
              <div className="card-header">
                <strong>Настройки SSL</strong>
              </div>
              <div className="card-body card-block">
              <div className="row form-group">
                    <div className="col-12 col-md-12"><label className=" form-control-label">Установить сертификат:</label></div>
                  </div>
                <form action="#" method="post" encType="multipart/form-data" className="form-horizontal">
                  <div className="row form-group">
                    <div className="col col-md-3"><label htmlFor="select" className=" form-control-label">Выбрать</label></div>
                    <div className="col-12 col-md-9">
                      <select name="select" id="select" className="form-control">
                        <option value="0">Выберите сертификат</option>
                        <option value="1">1. SSL tensor 21.12.2022</option>
                        <option value="2">2. SSL lets encrypt 14.12.2022</option>
                        <option value="3">3. SSL Sbis 19.12.2022</option>
                      </select>
                    </div>
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

export default Net;