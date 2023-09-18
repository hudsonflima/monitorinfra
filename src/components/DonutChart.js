import React, { Component } from "react";
import Chart from "react-apexcharts";

class DonutChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: "donut",
        },
        labels: ["Espaço Livre", "Espaço Utilizado"],
        title: {
            text: 'Uso do disco (File Server)',
            align: 'center'
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: "100%",
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
      series: [70, 30], // Espaço livre e espaço utilizado (em porcentagem)
    };
  }

  render() {
    return (
      <div>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width="500"
        />
      </div>
    );
  }
}

export default DonutChart;
