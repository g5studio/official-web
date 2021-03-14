import { Component, OnInit } from '@angular/core';
import { CarouselController } from '@utilities/abstract/carousel-controller';

@Component({
  selector: 'app-period-carousel',
  templateUrl: './period-carousel.component.html',
  styleUrls: ['./period-carousel.component.scss']
})
export class PeriodCarouselComponent extends CarouselController implements OnInit {

  constructor() {
    super()
  }

  public delay = 3000;
  public periods = [
    'assets/images/introduction/period-1.svg',
    'assets/images/introduction/period-2.svg',
    'assets/images/introduction/period-3.svg'
  ];

  get currentPeriod() { return this.isPlaying ? this.next : this.current; }

  ngOnInit(): void {
    this.initial(this.periods);
  }

  public onMouseover() {
    this.stop();
  }

  public onMouseleave() {
    this.repeat();
  }

}
