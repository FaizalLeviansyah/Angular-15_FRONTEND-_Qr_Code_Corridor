import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { AdminLoginPagePocariComponent } from './admin-login-page-pocari.component';

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

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login-page-pocari',
  templateUrl: './admin-login-page-pocari.component.html',
  styleUrls: ['./admin-login-page-pocari.component.css']
})
export class AdminLoginPagePocariComponent {
  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): void {
    this.http.post<any>('http://localhost:5000/login', { username, password })
      .subscribe(
        response => {
          // Handle successful login, e.g., store authentication token
          localStorage.setItem('token', response.token);
          // Redirect to admin dashboard
          this.router.navigate(['/admin/dashboard']);
        },
        error => {
          // Handle login error
          console.error('Login failed:', error);
        }
      );
  }
}

