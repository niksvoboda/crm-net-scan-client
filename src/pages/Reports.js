import React from "react";


const Reports = () =>{
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

    
    return(
        <div>
            <div className="animated fadeIn">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header" style={{height:'100%', padding: '0 1.25rem'}}>

                            <div className="row">
                                <div className="col-sm" style={tabStyleActive}>
                                Risks
                                </div>
                                <div className="col-sm"  style={tabStyle}>
                                Complianse score
                                </div>
                                <div className="col-sm" style={tabStyle}>
                                Security score
                                </div>
                            </div>
                              
                            </div>
                            
                    

                            <div className="card-body">
                            <div className="col-xs-6 col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                <strong>Make report:</strong> <small> Risks</small>
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
                                         <label className=" form-control-label">Пожалуйста укажите сеть:</label>
                                        <div className="input-group">
                                        <div className="input-group-addon"><i className="fa fa-sitemap"></i></div>
                                            <select name="select" id="select" className="form-control">
                                                <option value="0">Выбрать сеть:</option>
                                                <option value="1">192.168.0.0</option>
                                                <option value="2">192.168.100.0</option>
                                                <option value="4">10.120.1.0</option>
                                                <option value="5">10.100.1.0</option>
                                                <option value="6">10.110.1.0</option>
                                                <option value="7">10.120.1.0</option>
                                            </select>
                                        </div>
                                </div>
                
                                <div className="form-group">
                                         <label className=" form-control-label">Пожалуйста укажите ноду:</label>
                                        <div className="input-group">
                                        <div className="input-group-addon"><i className="fa fa-tasks"></i></div>
                                            <select name="select" id="select" className="form-control">
                                                <option value="0">Выбрать ноду:</option>
                                                <option value="1">10.120.1.2</option>
                                                <option value="2">10.120.1.14</option>
                                                <option value="4">10.120.1.32</option>
                                                <option value="5">10.120.1.110</option>
                                                <option value="6">10.120.1.156</option>
                                                <option value="7">10.120.1.200</option>
                                            </select>
                                        </div>
                                </div>

                                <div className="form-group">
                                         <label className=" form-control-label">Пожалуйста укажите контейнер:</label>
                                        <div className="input-group">
                                        <div className="input-group-addon"><i className="fa fa-inbox"></i></div>
                                            <select name="select" id="select" className="form-control">
                                                <option value="0">Выбрать контейнер:</option>
                                                <option value="1">Docker 1 </option>
                                                <option value="2">Docker 2</option>
                                                <option value="4">Docker 3</option>
                                                <option value="5">Docker 4</option>
                              
                                            </select>
                                        </div>
                                </div>

                            
                           
                            </div>
                        </div>
                    </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )

}

export default Reports;