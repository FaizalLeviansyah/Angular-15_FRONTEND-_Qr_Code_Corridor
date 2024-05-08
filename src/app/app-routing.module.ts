import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardPagePocariComponent } from './admin-dashboard-page-pocari/admin-dashboard-page-pocari.component';
import { AdminLoginPagePocariComponent } from './admin-login-page-pocari/admin-login-page-pocari.component';
import { LandingPagePocariComponent } from './landing-page-pocari/landing-page-pocari.component';

const routes: Routes = [
  // Definisikan jalur langsung ke komponen landing page
  { path: '', component: LandingPagePocariComponent },
  // Anda juga bisa menambahkan jalur-jalur lainnya di sini jika diperlukan
  { path: 'admin-login', component: AdminLoginPagePocariComponent},
  { path: 'admin-dashboard', component: AdminDashboardPagePocariComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}

