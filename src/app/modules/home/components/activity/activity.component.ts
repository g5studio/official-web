import { EModalProvider, EModalSize } from '@utilities/enums/overlay.enum';
import { Component, OnInit } from '@angular/core';
import { OverlayService } from '@services//overlay.service';
import { Modal } from 'src/app/modules/shared/modules/overlay/models/modal.model';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  constructor(
    private $overlay: OverlayService
  ) { }

  private speechs = [
    'assets/images/group/2019-speech/2019-speech-1.png',
    'assets/images/group/2019-speech/2019-speech-2.png',
  ];

  private unity = [
    'assets/images/group/2019-s4/2019-s4-ntut-unity-1.png',
    'assets/images/group/2019-s4/2019-s4-ntut-unity-2.png',
    'assets/images/group/2019-s4/2019-s4-ntut-unity-3.png',
  ];

  public configs = {
    speechs: {
      index: 'assets/images/group/2019-speech/2019-speech-1.png',
      images: this.speechs
    },
    unity: {
      index: 'assets/images/group/2019-s4/2019-s4-ntut-unity-1.png',
      images: this.unity
    }
  };


  ngOnInit(): void {
  }

  public toggleAlbumModal(images, event: MouseEvent) {
    this.$overlay.toggleModal(
      new Modal(EModalProvider.Album, {
        size: EModalSize.Large,
        hideBackground: true,
        hideClose: true,
        config: { images }
      }),
      event
    );
  }

}
