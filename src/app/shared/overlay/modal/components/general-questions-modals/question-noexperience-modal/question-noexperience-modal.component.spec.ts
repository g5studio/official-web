import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionNoexperienceModalComponent } from './question-noexperience-modal.component';

describe('QuestionNoexperienceModalComponent', () => {
  let component: QuestionNoexperienceModalComponent;
  let fixture: ComponentFixture<QuestionNoexperienceModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionNoexperienceModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionNoexperienceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
