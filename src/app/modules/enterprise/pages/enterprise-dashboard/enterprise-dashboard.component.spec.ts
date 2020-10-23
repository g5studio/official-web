import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseDashboardComponent } from './enterprise-dashboard.component';

describe('EnterpriseDashboardComponent', () => {
  let component: EnterpriseDashboardComponent;
  let fixture: ComponentFixture<EnterpriseDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
