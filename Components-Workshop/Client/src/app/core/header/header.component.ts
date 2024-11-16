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
export class HeaderComponent implements OnInit {
    isAuthenticated = false;
    curUser: AuthUser | null = null;

    constructor(private userService: UserService, private router: Router) { }

    ngOnInit(): void {
        this.isAuthenticated = this.userService.isLogged;
        this.curUser = this.userService.getUser();
    }

    onLogout() {
        this.userService.logout();
        this.curUser = this.userService.getUser();
        this.isAuthenticated = this.userService.isLogged;
        this.router.navigate(['/login']);
    }

}
