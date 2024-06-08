import React from "react";
import {Chart, Tooltip, ArcElement} from 'chart.js'
import {Doughnut} from "react-chartjs-2";

Chart.register(ArcElement, Tooltip);

interface ChartData {
    tasksCompletedCount: number
    tasksInProgressCount: number
}

const DoughnutChart : React.FC<ChartData> = (
    {
        tasksCompletedCount,
        tasksInProgressCount
    }) => {
    const data = {
        labels: [
            'Completed',
            'Not Completed',
        ],
        datasets: [
            {
                data: [tasksCompletedCount, tasksInProgressCount],
                // you can set individual colors for each bar
                backgroundColor: [
                    '#0F4F31',
                    '#B42929'
                ],
                borderColor: 'transparent',
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