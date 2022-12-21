import React from "react";
import {Pie} from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";

const PieChart = (props) =>{
  const {chartData} = props
  return(
      <div style={{height:'300px'}}>
          <Pie data={chartData} />
      </div>
  )
}

export default PieChart;