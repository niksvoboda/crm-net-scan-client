import React from "react";


const Console = () =>{
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
        {name: 'Scan 10.10.100.0', type: 'scaning', start: '20/12/2022 17:51', end: '20/12/2022 18:32', status: 'End', name_creator: 'Sergey'},
        {name: 'Scan 10.10.113.0', type: 'scaning', start: '18/12/2022 11:20', end: '-------', status: 'live', name_creator: 'Fedor'},
        {name: 'Scan 10.10.144.0', type: 'scaning', start: '19/12/2022 16:51', end: '20/12/2022 10:50', status: 'End', name_creator: 'Sergey'},
        {name: 'Scan 10.10.101.0', type: 'scaning', start: '19/12/2022 16:51', end: '20/12/2022 10:50', status: 'Error', name_creator: 'Vlad'},
        {name: 'Scan 10.10.100.0', type: 'scaning', start: '20/12/2022 17:51', end: '20/12/2022 18:32', status: 'End', name_creator: 'Sergey'},
        {name: 'Scan 10.10.113.0', type: 'scaning', start: '18/12/2022 11:20', end: '-------', status: 'live', name_creator: 'Fedor'},
        {name: 'Scan 10.10.144.0', type: 'scaning', start: '19/12/2022 16:51', end: '20/12/2022 10:50', status: 'End', name_creator: 'Sergey'},
        {name: 'Scan 10.10.101.0', type: 'scaning', start: '19/12/2022 16:51', end: '20/12/2022 10:50', status: 'Error', name_creator: 'Vlad'},
        {name: 'Scan 10.10.100.0', type: 'scaning', start: '20/12/2022 17:51', end: '20/12/2022 18:32', status: 'End', name_creator: 'Sergey'},
        {name: 'Scan 10.10.113.0', type: 'scaning', start: '18/12/2022 11:20', end: '-------', status: 'live', name_creator: 'Fedor'},
        {name: 'Scan 10.10.144.0', type: 'scaning', start: '19/12/2022 16:51', end: '20/12/2022 10:50', status: 'End', name_creator: 'Sergey'},
        {name: 'Scan 10.10.101.0', type: 'scaning', start: '19/12/2022 16:51', end: '20/12/2022 10:50', status: 'Error', name_creator: 'Vlad'},
        {name: 'Scan 10.10.100.0', type: 'scaning', start: '20/12/2022 17:51', end: '20/12/2022 18:32', status: 'End', name_creator: 'Sergey'},
        {name: 'Scan 10.10.113.0', type: 'scaning', start: '18/12/2022 11:20', end: '-------', status: 'live', name_creator: 'Fedor'},
        {name: 'Scan 10.10.144.0', type: 'scaning', start: '19/12/2022 16:51', end: '20/12/2022 10:50', status: 'End', name_creator: 'Sergey'},
        {name: 'Scan 10.10.101.0', type: 'scaning', start: '19/12/2022 16:51', end: '20/12/2022 10:50', status: 'Error', name_creator: 'Vlad'},
        {name: 'Scan 10.10.100.0', type: 'scaning', start: '20/12/2022 17:51', end: '20/12/2022 18:32', status: 'End', name_creator: 'Sergey'},
        {name: 'Scan 10.10.113.0', type: 'scaning', start: '18/12/2022 11:20', end: '-------', status: 'live', name_creator: 'Fedor'},
        {name: 'Scan 10.10.144.0', type: 'scaning', start: '19/12/2022 16:51', end: '20/12/2022 10:50', status: 'End', name_creator: 'Sergey'},
        {name: 'Scan 10.10.101.0', type: 'scaning', start: '19/12/2022 16:51', end: '20/12/2022 10:50', status: 'Error', name_creator: 'Vlad'},

    ]
    return(
        <div>
            <div className="animated fadeIn">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header" style={{height:'100%', padding: '0 1.25rem'}}>

                            <div className="row">
                            <div className="col-sm" style={tabStyleActive}>
                                Все задачи
                                </div>
                                <div className="col-sm"  style={tabStyle}>
                                Запущенные
                                </div>
                                <div className="col-sm" style={tabStyle}>
                                Завершенные
                                </div>
                                <div className="col-sm" style={tabStyle}>
                                С ошибкой
                                </div>
                                <div className="col-sm" style={tabStyle}>
                                Группы задач
                                </div>
                            </div>
                              
                            </div>
                            <div className="card-body">
                                <table id="bootstrap-data-table" className="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Type</th>
                                            <th>Start</th>
                                            <th>End</th>
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

export default Console;