import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { MacComponent } from './mac/mac.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { ProgramsOfferedComponent } from './programs-offered/programs-offered.component';
import { ProgramsScheduledComponent } from './programs-scheduled/programs-scheduled.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ProgramService } from './servicePrograms/program.service';
import { ScheduleService } from './serviceSchedule/schedule.service';
import { AdminReportComponent } from './admin-report/admin-report.component';
import { ApplicationService } from './serviceApplication/application.service';
import { FilterAppBySchedPipe } from './filter-app-by-sched.pipe';
import { FilterSchedByDatePipe } from './filter-sched-by-date.pipe';
import { LoginComponent } from './login/login.component';
import { ValidationService } from './serviceValidation/validation.service';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { MacAuthGuard } from './guards/mac-auth.guard';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    MacComponent,
    ApplicantComponent,
    ProgramsOfferedComponent,
    ProgramsScheduledComponent,
    AdminReportComponent,
    FilterAppBySchedPipe,
    FilterSchedByDatePipe,
    LoginComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ProgramService,
    ScheduleService,
    ApplicationService,
    ValidationService,
    AdminAuthGuard,
    MacAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
