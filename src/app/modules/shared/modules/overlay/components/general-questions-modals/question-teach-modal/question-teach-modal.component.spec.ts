import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTeachModalComponent } from './question-teach-modal.component';

describe('QuestionTeachModalComponent', () => {
  let component: QuestionTeachModalComponent;
  let fixture: ComponentFixture<QuestionTeachModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionTeachModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionTeachModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
