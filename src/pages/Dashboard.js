import React from "react";


const Dashboard = () =>{

    return(
        <div className="col-lg-12">
        <div className="card">
            <div className="card-header">
                <h4>Setting Colours Dynamically</h4>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-3">
                        <span className="bar-colours-1">5,3,9,6,5,9,7,3,5,2</span>
                    </div>
                    <div className="col-lg-3">
                        <span className="bar-colours-2">5,3,2,-1,-3,-2,2,3,5,2</span>
                    </div>
                    <div className="col-lg-3">
                        <span className="bar-colours-3">0,-3,-6,-4,-5,-4,-7,-3,-5,-2</span>
                    </div>
                    <div className="col-lg-3">
                        <span className="pie-colours-2">5,3,9,6,5</span>
                    </div>
                </div>
            </div>
        </div>
        
            <script src="https://cdn.jsdelivr.net/npm/jquery@2.2.4/dist/jquery.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.4/dist/umd/popper.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/jquery-match-height@0.7.2/dist/jquery.matchHeight.min.js"></script>
            <script src="http://localhost:3000/assets/js/main.js"></script>

            <script src="https://cdn.jsdelivr.net/npm/peity@3.3.0/jquery.peity.min.js"></script>
           
            <script src="http://localhost:3000/assets/js/init/peitychart-init.js"></script>
    </div>
    )
}

export default Dashboard;