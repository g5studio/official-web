import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() duration = 3000;
  @Input() isVertical = false;
  @Input() images = [];
  @Input() opacity = 0;

  constructor() { }

  public isSliding = false;

  public currentIndex = 0;
  private nextIndex = this.currentIndex + 1;
  public slideQueue = [];
  private interval;
  @HostListener('mouseenter') onMouseIn() {
    clearInterval(this.interval);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.interval = setInterval(_ => this.startCarousel(), this.duration);
  }

  ngOnInit(): void {
    this.inital();
  }

  public controlerOnChange(index: number) {
    this.currentIndex = index;
    this.nextIndex = this.currentIndex + 1 < this.images.length ? this.currentIndex + 1 : 0;
    this.slideQueue = [this.images[this.currentIndex], this.images[this.nextIndex]];
  }

  private inital() {
    this.slideQueue = [this.images[this.currentIndex], this.images[this.nextIndex]];
    this.interval = setInterval(_ => this.startCarousel(), this.duration);
  }

  private startCarousel() {
    this.isSliding = true;
    setTimeout(
      _ => {
        this.isSliding = false;
        this.slideQueue = [this.images[this.currentIndex], this.images[this.nextIndex]];
      }, 1000
    );
    this.next();
    console.log(this.currentIndex, this.nextIndex)
  }

  private next() {
    const LENGTH = this.images.length;
    this.currentIndex = this.currentIndex + 1 < LENGTH ? this.currentIndex + 1 : 0;
    this.nextIndex = this.nextIndex + 1 < LENGTH ? this.nextIndex + 1 : 0;
  }
}
