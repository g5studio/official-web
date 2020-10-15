import { Component, OnInit } from '@angular/core';
import { OverlayService } from '@services//overlay.service';
import { EDialogProvider } from '@utilities/enums/overlay.enum';

@Component({
  selector: 'app-dialog-provider',
  templateUrl: './dialog-provider.component.html',
  styleUrls: ['./dialog-provider.component.scss']
})
export class DialogProviderComponent implements OnInit {

  constructor(
    public $overlay: OverlayService
  ) { }

  get provider(): typeof EDialogProvider {
    return EDialogProvider
  }

  ngOnInit(): void {
  }

}
