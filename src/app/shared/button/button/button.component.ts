import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Output() clickEvent: EventEmitter<void> = new EventEmitter();
  @Input() disabled: boolean;
  @Input() white;

  constructor() { }

  ngOnInit(): void {
  }

}
