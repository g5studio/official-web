import { ChartData, ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

export class PieChart {
    public colors = [{
        backgroundColor: this.background
    }];
    public type: ChartType = 'pie';
    public plugins = [pluginDataLabels];
    constructor(
        public data: number[],
        public labels: string[],
        private background: string[],
        public options: ChartOptions = { plugins: {} },
    ) {
        this.options.plugins.datalabels = {
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

export class BarChart {
    public type: ChartType = 'bar';
    constructor(
        public datasets: ChartDataSets[],
        public labels: string[],
        public options: ChartOptions = { plugins: {}, scales: {} },
    ) {
        this.options = {
            responsive: true,
            legend: {
                labels: {
                    fontSize: 12,
                    boxWidth: 13,
                    padding: 16
                },
                position: 'right',
                align: 'end'
            },
            tooltips: {
                enabled: false
            },
            scales: {
                yAxes: [{
                    gridLines: {
                        display: false,
                        drawBorder: false,
                        color: '#fff',
                    },
                    ticks: {
                        fontColor: '#fff',
                        min: 0,
                        stepSize: 1
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
            },
            plugins: {
                datalabels: {
                    // display: false,
                },
            }
        };
    }

    public setOptions(options: ChartOptions) {
        this.options = { ...this.options, ...options };
    }

    public setStepSize(size: number) {
        this.options.scales.ticks.stepSize = size;
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
            legend: {
                labels: {
                    fontSize: 12,
                    boxWidth: 13,
                    padding: 16
                },
                position: 'right',
                align: 'end'
            },
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
                        stepSize: 20,
                        beginAtZero: true
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
            },
            plugins: {
                datalabels: {
                    display: false,
                },
            }
        };
    }

    public setOptions(options: ChartOptions) {
        this.options = { ...this.options, ...options };
    }

    public setTitle(title: string) {
        this.options.title = {
            display: true,
            text: title,
            position: 'top',
            fontSize: 16,
            fontStyle: 'normal',
            fontColor: '#fff'
        };
    }
}
