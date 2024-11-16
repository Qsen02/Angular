import { Component, OnInit } from '@angular/core';
import { AuthUser } from '../../types/users';
import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-profile',
	standalone: true,
	imports: [],
	templateUrl: './profile.component.html',
	styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
	user: AuthUser | null = null;

	constructor(private userService: UserService) { }

	ngOnInit(): void {
      this.user=this.userService.getUser();
	}
}
