import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingUpModalComponent } from './sing-up-modal.component';

describe('SingUpModalComponent', () => {
  let component: SingUpModalComponent;
  let fixture: ComponentFixture<SingUpModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingUpModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingUpModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
