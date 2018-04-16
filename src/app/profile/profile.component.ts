import { Component } from '@angular/core';

  class Profile
{
  public name:string="";
  public address:string="";
  public email:string="";
  public website:string="";
  public dob:string="";
  public photo:string="";
}

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  //title = 'app';
 public ar:Profile[]=[];
 constructor()
 {
   this.ar=[
   {name:'Meera',address:'HYD',email:'meera@gmail.com',website:'meera.com',dob:'tyry',photo:'mmera.jpg'}
   ]
   ;
 }

}
