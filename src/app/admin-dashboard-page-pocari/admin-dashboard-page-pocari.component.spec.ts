import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardPagePocariComponent } from './admin-dashboard-page-pocari.component';

describe('AdminDashboardPagePocariComponent', () => {
  let component: AdminDashboardPagePocariComponent;
  let fixture: ComponentFixture<AdminDashboardPagePocariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardPagePocariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashboardPagePocariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

