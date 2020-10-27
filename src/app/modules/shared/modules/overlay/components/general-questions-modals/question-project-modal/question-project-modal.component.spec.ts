import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionProjectModalComponent } from './question-project-modal.component';

describe('QuestionProjectModalComponent', () => {
  let component: QuestionProjectModalComponent;
  let fixture: ComponentFixture<QuestionProjectModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionProjectModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionProjectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
