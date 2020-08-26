import { Component, OnInit, Input } from '@angular/core';
import { EModalProvider } from '@utilities/enums/overlay.enum';
import { OverlayService } from '@services//overlay.service';

@Component({
  selector: 'app-modal-provider',
  templateUrl: './modal-provider.component.html',
  styleUrls: ['./modal-provider.component.scss']
})
export class ModalProviderComponent implements OnInit {

  @Input() modal: EModalProvider;

  constructor(
    public $overlay: OverlayService
  ) { }

  get modalProvider(): typeof EModalProvider {
    return EModalProvider;
  }

  ngOnInit(): void {
  }

}
