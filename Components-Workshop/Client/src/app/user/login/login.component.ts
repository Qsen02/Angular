import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
    constructor(private userService: UserService, private router: Router) { }

    onLogin(event: Event, email: string, password: string) {
        event.preventDefault();
        try {
            this.userService.login(email, password);
            this.router.navigate(['/home']);
        } catch (err) {
            if (err instanceof Error) {
                alert(err.message);
            }
        }
    }
}
