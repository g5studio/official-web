import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LineChart, PieChart } from '@utilities/models/chart.model';

@Component({
  selector: 'app-business-center',
  templateUrl: './business-center.component.html',
  styleUrls: ['./business-center.component.scss']
})
export class BusinessCenterComponent implements OnInit {

  constructor(
    public $translate: TranslateService
  ) { }

  public stock: PieChart = new PieChart(
    [3, 2, 1],
    ['Frontend', 'Backend', 'Unity'],
    ['#465bca', '#fa4182', '#ffb03b']
  );

  public hot: LineChart = new LineChart(
    [{ data: [100, 200, 300, 400], label: 'Frontend' }],
    ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
  );


  onChartClick(event) {
    console.log(event);
  }

  ngOnInit(): void {
    // this.stock.hideDataLabels();
    this.stock.setOptions({
      legend: {
        position: 'right',
        align: 'end'
      }
    });
  }

}
