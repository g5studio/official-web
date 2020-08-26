import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonAutoCarouselModalComponent } from './non-auto-carousel-modal.component';

describe('NonAutoCarouselModalComponent', () => {
  let component: NonAutoCarouselModalComponent;
  let fixture: ComponentFixture<NonAutoCarouselModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonAutoCarouselModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonAutoCarouselModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
