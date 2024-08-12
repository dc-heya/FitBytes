import React, { Component } from 'react'
import Chart from 'react-apexcharts'


export default class LineGraph extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: 'weight-history',

                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: '100%'
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                xaxis: {
                    categories: this.props.dates
                }
                ,
                stroke: {
                    curve: 'smooth'
                },
                colors: ['#d93212']
            },

            series: [{
                name: 'weight',
                data: this.props.quantities
            }]
        }
    }
    render() {
        return (
            <Chart options={this.state.options} series={this.state.series} type="area" width={600} height={350} />
        )
    }

}
