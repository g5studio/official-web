import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  constructor() { }

  public speechs = [
    'assets/images/group/2019-speech/2019-speech-1.png',
    'assets/images/group/2019-speech/2019-speech-2.png',
  ];

  public groups = [
    'assets/images/group/2019-s4/2019-s4-ntut-unity-1.png',
    'assets/images/group/2019-s4/2019-s4-ntut-unity-2.png',
    'assets/images/group/2019-s4/2019-s4-ntut-unity-3.png',
  ]

  ngOnInit(): void {
  }

}
