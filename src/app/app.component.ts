import { ThemeService } from 'ng2-charts';
import { Component, HostListener, OnInit } from '@angular/core';
import { LanguageService } from '@services//language.service';
import { WindowService } from '@services//window.service';
import { NavigationService } from '@services//navigation.service';
import { AuthService } from './auth/auth.service';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private $language: LanguageService,
    private $window: WindowService,
    public $navigation: NavigationService,
    private $theme: ThemeService,
    public $auth: AuthService
  ) {
    this.$language.inital();
    this.$window.resize();
  }

  @HostListener('window:resize') onWindowResize() {
    this.$window.resize();
  }

  ngOnInit() {
    this.initial();
  }

  private initial() {
    const ChartStyles: ChartOptions = {
      legend: {
        labels: { fontColor: 'white' }
      },
      responsive: true,
      plugins: {
        datalabels: {
          labels: {
            fontColor: {
              color: 'white'
            }
          },
          // formatter: (value) => `${this.roundDecimal(value / this.info.totalAvailable * 100, 2)}%`
        },
      }
    };
    this.$theme.setColorschemesOptions(ChartStyles);
  }
}
