import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSaladComponent } from './admin-salad.component';

describe('AdminSaladComponent', () => {
  let component: AdminSaladComponent;
  let fixture: ComponentFixture<AdminSaladComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSaladComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSaladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
