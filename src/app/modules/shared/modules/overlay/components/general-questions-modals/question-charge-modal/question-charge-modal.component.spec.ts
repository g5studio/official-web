import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionChargeModalComponent } from './question-charge-modal.component';

describe('QuestionChargeModalComponent', () => {
  let component: QuestionChargeModalComponent;
  let fixture: ComponentFixture<QuestionChargeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionChargeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionChargeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
