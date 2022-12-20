import React from "react";


const Nets = () =>{

    const mokNets = [
        {name: 'Office', ip: '10.10.100.0', mask: '255.255.255.0', node: 'office_node', source: '10.10.100.1'},
        {name: 'Office', ip: '10.10.100.0', mask: '255.255.255.0', node: 'office_node', source: '10.10.100.1'},
        {name: 'Office', ip: '10.10.100.0', mask: '255.255.255.0', node: 'office_node', source: '10.10.100.1'},
        {name: 'Office', ip: '10.10.100.0', mask: '255.255.255.0', node: 'office_node', source: '10.10.100.1'},
        {name: 'Office', ip: '10.10.100.0', mask: '255.255.255.0', node: 'office_node', source: '10.10.100.1'},
        {name: 'Office', ip: '10.10.100.0', mask: '255.255.255.0', node: 'office_node', source: '10.10.100.1'},
        {name: 'Office', ip: '10.10.100.0', mask: '255.255.255.0', node: 'office_node', source: '10.10.100.1'},
        {name: 'Office', ip: '10.10.100.0', mask: '255.255.255.0', node: 'office_node', source: '10.10.100.1'},
         {name: 'Office', ip: '10.10.100.0', mask: '255.255.255.0', node: 'office_node', source: '10.10.100.1'},
         {name: 'Office', ip: '10.10.100.0', mask: '255.255.255.0', node: 'office_node', source: '10.10.100.1'},

    ]
    return(
        <div>
            <div className="animated fadeIn">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <strong className="card-title">Информация о сетях</strong>
                            </div>
                            <div className="card-body">
                                <table id="bootstrap-data-table" className="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>IP address</th>
                                            <th>Mask</th>
                                            <th>Node</th>
                                            <th>Source</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            mokNets.map(mok =>  <tr key = {mokNets.indexOf(mok)}>
                                                <td>{mok.name}</td>
                                                <td>{mok.ip}</td>
                                                <td>{mok.mask}</td>
                                                <td>{mok.node}</td>
                                                <td>{mok.source}</td>
                                                
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

export default Nets;