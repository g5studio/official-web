import { IStudent, IStudentGroup } from '@utilities/interfaces/training.interface';
import { take, takeUntil } from 'rxjs/operators';
import { EDeviceType } from '@utilities/enums/overlay.enum';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { WindowService } from '@services/window.service';
import { BarChart, LineChart, PieChart } from '@utilities/models/chart.model';
import { UnsubOndestroy } from '@utilities/abstract/unsub-ondestroy';
import { TrainingService } from '@training/services/training.service';

@Component({
  selector: 'app-business-center',
  templateUrl: './business-center.component.html',
  styleUrls: ['./business-center.component.scss']
})
export class BusinessCenterComponent extends UnsubOndestroy implements OnInit {

  constructor(
    public $translate: TranslateService,
    public $training: TrainingService,
    public $window: WindowService
  ) {
    super();
  }

  public hotTalent: PieChart;
  public averageCost: LineChart;
  public currentTalent: BarChart;

  private theme = {
    frontend: '#cd264f',
    backend: '#ef951b',
    java: '#ffe205',
    unity: '#67d658',
    python: '#465bca'

  };

  get deviceType(): typeof EDeviceType {
    return EDeviceType;
  }

  onChartClick(event) {
    // console.log(event);
  }

  ngOnInit(): void {
    this.$training.students$.pipe(
      take(1)
    ).subscribe(
      students => {
        const Graduated = students.filter(student => !!student.graduatedDate);
        this.initialAverageCost(this.$training.chunkStudentsByCategory(Graduated.filter(student => student.salary > 0)));
        this.initialHotTalent(this.$training.chunkStudentsByCategory(Graduated.filter(student => student.salary > 0)));
        this.initialCurrentTalent(this.$training.chunkStudentsByCategory(Graduated.filter(student => student.salary === 0)));
      }
    );
  }

  private initialHotTalent(students: IStudentGroup) {
    this.hotTalent = new PieChart(
      [students.frontend.length, students.backend.length, students.java.length, students.unity.length, students.python.length],
      ['Frontend', 'Backend', 'Java', 'Unity', 'Python'],
      [this.theme.frontend, this.theme.backend, this.theme.java, this.theme.unity, this.theme.python]
    );
    this.hotTalent.setOptions({
      legend: {
        position: 'right',
        align: 'end',
        labels: {
          boxWidth: 12,
          padding: 16,
        },
      }
    });
  }

  private initialCurrentTalent(students: IStudentGroup) {
    this.currentTalent = new BarChart(
      [{
        label: 'Frontend',
        data: [students.frontend.length],
        fill: false,
        backgroundColor: this.theme.frontend,
        hoverBackgroundColor: this.theme.frontend,
      }, {
        label: 'Backend',
        fill: false,
        backgroundColor: this.theme.backend,
        hoverBackgroundColor: this.theme.backend,
        data: [students.backend.length]
      }, {
        label: 'Jave',
        fill: false,
        backgroundColor: this.theme.java,
        hoverBackgroundColor: this.theme.java,
        data: [students.java.length]
      }, {
        label: 'Unity',
        fill: false,
        backgroundColor: this.theme.unity,
        hoverBackgroundColor: this.theme.unity,
        data: [students.unity.length]
      }, {
        label: 'Python',
        fill: false,
        backgroundColor: this.theme.python,
        hoverBackgroundColor: this.theme.python,
        data: [students.python.length]
      }],
      [''],
    );

  }

  private initialAverageCost(students: IStudentGroup) {
    const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    this.averageCost = new LineChart(
      [{
        label: 'Frontend',
        data: MONTHS.map(month => this.calculateMonthAverageSalary(this.getStudentsByMonth(students, 'frontend', month))),
        fill: false,
        borderColor: this.theme.frontend,
        pointBackgroundColor: this.theme.frontend,
        pointHoverBackgroundColor: this.theme.frontend,
        hoverBackgroundColor: this.theme.frontend,
      }, {
        label: 'Backend',
        fill: false,
        borderColor: this.theme.backend,
        pointBackgroundColor: this.theme.backend,
        pointHoverBackgroundColor: this.theme.backend,
        hoverBackgroundColor: this.theme.backend,
        data: MONTHS.map(month => this.calculateMonthAverageSalary(this.getStudentsByMonth(students, 'backend', month))),
      }, {
        label: 'Jave',
        fill: false,
        borderColor: this.theme.java,
        pointBackgroundColor: this.theme.java,
        pointHoverBackgroundColor: this.theme.java,
        hoverBackgroundColor: this.theme.java,
        data: MONTHS.map(month => this.calculateMonthAverageSalary(this.getStudentsByMonth(students, 'java', month))),
      }, {
        label: 'Unity',
        fill: false,
        borderColor: this.theme.unity,
        pointBackgroundColor: this.theme.unity,
        pointHoverBackgroundColor: this.theme.unity,
        hoverBackgroundColor: this.theme.unity,
        data: MONTHS.map(month => this.calculateMonthAverageSalary(this.getStudentsByMonth(students, 'unity', month))),
      }, {
        label: 'Python',
        fill: false,
        borderColor: this.theme.python,
        pointBackgroundColor: this.theme.python,
        pointHoverBackgroundColor: this.theme.python,
        hoverBackgroundColor: this.theme.python,
        data: MONTHS.map(month => this.calculateMonthAverageSalary(this.getStudentsByMonth(students, 'python', month))),
      }
      ],
      ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    );
  }

  private getStudentsByMonth(students: IStudentGroup, category: string, month: number) {
    return students[category].filter(_ => new Date(_.graduatedDate).getMonth() + 1 === month);
  }

  private calculateMonthAverageSalary(monthStuduents: IStudent[]) {
    return monthStuduents.reduce((sum, next) => sum + next.salary, 0) / monthStuduents.length || 0;
  }

}
