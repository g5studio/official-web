import { Component, OnInit } from '@angular/core';
import { OverlayService } from '@services//overlay.service';

@Component({
  selector: 'app-dialog-provider',
  templateUrl: './dialog-provider.component.html',
  styleUrls: ['./dialog-provider.component.scss']
})
export class DialogProviderComponent implements OnInit {

  constructor(
    public $overlay: OverlayService
  ) { }

  ngOnInit(): void {
  }

}
