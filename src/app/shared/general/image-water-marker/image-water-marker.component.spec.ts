import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageWaterMarkerComponent } from './image-water-marker.component';

describe('ImageWaterMarkerComponent', () => {
  let component: ImageWaterMarkerComponent;
  let fixture: ComponentFixture<ImageWaterMarkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageWaterMarkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageWaterMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
