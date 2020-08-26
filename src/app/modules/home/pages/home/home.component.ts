import { Component, OnInit } from '@angular/core';
import { OverlayService } from '@services//overlay.service';
import { EModalProvider } from '@utilities/enums/overlay.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public $overlay: OverlayService
  ) { }

  public introductions = [
    'assets/images/introduction/intro.png',
    'assets/images/introduction/intro2.png',
    'assets/images/introduction/intro3.png',
    'assets/images/introduction/intro4.png',
  ]


  ngOnInit(): void {
    if (!sessionStorage.getItem('first-login')) {
      this.$overlay.toggleModal(EModalProvider.Introduction);
    }

  }

}
