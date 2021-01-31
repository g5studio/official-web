import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralQuestionModalComponent } from './general-question-modal.component';

describe('GeneralQuestionModalComponent', () => {
  let component: GeneralQuestionModalComponent;
  let fixture: ComponentFixture<GeneralQuestionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralQuestionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralQuestionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
