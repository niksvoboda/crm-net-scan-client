  import React from "react";
  import {Bar} from "react-chartjs-2";
  import {Chart as ChartJS} from "chart.js/auto";

  const BarChart = (props) =>{
    const {chartData} = props
    return(
        <div style={{height:'300px'}}>
            <Bar data={chartData} />
        </div>
    )
  }

  export default BarChart;