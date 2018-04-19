import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {LoginService} from './login.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]

})
export class LoginComponent {
  public username:string="";
  public password:string="";
  public result:string="";
  constructor(private _serviceObj:LoginService)
  {

  }
public checkLogin():void{

 this.result= this._serviceObj.validateUser(this.username,this.password);
}
}
