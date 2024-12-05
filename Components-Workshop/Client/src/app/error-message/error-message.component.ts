import { Component, OnInit } from '@angular/core';
import { ErrorMessageService } from '../services/error-message.service';

@Component({
	selector: 'app-error-message',
	standalone: true,
	imports: [],
	templateUrl: './error-message.component.html',
	styleUrl: './error-message.component.css'
})
export class ErrorMessageComponent implements OnInit {
	errMessage: string = "";

	constructor(private errService: ErrorMessageService) { }

	ngOnInit(): void {
		this.errService.err$.subscribe((err) => {
			this.errMessage = err;
		})
	}
}
