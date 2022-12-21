import React, { useState } from "react";
import BarChart from "../components/UI/BarChart";
import PieChart from "../components/UI/PieChart";

const Dashboard = () =>{
    const UserData = [
        {
        id:1,
        year:"Security score",
        userGain: 0.9,
        userLost: 823,
        },
        {
        id:2,
        year:"Risks",
        userGain: 0.14,
        userLost: 823,
        },
        {
        id:3,
        year:"Complianse score",
        userGain: 0.73,
        userLost: 823,
        }
    ]

    const [userData, setUserData] = useState({
        labels: UserData.map((data)=> data.year),
        datasets:[{
            label:"Vulnerability",
            data: UserData.map((data)=> data.userGain),
            backgroundColor:[
                "#FF0C00",
                "#4EFF44",
                "#FFFA00",
            ],
            borderColor: "#C0C0C0",
            borderWidth: 1,
        }]
    })
    console.log(userData)
    return(
        <div className="col-lg-12 row">
        <div className="card col-md-5" style={{height:'400px'}}>
            
            <div className="card-header">
                <h4>Vulnerability control</h4>
            </div>
            <div className="card-body" >
                 <BarChart chartData={userData} />
                 
            </div>
        </div>
        <div className="col-md-2" >

        </div>
        <div className="card col-md-5" style={{height:'400px'}}>
            
            <div className="card-header">
                <h4>Vulnerability control</h4>
            </div>
            <div className="card-body">
                 <PieChart chartData={userData} />
            </div>
        </div>
        </div>
    )
}

export default Dashboard;