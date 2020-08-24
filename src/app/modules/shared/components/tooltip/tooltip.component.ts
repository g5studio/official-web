import { Component, OnInit, Input } from '@angular/core';

export enum ToolTipPosition {
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left'
}

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  @Input() position: ToolTipPosition = ToolTipPosition.Bottom;

  constructor() { }

  ngOnInit(): void {
  }

}
