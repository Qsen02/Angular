import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AuthUser } from '../../types/users';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {

    get curUser(): AuthUser | null {
        return this.userService.getUser();
    }

    get isLogged(): boolean {
        return this.userService.isLogged;
    }

    constructor(private userService: UserService, private router: Router) { }

    onLogout() {
        this.userService.logout().subscribe(()=>{
            this.router.navigate(['/login']);
        });
    }

}
