import React from "react";

const Vulnerabilities = () => {
    const mokVulnerabilities = [
        {level: 'Low', cve: 'CVE', title: 'title', doker_os: 'win 10', name_cont: 'new_doker', sec_score: 13 },
        {level: 'Low', cve: 'CVE', title: 'title', doker_os: 'win 10', name_cont: 'new_doker', sec_score: 13 },
        {level: 'Low', cve: 'CVE', title: 'title', doker_os: 'win 10', name_cont: 'new_doker', sec_score: 13 },
        {level: 'Medium', cve: 'CVE', title: 'title', doker_os: 'win 7', name_cont: 'new_doker', sec_score: 33 },
        {level: 'Medium', cve: 'CVE', title: 'title', doker_os: 'win 7', name_cont: 'new_doker', sec_score: 33 },
        {level: 'Medium', cve: 'CVE', title: 'title', doker_os: 'win 7', name_cont: 'new_doker', sec_score: 33 },
        {level: 'Medium', cve: 'CVE', title: 'title', doker_os: 'win 7', name_cont: 'new_doker', sec_score: 33 },
        {level: 'Medium', cve: 'CVE', title: 'title', doker_os: 'win 7', name_cont: 'new_doker', sec_score: 33 },
        {level: 'Medium', cve: 'CVE', title: 'title', doker_os: 'win 7', name_cont: 'new_doker', sec_score: 33 },
        {level: 'Medium', cve: 'CVE', title: 'title', doker_os: 'win 7', name_cont: 'new_doker', sec_score: 33 },
        {level: 'Medium', cve: 'CVE', title: 'title', doker_os: 'win 7', name_cont: 'new_doker', sec_score: 33 },
        {level: 'Medium', cve: 'CVE', title: 'title', doker_os: 'win 7', name_cont: 'new_doker', sec_score: 33 },
        {level: 'Medium', cve: 'CVE', title: 'title', doker_os: 'win 7', name_cont: 'new_doker', sec_score: 33 },
        {level: 'Medium', cve: 'CVE', title: 'title', doker_os: 'win 7', name_cont: 'new_doker', sec_score: 33 },
        {level: 'Medium', cve: 'CVE', title: 'title', doker_os: 'win 7', name_cont: 'new_doker', sec_score: 33 },
        {level: 'Medium', cve: 'CVE', title: 'title', doker_os: 'win 7', name_cont: 'new_doker', sec_score: 33 },
    ]
    return(
        <div>
            <div className="animated fadeIn">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <strong className="card-title">Информация о уязвимостях</strong>
                            </div>
                            <div className="card-body">
                                <table id="bootstrap-data-table" className="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Threat level</th>
                                            <th>CVE</th>
                                            <th>Title</th>
                                            <th>Dokers OS</th>
                                            <th>Name containers</th>
                                            <th>Security score</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            mokVulnerabilities.map(mok =>  <tr key = {mokVulnerabilities.indexOf(mok)}>
                                                <td>{mok.level}</td>
                                                <td>{mok.cve}</td>
                                                <td>{mok.title}</td>
                                                <td>{mok.doker_os}</td>
                                                <td>{mok.name_cont}</td>
                                                <td>{mok.sec_score}</td>
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

export default Vulnerabilities;