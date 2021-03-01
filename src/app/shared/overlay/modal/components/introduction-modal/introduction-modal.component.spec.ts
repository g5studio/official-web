import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionModalComponent } from './introduction-modal.component';

describe('IntroductionModalComponent', () => {
  let component: IntroductionModalComponent;
  let fixture: ComponentFixture<IntroductionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
