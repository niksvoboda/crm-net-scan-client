import React from "react";


const Containers = () =>{
    const mokNods = [
        {name: 'Docker 1', ip: '10.10.100.66', net: '10.10.100.0', port_use: '3376', port_map: '6504', file_name: 'office_doker', wild:'5.1'},
        {name: 'Docker 2', ip: '10.10.100.13', net: '10.10.100.0', port_use: '3376', port_map: '1154', file_name: 'office_doker', wild:'5.1'},
        {name: 'Docker 3', ip: '10.10.100.14', net: '10.10.100.0', port_use: '3376', port_map: '1244', file_name: 'office_doker', wild:'5.1'},
        {name: 'Docker 1', ip: '10.10.100.66', net: '10.10.100.0', port_use: '3376', port_map: '6504', file_name: 'office_doker', wild:'5.1'},
        {name: 'Docker 2', ip: '10.10.100.13', net: '10.10.100.0', port_use: '3376', port_map: '1154', file_name: 'office_doker', wild:'5.1'},
        {name: 'Docker 3', ip: '10.10.100.14', net: '10.10.100.0', port_use: '3376', port_map: '1244', file_name: 'office_doker', wild:'5.1'},
        {name: 'Docker 1', ip: '10.10.100.66', net: '10.10.100.0', port_use: '3376', port_map: '6504', file_name: 'office_doker', wild:'5.1'},
        {name: 'Docker 2', ip: '10.10.100.13', net: '10.10.100.0', port_use: '3376', port_map: '1154', file_name: 'office_doker', wild:'5.1'},
        {name: 'Docker 3', ip: '10.10.100.14', net: '10.10.100.0', port_use: '3376', port_map: '1244', file_name: 'office_doker', wild:'5.1'},
        {name: 'Docker 1', ip: '10.10.100.66', net: '10.10.100.0', port_use: '3376', port_map: '6504', file_name: 'office_doker', wild:'5.1'},
        {name: 'Docker 2', ip: '10.10.100.13', net: '10.10.100.0', port_use: '3376', port_map: '1154', file_name: 'office_doker', wild:'5.1'},
        {name: 'Docker 3', ip: '10.10.100.14', net: '10.10.100.0', port_use: '3376', port_map: '1244', file_name: 'office_doker', wild:'5.1'},
        {name: 'Docker 1', ip: '10.10.100.66', net: '10.10.100.0', port_use: '3376', port_map: '6504', file_name: 'office_doker', wild:'5.1'},
        {name: 'Docker 2', ip: '10.10.100.13', net: '10.10.100.0', port_use: '3376', port_map: '1154', file_name: 'office_doker', wild:'5.1'},
        {name: 'Docker 3', ip: '10.10.100.14', net: '10.10.100.0', port_use: '3376', port_map: '1244', file_name: 'office_doker', wild:'5.1'},
        {name: 'Docker 1', ip: '10.10.100.66', net: '10.10.100.0', port_use: '3376', port_map: '6504', file_name: 'office_doker', wild:'5.1'},
        {name: 'Docker 2', ip: '10.10.100.13', net: '10.10.100.0', port_use: '3376', port_map: '1154', file_name: 'office_doker', wild:'5.1'},
        {name: 'Docker 3', ip: '10.10.100.14', net: '10.10.100.0', port_use: '3376', port_map: '1244', file_name: 'office_doker', wild:'5.1'},
    ]
    return(
        <div>
            <div className="animated fadeIn">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <strong className="card-title">Информация о контейнерах</strong>
                            </div>
                            <div className="card-body">
                                <table id="bootstrap-data-table" className="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Name containers</th>
                                            <th>IP address</th>
                                            <th>Net address</th>
                                            <th>Port use</th>
                                            <th>Port mapping</th>
                                            <th>File name</th>
                                            <th>Wild</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            mokNods.map(mok =>  <tr key = {mokNods.indexOf(mok)}>
                                                <td>{mok.name}</td>
                                                <td>{mok.ip}</td>
                                                <td>{mok.net}</td>
                                                <td>{mok.port_use}</td>
                                                <td>{mok.port_map}</td>
                                                <td>{mok.file_name}</td>
                                                <td>{mok.wild}</td>
                                                
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

export default Containers;