import { Component, OnInit } from '@angular/core';
import { UnsubOndestroy } from 'src/app/utilities/unsub-ondestroy';
import { NavigationService } from 'src/app/modules/shared/services/navigation.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    public $navigation: NavigationService
  ) { }

  ngOnInit(): void {
  }
}
