import { Component } from '@angular/core';
import {FormGroup,FormControl,Validator, Validators} from '@angular/forms';

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html'
  
})
export class DemoComponent {

  //public fname:string="NAGULAMEERA"; 

  public studentForm=new FormGroup({
  fname : new FormControl(null,Validators.required),
  lname:new FormControl(null,Validators.required),
  city:new FormControl(null,[Validators.minLength(3),Validators.maxLength(10)]),
  pincode:new FormControl(null,Validators.pattern("\\d{6}"))
  })

}