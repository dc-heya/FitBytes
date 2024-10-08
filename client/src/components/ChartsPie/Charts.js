import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import './Charts.css';


class Chart extends Component {

    renderChart() {
        let chartData = {

            labels: ['Water', 'Exercise', 'Nutrition'],

            datasets: [{
                strokeColor: "rgba(100, 190, 154, 1)",
                data: [
                    this.props.waterChart,
                    this.props.exerciseChart,
                    this.props.nutritionChart
                ],
                backgroundColor: [
                    '#90ee90',
                    '#299617',
                    '#013220',

                ],
            }],
            options: {
                responsive: true,
                maintainAspectRatio: true,
                title: {
                    display: false,
                },
                legend: {
                    display: false,
                    position: 'bottom',
                },
            },
            segmentShowStroke: true
        }
        return (
            <div className="Chart-container">
                <Pie justify="center" //item xs={24} 
                    data={chartData}
                    options={{
                        legend: {
                            display: true
                        }
                    }}
                />

            </div>
        )
    }

    render() {
        return (
            this.renderChart()
        )
    }
}

export default Chart

