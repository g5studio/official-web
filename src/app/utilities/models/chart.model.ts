import { ChartOptions, ChartType } from 'chart.js';
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
