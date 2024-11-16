import { Injectable } from '@angular/core';
import { AuthUser } from '../types/users';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    USER_KEY = '[user]';
    user: AuthUser | null = null;

    get isLogged():boolean{
        return !!this.user;
    }

    constructor() {
        try {
            const user = localStorage.getItem(this.USER_KEY)|| "";
            this.user=JSON.parse(user);
        } catch (err) {
          this.user=null;
        }
    }

    login(email:string,password:string):void{
        this.user={
          username:email.split("@")[0],
          email:email,
          password:password,
          tel:"08893728345245",
          _id:"dasdsfsfgfddfg"
       }
       localStorage.setItem(this.USER_KEY,JSON.stringify(this.user));
    }

    register(username:string,email:string,password:string,phoneNumber:string):void{
        this.user={
           username:username,
           email:email,
           password:password,
           tel:phoneNumber,
           _id:"dasdsfsfgfddfg"
        }
        localStorage.setItem(this.USER_KEY,JSON.stringify(this.user));
     }

     logout():void{
        localStorage.removeItem(this.USER_KEY);
        this.user=null;
     }

     getUser(){
        return this.user;
     }
}
