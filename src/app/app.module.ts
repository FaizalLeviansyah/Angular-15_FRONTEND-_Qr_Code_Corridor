import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPagePocariComponent } from './landing-page-pocari/landing-page-pocari.component';
import { AdminLoginPagePocariComponent } from './admin-login-page-pocari/admin-login-page-pocari.component';
import { AdminDashboardPagePocariComponent } from './admin-dashboard-page-pocari/admin-dashboard-page-pocari.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPagePocariComponent,
    AdminLoginPagePocariComponent,
    AdminDashboardPagePocariComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
