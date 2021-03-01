import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodCarouselComponent } from './period-carousel.component';

describe('PeriodCarouselComponent', () => {
  let component: PeriodCarouselComponent;
  let fixture: ComponentFixture<PeriodCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
