import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PieChart } from '@utilities/models/chart.model';

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
    ['#f7992b', 'yellow', 'blue']
  );

  onChartClick(event) {
    console.log(event);
  }

  ngOnInit(): void {
    this.stock.hideDataLabels();
    this.stock.setOptions({
      legend: {
        position: 'right',
        align: 'end'
      }
    });
  }

}
