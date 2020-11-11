import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor() { }

  public current = 1;
  public interval: any;
  public isSliding = false;
  public news = [
    'assets/images/ads/2020-12-ntut-unity.png',
    'assets/images/ads/2020-12-ntut-unity.png',
    'assets/images/ads/2020-12-ntut-unity.png',
    'assets/images/ads/2020-12-ntut-unity.png'
  ];

  get queue() {
    const NEXT = this.current + 1 > this.news.length ? 1 : this.current + 1;
    return [
      this.news[this.current - 1],
      this.news[NEXT - 1]
    ];
  }

  ngOnInit(): void {
    this.interval = setInterval(
      _ => this.slide(),
      3000
    );
  }

  public mouseIn() {
    clearInterval(this.interval);
  }

  public mouseLeave() {
    this.interval = setInterval(
      _ => this.slide(),
      3000
    );
  }

  public updateCurrent(current?: number) {
    this.current = current || (this.current + 1 > this.news.length ? 1 : this.current + 1);
  }

  private slide() {
    this.isSliding = true;
    this.updateCurrent();
    setTimeout(
      _ => {
        this.isSliding = false;
      }, 1600
    );
  }

}
