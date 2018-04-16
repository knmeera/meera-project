
import { Injectable } from '@angular/core';

@Injectable()

export class EmpService {
    public emps: any[] = [];
    public getEmployees(): any[] {
        this.emps = [
            { empno: 1010, ename: "Meera", deptno: 10 },
            { empno: 1011, ename: "Ganesh", deptno: 20 },
            { empno: 1012, ename: "Prasad", deptno: 20 },
            { empno: 1013, ename: "Nari", deptno: 30 },
            { empno: 1014, ename: "Vamsi", deptno: 10 }

        ];
        return this.emps;
    }

    public addEmp(obj: any): void {
        this.emps.push(obj);
    }

    public removeEmp(n: number): void {
        var index: number = 0;
        index = this.emps.findIndex(e=>e.empno==n);
        if (index >= 0) {
            this.emps.splice(index, 1);
        }
    }

    public selectEmp(eno:number):any
    { 
        var obj:any;
        var index: number = 0;
        index = this.emps.findIndex(e=>e.empno==eno);
        obj= this.emps[index];
        return obj;
   
    }

    public updateEmp(eobj:any):void
    {
        var obj:any;
        var index: number = 0;
        index = this.emps.findIndex(e=>e.empno==eobj.empno);
        obj= this.emps[index];
        
        obj.ename=eobj.ename;
        obj.deptno=eobj.deptno;
    }


}
