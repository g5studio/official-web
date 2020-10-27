import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionUpgradeModalComponent } from './question-upgrade-modal.component';

describe('QuestionUpgradeModalComponent', () => {
  let component: QuestionUpgradeModalComponent;
  let fixture: ComponentFixture<QuestionUpgradeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionUpgradeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionUpgradeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
