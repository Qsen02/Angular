import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { emailPattern } from '../../utils/emailRegexp';
import { FormsModule, NgForm } from '@angular/forms';
import { MatchPasswordDirective } from '../../directives/match-password.directive';

@Component({
	selector: 'app-register',
	standalone: true,
	imports: [RouterLink,FormsModule,MatchPasswordDirective],
	templateUrl: './register.component.html',
	styleUrl: './register.component.css'
})
export class RegisterComponent {
	emailMatcher=emailPattern;

	constructor(private userService: UserService, private router: Router) { }

	onRegister(form:NgForm) {
          const username=form.value.username;
		  const email=form.value.email;
		  const password=form.value.password;
		  const phoneNumber=form.value.tel;
		  console.log(form.value)
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
