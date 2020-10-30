import { Component, HostListener, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { WindowService } from '@services/window.service';
import { EDeviceType } from '@utilities/enums/overlay.enum';

@Component({
  selector: 'app-outcome-card',
  templateUrl: './outcome-card.component.html',
  styleUrls: ['./outcome-card.component.scss']
})
export class OutcomeCardComponent implements OnInit, OnChanges {

  @Input() name: string;
  @Input() link: string;
  @Input() reverse = false;
  @Input() hideIntro;
  @Input() fullHeight;
  constructor(
    public $window: WindowService
  ) { }

  public path: string = this.static;

  get deviceType(): typeof EDeviceType {
    return EDeviceType;
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.name.isFirstChange()) {
      this.path = this.static;
    }
  }

  get gif() {
    return `assets/images/portfolio/${this.name}.gif`;
  }

  get static() {
    return `assets/images/portfolio/${this.name}_static.png`;
  }
}
