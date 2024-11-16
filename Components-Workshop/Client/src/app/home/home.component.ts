import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
	isNotAuthenticated=false;
	constructor(private userService: UserService) {}

	ngOnInit(): void {
		this.isNotAuthenticated=!this.userService.isLogged;
	}
}
