import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './components/index/index.component';
import {NgModule} from '@angular/core';
import {LoginComponent} from './components/index/login/login.component';
import {ScheduleComponent} from './components/index/schedule/schedule.component';
import {NeedAuthGuard} from './auth.guard';
import {RegisterComponent} from './components/index/register/register.component';


//     canActivate: [NeedAuthGuard]

const routes: Routes = [
  {path: 'user', component: IndexComponent},
  { path: 'login', component: RegisterComponent },
  { path: '', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
