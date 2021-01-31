import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonAutoCarouselComponent } from './non-auto-carousel.component';

describe('NonAutoCarouselComponent', () => {
  let component: NonAutoCarouselComponent;
  let fixture: ComponentFixture<NonAutoCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonAutoCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonAutoCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
