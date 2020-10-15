import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningDashboardComponent } from './learning-dashboard.component';

describe('LearningDashboardComponent', () => {
  let component: LearningDashboardComponent;
  let fixture: ComponentFixture<LearningDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
