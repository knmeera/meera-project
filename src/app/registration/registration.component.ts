import { Component } from '@angular/core';



  class Registration
{
  public name:string="";
  public address:string="";
  public email:string="";
  public website:string="";
  public dob:string="";
  public photo:string="";
}

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  public fullName:string="";
  public email:string="";
  public password:string="";
  public dob:Date=new Date();
  public country:string="";
  public gender:string="";
  public mealPreference:string="";
  public IsAcceptTerms:boolean=false;

}
