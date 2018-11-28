import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import {AppRoutingModule} from './app-routing.module';
import { LoginComponent } from './components/index/login/login.component';
import { ScheduleComponent } from './components/index/schedule/schedule.component';
import {HttpClientModule} from '@angular/common/http';
import {
  MatTableModule,
  MatSortModule,
  MatDialogModule,
  MatCardModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatButtonModule, MatToolbarModule, MatTabsModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { UserinformationComponent } from './components/index/userinformation/userinformation.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/index/toolbar/toolbar.component';
import { RegisterComponent } from './components/index/register/register.component';
import { ActivitiesComponent } from './components/index/activities/activities.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    ScheduleComponent,
    UserinformationComponent,
    ToolbarComponent,
    RegisterComponent,
    ActivitiesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatSortModule,
    MatTableModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    CdkTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
