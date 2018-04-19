import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {EmpService} from './employee.service';


@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[EmpService]

})
export class EmpComponent {
   public Lemp:any[]=[];
   public eid:number=0;
   public ename:string="";
   public did:number=0;
   constructor(private _serviceObj:EmpService)
  {
   
  }

public  ListOfEmployees():void
{ 
  this.Lemp=this._serviceObj.getEmployees();
  
}

public addEmployee():void
{
  var obj:any={};
  obj.empno=this.eid;
  obj.ename=this.ename; 
  obj.deptno=this.did;
  this._serviceObj.addEmp(obj);
}

public  removeEmployee():void
{
  this._serviceObj.removeEmp(this.eid);
}


public selectEmployee():void
{
  var obj:any;
  obj=this._serviceObj.selectEmp(this.eid);
  this.ename=obj.ename;
  this.did=obj.deptno;

}

 public updateEmployee():void{

  var obj:any={};
  obj.empno=this.eid;
  obj.ename=this.ename; 
  obj.deptno=this.did;
  this._serviceObj.updateEmp(obj);
 }
}
