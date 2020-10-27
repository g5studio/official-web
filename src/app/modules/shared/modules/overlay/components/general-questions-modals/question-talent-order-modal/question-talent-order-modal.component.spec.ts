import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTalentOrderModalComponent } from './question-talent-order-modal.component';

describe('QuestionTalentOrderModalComponent', () => {
  let component: QuestionTalentOrderModalComponent;
  let fixture: ComponentFixture<QuestionTalentOrderModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionTalentOrderModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionTalentOrderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
