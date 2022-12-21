import React from "react";


const Net = () =>{

  return(
    <div class="row">
     <div class="col-lg-6">
            <div class="card">
              <div class="card-header">
                <strong>Загрузить сертфикат SSL</strong>
              </div>
              <div class="card-body card-block">
                <form action="#" method="post" enctype="multipart/form-data" class="form-horizontal">
                  <div class="row form-group">
                    <div class="col-12 col-md-12"><label class=" form-control-label">Загрузить сертификат:</label></div>
                  </div>
                  <div class="row form-group">
                    <div class="col col-md-3"><label for="text-input" class=" form-control-label">Имя:</label></div>
                    <div class="col-12 col-md-9">
                      <input type="text" id="text-input" name="text-input" placeholder="Укажите имя сертифика..." class="form-control"/><small class="form-text text-muted">не более 256 символов</small></div>
                  </div>
                  <div class="row form-group">
                    <div class="col col-md-3"><label for="email-input" class=" form-control-label">Примечание:</label></div>
                    <div class="col-12 col-md-9">
                      <input type="text" id="text-input" name="text-input" placeholder="Укажите примечание..." class="form-control"/><small class="form-text text-muted">не более 256 символов</small></div>
                  </div>
                  <div class="row form-group">
                    <div class="col col-md-3"><label for="textarea-input" class=" form-control-label">Сертификат:</label></div>
                    <div class="col-12 col-md-9">
                      <textarea name="textarea-input" id="textarea-input" rows="9" placeholder="Вставить содержимое сертификата..." class="form-control"></textarea></div>
                  </div>

                  <div class="row form-group">
                    <div class="col-12 col-md-12"><label class=" form-control-label">Загрузить сертификат из файла:</label></div>
                  </div>
                  <div class="row form-group">
                    <div class="col col-md-3">
                      <label for="file-input" class=" form-control-label">Файл сертификата:</label>
                      </div>
                    <div class="col-12 col-md-9"><input type="file" id="file-input" name="file-input" class="form-control-file"/></div>
                  </div>
                  <div class="form-actions form-group">
                  <button type="submit" class="btn btn-primary btn-sm">ЗАГРУЗИТЬ</button>
                  </div>
          </form> 
          </div>
          <div class="card-footer">
                <button type="submit" class="btn btn-primary btn-sm"></button>
                <button type="reset" class="btn btn-danger btn-sm"></button>
              </div>
          </div>
          </div>

            <div class="col-lg-6">
            <div class="card">
              <div class="card-header">
                <strong>Настройка портов:</strong>
              </div>
              <div class="card-body card-block">
                <form action="#" method="post" enctype="multipart/form-data" class="form-horizontal">

                  <div class="row form-group">
                    <div class="col col-md-6">
                        <label for="text-input" class=" form-control-label">Порт фронтенда:</label></div>
                    <div class="col-12 col-md-6">
                      <input type="number" id="text-input" name="text-input" placeholder="3000" class="form-control"/><small class="form-text text-muted">Допустимый диапазон: 1-65535</small></div>
                  </div>
                  <div class="row form-group">
                    <div class="col col-md-6"><label for="email-input" class=" form-control-label">Порт бэкенда:</label></div>
                    <div class="col-12 col-md-6">
                      <input type="number" id="text2-input" name="text-input" placeholder="5000" class="form-control"/><small class="form-text text-muted">Допустимый диапазон: 1-65535</small></div>
                  </div>
               
                  <div class="form-actions form-group">
                  <button type="submit" class="btn btn-primary btn-sm">СОХРАНИТЬ</button>
                  </div>
          </form> 
          </div>
          <div class="card-footer">
                <button type="submit" class="btn btn-primary btn-sm"></button>
                <button type="reset" class="btn btn-danger btn-sm"></button>
              </div>
          </div>
          <div class="card">
              <div class="card-header">
                <strong>Настройки SSL</strong>
              </div>
              <div class="card-body card-block">
              <div class="row form-group">
                    <div class="col-12 col-md-12"><label class=" form-control-label">Установить сертификат:</label></div>
                  </div>
                <form action="#" method="post" enctype="multipart/form-data" class="form-horizontal">
                  <div class="row form-group">
                    <div class="col col-md-3"><label for="select" class=" form-control-label">Выбрать</label></div>
                    <div class="col-12 col-md-9">
                      <select name="select" id="select" class="form-control">
                        <option value="0">Выберите сертификат</option>
                        <option value="1">1. SSL tensor 21.12.2022</option>
                        <option value="2">2. SSL lets encrypt 14.12.2022</option>
                        <option value="3">3. SSL Sbis 19.12.2022</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-actions form-group">
                  <button type="submit" class="btn btn-primary btn-sm">СОХРАНИТЬ</button>
                  </div>
                  </form>
              </div>
              <div class="card-footer">
                <button type="submit" class="btn btn-primary btn-sm"></button>
                <button type="reset" class="btn btn-danger btn-sm"></button>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Net;