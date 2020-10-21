import { Component, Input, OnInit } from '@angular/core';
import { TrainingService } from '@training/services/training.service';
import { ITrainingOutcome } from '@utilities/interfaces/training.interface';

@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.component.html',
  styleUrls: ['./outcome.component.scss']
})
export class OutcomeComponent implements OnInit {

  constructor(
    public $training: TrainingService
  ) { }

  public outcomes: ITrainingOutcome[];

  ngOnInit(): void {
    this.$training.getTrainingPortfolio$().subscribe(
      portfolio => {
        this.outcomes = portfolio.demo;
      }
    );
  }

}
