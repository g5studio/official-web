import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAdvisorModalComponent } from './question-advisor-modal.component';

describe('QuestionAdvisorModalComponent', () => {
  let component: QuestionAdvisorModalComponent;
  let fixture: ComponentFixture<QuestionAdvisorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionAdvisorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAdvisorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
