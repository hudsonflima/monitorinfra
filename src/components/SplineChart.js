import React from "react";
import Chart from "react-apexcharts";

class SplineChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'downstream',
                data: [31, 40, 28, 51, 42, 109, 100, 85, 92, 78, 66, 72]
            }, {
                name: 'upstream',
                data: [11, 32, 45, 32, 34, 52, 41, 48, 36, 42, 55, 60]
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'area'
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'datetime',
                    categories: [
                        "2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z",
                        "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z",
                        "2018-09-19T06:30:00.000Z", "2018-09-19T07:30:00.000Z", "2018-09-19T08:30:00.000Z",
                        "2018-09-19T09:30:00.000Z", "2018-09-19T10:30:00.000Z", "2018-09-19T11:30:00.000Z"
                    ]
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.7,
                        opacityTo: 0.9,
                    },
                },
            },
        };
        
    }

    render() {
        return (
            <div className="spline-chart">
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="area"
                    height={350}
                />
            </div>
        );
    }
}

export default SplineChart;
