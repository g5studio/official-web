import { Component, OnInit, Input } from '@angular/core';
import { NavigationService } from '@services/navigation.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @Input() route: string;

  constructor(
    public $navigation: NavigationService
  ) { }

  ngOnInit(): void {
  }
}
