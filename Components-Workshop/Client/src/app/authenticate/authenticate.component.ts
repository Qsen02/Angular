import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-authenticate',
    standalone: true,
    imports: [],
    templateUrl: './authenticate.component.html',
    styleUrl: './authenticate.component.css'
})
export class AuthenticateComponent implements OnInit {
    isAuth = true;
    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.userService.getUserProfile().subscribe({
            next:(user)=>{
                this.isAuth=false;
            },
            error:(err)=>{
                this.isAuth=false;
            },
            complete:()=>{
                this.isAuth=false;
            }
        })
    }
}
