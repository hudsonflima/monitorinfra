import React, { Component } from "react";
import Chart from "react-apexcharts";

class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "stacked-bar-chart",
          stacked: true, // Habilita barras empilhadas
        },
        xaxis: {
          categories: ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'],
          show: true, //
        },
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 10,
            dataLabels: {
              total: {
                enabled: true,
                style: {
                  fontSize: '13px',
                  fontWeight: 900
                },
              },
            
            }
          },
        },
        title: {
          
        },
        fill: {
          gradient: {
            type: "vertical",
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            colorStops: [
              {
                offset: 0,
                opacity: 1
              },
              {
                offset: 100,
                opacity: 0.28
              }
            ]
          }
        },
        dataLabels: {
          enabled: false // Desabilita a exibição dos valores nas barras
        },
        yaxis: {
          show: false
        },
        // Configuração responsiva
        responsive: [
          {
            //breakpoint: 768, // Exemplo de tamanho de tela para ajuste
            options: {
              chart: {
                width: "100%" // Largura responsiva para telas menores
              }
            }
          }
          // Adicione mais breakpoints e opções responsivas conforme necessário
        ]
      },
      
      series: [
        {
          name: "Download",
          data: [30, 40, 45, 50, 49, 60, 70],
        },
        {
          name: "Upload",
          data: [5, 12, 32, 66, 21, 40, 33],
        },
      ]
    };
  }

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="bar"
        width="750"
      />
    );
  }
}

export default BarChart;
