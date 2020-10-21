import { environment } from './../../../../../environments/environment';
import { Modal } from '../../../shared/modules/overlay/models/modal.model';
import { Component, OnInit } from '@angular/core';
import { OverlayService } from '@services//overlay.service';
import { EModalProvider, EModalSize } from '@utilities/enums/overlay.enum';
import { UserService } from '@user//services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public isDev = !environment.production;



  ngOnInit(): void { }

}
