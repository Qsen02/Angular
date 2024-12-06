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

	onToggle(event: Event) {
		event.preventDefault();
		this.toggle = !this.toggle;
	}

	onSubmit(event: Event, form: NgForm) {
		const { username, email, tel } = form.value;
		this.userService.editProfile(username, email, tel).subscribe((user) => {
			this.user=user;
			form.reset();
			this.onToggle(event);
		})

		this.userService.user=this.user;
	}
}
