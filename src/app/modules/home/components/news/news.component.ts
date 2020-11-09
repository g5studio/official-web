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

  ngOnInit(): void {
    this.interval = setInterval(
      _ => this.updateCurrent(),
      2000
    );
  }

  public mouseIn() {
    clearInterval(this.interval);
  }

  public mouseLeave() {
    this.interval = setInterval(
      _ => this.updateCurrent(),
      2000
    );
  }

  public updateCurrent(current?: number) {
    this.current = current || (this.current + 1 > 4 ? 1 : this.current + 1);
  }

}
