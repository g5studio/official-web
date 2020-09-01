import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFieldComponent } from './profile-field.component';

describe('ProfileFieldComponent', () => {
  let component: ProfileFieldComponent;
  let fixture: ComponentFixture<ProfileFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
