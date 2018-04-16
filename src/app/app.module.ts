import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {Input} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';


import { AppComponent } from './app.component';
import { DemoComponent } from './demo.component';
import { ProfileComponent } from './profile/profile.component';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import {EmpService} from './employee/employee.service';
import {EmpComponent} from './employee/employee.component';
import {WelcomeComponent} from './welcome.component';
import {MainComponent} from './main.component';
import { HomeComponent } from './home/home.component';
import { DeptComponent } from './dept/dept.component';
import { AboutComponent } from './about/about.component';

const appRoutes:Routes=[
{path:'',component:HomeComponent},
{path:'Emp',component:EmpComponent},
{path:'Dept',component:DeptComponent},
{path:'About',component:AboutComponent},
{path:'Registration',component:RegistrationComponent},
{path:'Login',component:LoginComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ProfileComponent,
    RegistrationComponent,
    LoginComponent,
    EmpComponent,
    WelcomeComponent,
    MainComponent,
    HomeComponent,
    DeptComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
