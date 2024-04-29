import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginPagePocariComponent } from './admin-login-page-pocari.component';

describe('AdminLoginPagePocariComponent', () => {
  let component: AdminLoginPagePocariComponent;
  let fixture: ComponentFixture<AdminLoginPagePocariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLoginPagePocariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLoginPagePocariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
