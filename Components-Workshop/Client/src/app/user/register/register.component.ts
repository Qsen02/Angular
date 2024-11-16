import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-register',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './register.component.html',
	styleUrl: './register.component.css'
})
export class RegisterComponent {
	constructor(private userService: UserService, private router: Router) { }

	onRegister(event: Event, username: string, email: string, password: string, phoneNumber: string) {
		event.preventDefault();
		try {
            this.userService.register(username,email,password,phoneNumber);
			this.router.navigate(['/home']);
		} catch (err) {
			if (err instanceof Error) {
				alert(err.message);
			}
		}
	}
}
