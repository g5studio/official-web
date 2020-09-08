import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-message-popup',
  templateUrl: './message-popup.component.html',
  styleUrls: ['./message-popup.component.scss']
})
export class MessagePopupComponent implements OnInit {

  @Input() time = 0;
  @Input() alert = false;
  @Input() central: boolean;
  @Output() onclose = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    if (this.time) {
      timer(this.time * 1000).subscribe(
        _ => this.onclose.emit('')
      );
    }

  }

}
