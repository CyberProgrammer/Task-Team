import React from "react";
import {Chart, Tooltip, ArcElement} from 'chart.js'
import {Doughnut} from "react-chartjs-2";

Chart.register(ArcElement, Tooltip);

const DoughnutChart : React.FC = () => {
    const data = {
        labels: [
            'Completed',
            'Not Completed',
        ],
        datasets: [
            {
                data: [5, 10],
                // you can set individual colors for each bar
                backgroundColor: [
                    'green',
                    'red'
                ],
                borderWidth: 1,
            }
        ]
    }

    return (
        <div className="chart-container">
            <Doughnut
                data={data}
                height={"125%"}
                options={{maintainAspectRatio: false}}
            />
        </div>
    )
}
export default DoughnutChart;