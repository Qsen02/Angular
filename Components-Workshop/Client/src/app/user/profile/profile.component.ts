import { Component, OnInit } from '@angular/core';
import { AuthUser } from '../../types/users';
import { UserService } from '../../services/user.service';
import { FormsModule, NgForm } from '@angular/forms';
import { emailPattern } from '../../utils/emailRegexp';

@Component({
	selector: 'app-profile',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './profile.component.html',
	styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
	user: AuthUser | null = null;
	toggle = false;
	emailValidator = emailPattern;

	constructor(private userService: UserService) { }

	ngOnInit(): void {
		this.user = this.userService.getUser();
	}

	onToggle(event:Event) {
		event.preventDefault();
		this.toggle = !this.toggle;
	}

	onSubmit(event:Event,form: NgForm) {
		try {
			const username = form.controls?.["username"].value as string | null | undefined;
			const email = form.controls?.["email"].value;
			const tel = form.controls?.["tel"].value;
			if (!username || !email || !tel) {
				throw new Error("All fields required!");
			}
			if (this.user) {
				this.user.username = username;
				this.user.email = email;
				this.user.tel = tel;
			}
			form.reset();
			this.onToggle(event);
		} catch (err) {
			if (err instanceof Error) {
				alert(err.message);
			}
		}
	}
}
