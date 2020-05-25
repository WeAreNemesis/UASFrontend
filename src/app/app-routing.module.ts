import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { MacComponent } from './mac/mac.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { ProgramsOfferedComponent } from './programs-offered/programs-offered.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'mac', component: MacComponent },
  { path: 'applicant', component: ApplicantComponent },
  { path: 'manageProgramsOffered', component: ProgramsOfferedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
