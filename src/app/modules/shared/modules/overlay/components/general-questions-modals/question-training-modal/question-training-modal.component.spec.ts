import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTrainingModalComponent } from './question-training-modal.component';

describe('QuestionTrainingModalComponent', () => {
  let component: QuestionTrainingModalComponent;
  let fixture: ComponentFixture<QuestionTrainingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionTrainingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionTrainingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
