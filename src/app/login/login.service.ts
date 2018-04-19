
import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable()

export class LoginService {

    public validateUser(uname: string, pwd: string): string {
        let result: string = "";
        if (uname == "Admin" && pwd == "Admin@123") {
            result = "Valid user..";
        } else {
            result = "In Valid user..";
        }
        return result;


    }

}
