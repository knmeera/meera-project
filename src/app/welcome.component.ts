import { Component } from '@angular/core';
import {FormGroup,FormControl,Validator, Validators} from '@angular/forms';
import {Input} from '@angular/core';
@Component({
  selector: 'welcome',
  template: `<h1>Welcom to {{uname}}</h1>`
  
})
export class WelcomeComponent {
@Input()
public uname:string="";
}