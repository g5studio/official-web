import { environment } from './../../../../../environments/environment';
import { Component, Input, OnInit } from '@angular/core';
import { NavigationService } from '@services/navigation.service';
import { TrainingService } from '@training/services/training.service';
import { ITrainingOutcome } from '@utilities/interfaces/training.interface';

@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.component.html',
  styleUrls: ['./outcome.component.scss']
})
export class OutcomeComponent implements OnInit {

  constructor(
    public $training: TrainingService,
    public $navigation: NavigationService
  ) { }

  public outcomes: ITrainingOutcome[];
  public isDev = environment.production;

  ngOnInit(): void {
    this.$training.getTrainingPortfolio$().subscribe(
      portfolio => {
        this.outcomes = portfolio.demo;
      }
    );
  }

}
