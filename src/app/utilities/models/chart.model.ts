import { ChartData, ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

export class PieChart {

    public colors = [{ backgroundColor: this.background }];
    public type: ChartType = 'pie';
    public plugins = [pluginDataLabels];
    constructor(
        public data: number[],
        public labels: string[],
        private background: string[],
        public options: ChartOptions = { plugins: {} },
    ) {
        this.options.plugins.datalabels = {
            labels: {
                fontColor: {
                    color: 'white'
                }
            },
            formatter: (value) => `${this.roundDecimal(value / this.data.reduce((sum, next) => sum + next, 0) * 100, 2)}%`
        };
    }

    public setOptions(options: ChartOptions) {
        this.options = { ...this.options, ...options };
    }

    public setBackgroundColors(colors: string[]) {
        this.colors[0].backgroundColor = colors;
    }

    public hideDataLabels() {
        this.options.plugins.datalabels.display = false;
    }

    private roundDecimal(decimal: number, precision: number) {
        return Math.round(Math.round(decimal * Math.pow(10, (precision || 0) + 1)) / 10) / Math.pow(10, (precision || 0));
    }
}

export class LineChart {

    public type: ChartType = 'line';

    constructor(
        public datasets: ChartDataSets[],
        public labels: string[],
        public options: ChartOptions = { plugins: {}, scales: {} },
    ) {
        this.options = {
            responsive: true,
            scales: {
                yAxes: [{
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    },
                    ticks: {
                        fontColor: '#fff',
                        min: 0,
                        max: 100,
                        stepSize: 20
                    }
                }],
                xAxes: [{
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    },
                    ticks: {
                        fontColor: '#fff',
                    },
                    offset: true
                }]
            }
        };
        this.datasets = [{
            label: 'My First dataset',
            data: [50, 60, 70, 38, 25],
            fill: false,
            borderColor: '#ef951b',
            pointBackgroundColor: '#ef951b',
            pointBorderWidth: 0,
            pointHoverBackgroundColor: '#ef951b',
            hoverBackgroundColor: '#ef951b',
        }, {
            label: 'My Second dataset',
            fill: false,
            borderColor: '#cd264f',
            pointBackgroundColor: '#cd264f',
            pointBorderWidth: 0,
            pointHoverBackgroundColor: '#cd264f',
            hoverBackgroundColor: '#cd264f',
            data: [18, 33, 22, 19, 11, 39, 30],
        }];
    }

    public setOptions(options: ChartOptions) {
        this.options = { ...this.options, ...options };
    }
}
