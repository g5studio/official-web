import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-water-marker',
  templateUrl: './image-water-marker.component.html',
  styleUrls: ['./image-water-marker.component.scss']
})
export class ImageWaterMarkerComponent implements OnInit {

  @Input() url: string;

  constructor() { }

  ngOnInit(): void {
  }

}
