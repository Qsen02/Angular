import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { emailPattern } from '../../utils/emailRegexp';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordMatcher } from '../../utils/passwordMatcher.validator';

@Component({
	selector: 'app-register',
	standalone: true,
	imports: [RouterLink, ReactiveFormsModule],
	templateUrl: './register.component.html',
	styleUrl: './register.component.css'
})
export class RegisterComponent {
	registerForm = new FormGroup({
		username: new FormControl("", [Validators.required, Validators.minLength(5)]),
		email: new FormControl("", [Validators.required, Validators.pattern(emailPattern)]),
		tel:new FormControl(""),
		passGroup:new FormGroup({
			password:new FormControl("",[Validators.required,Validators.minLength(5)]),
			repass:new FormControl("",Validators.required)
		},{
			validators:[passwordMatcher("password","repass")]
		})
	})

	get getPassword(){
		return this.registerForm.get("passGroup")?.get("password");
	}

	get getRepass(){
		return this.registerForm.get("passGroup")?.get("repass");
	}

	get isValidUsername(){
		return (this.registerForm.get("username")?.touched)&&
		(this.registerForm.get("username")?.errors?.["required"])||
		(this.registerForm.get("username")?.errors?.["minlength"])
	}

	get isValidEmail(){
		return (this.registerForm.get("email")?.touched)&&
		(this.registerForm.get("email")?.errors?.["required"])||
		(this.registerForm.get("email")?.errors?.["pattern"])
	}

	get isValidPassword(){
		return (this.getPassword?.touched)&&
		(this.getPassword?.errors?.["required"])||
		(this.getPassword?.errors?.["minlength"])
	}

	get isValidRepass(){
		return (this.getRepass?.touched)&&
		(this.getRepass?.errors?.["required"])||
		(this.registerForm.get("passGroup")?.errors?.["dontMatch"])
	}

	constructor(private userService: UserService, private router: Router) { }

	onRegister() {
		const username = this.registerForm.value.username;
		const email = this.registerForm.value.email;
		const password = this.registerForm.value.passGroup?.password;
		const phoneNumber = this.registerForm.value.tel;
		try {
			this.userService.register(username, email, password, phoneNumber);
			this.router.navigate(['/home']);
		} catch (err) {
			if (err instanceof Error) {
				alert(err.message);
			}
		}
	}
}
