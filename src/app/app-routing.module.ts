import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPagePocariComponent } from './landing-page-pocari/landing-page-pocari.component';

const routes: Routes = [
  // Definisikan jalur langsung ke komponen landing page
  { path: '', component: LandingPagePocariComponent },
  // Anda juga bisa menambahkan jalur-jalur lainnya di sini jika diperlukan
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
