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
import { ProgramService } from './program.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    MacComponent,
    ApplicantComponent,
    ProgramsOfferedComponent,
    ProgramsScheduledComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [ProgramService],
  bootstrap: [AppComponent]
})
export class AppModule { }
