import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCategoryModalComponent } from './question-category-modal.component';

describe('QuestionCategoryModalComponent', () => {
  let component: QuestionCategoryModalComponent;
  let fixture: ComponentFixture<QuestionCategoryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionCategoryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionCategoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
