import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-non-auto-carousel',
  templateUrl: './non-auto-carousel.component.html',
  styleUrls: ['./non-auto-carousel.component.scss']
})
export class NonAutoCarouselComponent implements OnInit {

  @Input() images = [];

  constructor() { }

  private imgWidth = 240;
  private space = 32;
  public index = 0;
  public show = 2;
  public offset = 0;

  ngOnInit(): void {
  }

  public calcWindowWidth() {
    return (this.imgWidth + this.space) * (this.show - 1) + this.imgWidth;
  }

  public previous() {
    this.index = this.index - 1;
    this.offset = this.offset + this.imgWidth + this.space;
  }

  public next() {
    this.index = this.index + 1;
    this.offset = this.offset - this.imgWidth - this.space;
  }

  public isPreviousVisible() {
    return this.index > 0;
  }

  public isNextVisible() {
    return this.index < (this.images.length - this.show);
  }

}
