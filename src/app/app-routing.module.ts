import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { MacComponent } from './mac/mac.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { ProgramsOfferedComponent } from './programs-offered/programs-offered.component';
import { ProgramsScheduledComponent } from './programs-scheduled/programs-scheduled.component';
import { AdminReportComponent } from './admin-report/admin-report.component';
import { LoginComponent } from './login/login.component';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { MacAuthGuard } from './guards/mac-auth.guard';
import { MacScheduledCoursesComponent } from './mac-scheduled-courses/mac-scheduled-courses.component';
import { MacFilterApplicantsComponent } from './mac-filter-applicants/mac-filter-applicants.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AdminAuthGuard] },
  { path: 'mac', component: MacComponent, canActivate: [MacAuthGuard] },
  { path: 'applicant', component: ApplicantComponent },
  { path: 'manageProgramsOffered', component: ProgramsOfferedComponent, canActivate: [AdminAuthGuard] },
  { path: 'manageProgramsScheduled', component: ProgramsScheduledComponent, canActivate: [AdminAuthGuard] },
  { path: 'generateReports', component: AdminReportComponent, canActivate: [AdminAuthGuard] },
  { path: 'viewApplicants', component: MacScheduledCoursesComponent, canActivate: [MacAuthGuard] },
  { path: 'filterApplicants', component: MacFilterApplicantsComponent, canActivate: [MacAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
