import React from "react";


const Nods = () =>{

    const mokNods = [
        {name: 'office_node', ip: '10.10.100.1', os: 'Ubuntu', os_version: '20.01', doker_version: '19.03.8', orchestrator: 'Kubernets', orchestrator_version:'5.1'},
        {name: 'room_node', ip: '10.10.100.2', os: 'Ubuntu', os_version: '18.06', doker_version: '17.13.5', orchestrator: 'OpenShift', orchestrator_version:'3.1'},
        {name: 'footer_node', ip: '10.10.100.2', os: 'Ubuntu', os_version: '19.05', doker_version: '17.13.5', orchestrator: 'Nomad ', orchestrator_version:'4.2'},
        {name: 'office_node', ip: '10.10.100.1', os: 'Ubuntu', os_version: '20.01', doker_version: '19.03.8', orchestrator: 'Kubernets', orchestrator_version:'5.1'},
        {name: 'room_node', ip: '10.10.100.2', os: 'Ubuntu', os_version: '18.06', doker_version: '17.13.5', orchestrator: 'OpenShift', orchestrator_version:'3.1'},
        {name: 'footer_node', ip: '10.10.100.2', os: 'Ubuntu', os_version: '19.05', doker_version: '17.13.5', orchestrator: 'Nomad ', orchestrator_version:'4.2'},
        {name: 'office_node', ip: '10.10.100.1', os: 'Ubuntu', os_version: '20.01', doker_version: '19.03.8', orchestrator: 'Kubernets', orchestrator_version:'5.1'},
        {name: 'room_node', ip: '10.10.100.2', os: 'Ubuntu', os_version: '18.06', doker_version: '17.13.5', orchestrator: 'OpenShift', orchestrator_version:'3.1'},
        {name: 'footer_node', ip: '10.10.100.2', os: 'Ubuntu', os_version: '19.05', doker_version: '17.13.5', orchestrator: 'Nomad ', orchestrator_version:'4.2'},
        {name: 'office_node', ip: '10.10.100.1', os: 'Ubuntu', os_version: '20.01', doker_version: '19.03.8', orchestrator: 'Kubernets', orchestrator_version:'5.1'},
        {name: 'room_node', ip: '10.10.100.2', os: 'Ubuntu', os_version: '18.06', doker_version: '17.13.5', orchestrator: 'OpenShift', orchestrator_version:'3.1'},
        {name: 'footer_node', ip: '10.10.100.2', os: 'Ubuntu', os_version: '19.05', doker_version: '17.13.5', orchestrator: 'Nomad ', orchestrator_version:'4.2'},
        {name: 'office_node', ip: '10.10.100.1', os: 'Ubuntu', os_version: '20.01', doker_version: '19.03.8', orchestrator: 'Kubernets', orchestrator_version:'5.1'},
        {name: 'room_node', ip: '10.10.100.2', os: 'Ubuntu', os_version: '18.06', doker_version: '17.13.5', orchestrator: 'OpenShift', orchestrator_version:'3.1'},
        {name: 'footer_node', ip: '10.10.100.2', os: 'Ubuntu', os_version: '19.05', doker_version: '17.13.5', orchestrator: 'Nomad ', orchestrator_version:'4.2'},
        {name: 'office_node', ip: '10.10.100.1', os: 'Ubuntu', os_version: '20.01', doker_version: '19.03.8', orchestrator: 'Kubernets', orchestrator_version:'5.1'},
        {name: 'room_node', ip: '10.10.100.2', os: 'Ubuntu', os_version: '18.06', doker_version: '17.13.5', orchestrator: 'OpenShift', orchestrator_version:'3.1'},
        {name: 'footer_node', ip: '10.10.100.2', os: 'Ubuntu', os_version: '19.05', doker_version: '17.13.5', orchestrator: 'Nomad ', orchestrator_version:'4.2'},
    ]
    return(
        <div>
            <div className="animated fadeIn">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <strong className="card-title">Информация о нодах</strong>
                            </div>
                            <div className="card-body">
                                <table id="bootstrap-data-table" className="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Name node</th>
                                            <th>IP address</th>
                                            <th>OS</th>
                                            <th>OS version</th>
                                            <th>Doker version</th>
                                            <th>Orchestrator</th>
                                            <th>Orchestrator version</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            mokNods.map(mok =>  <tr key = {mokNods.indexOf(mok)}>
                                                <td>{mok.name}</td>
                                                <td>{mok.ip}</td>
                                                <td>{mok.os}</td>
                                                <td>{mok.os_version}</td>
                                                <td>{mok.doker_version}</td>
                                                <td>{mok.orchestrator}</td>
                                                <td>{mok.orchestrator_version}</td>
                                                
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

export default Nods;