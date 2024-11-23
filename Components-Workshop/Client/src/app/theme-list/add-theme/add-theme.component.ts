import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-theme',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './add-theme.component.html',
    styleUrl: './add-theme.component.css'
})
export class AddThemeComponent {
    constructor(private router: Router) { }
    onSubmit(form: NgForm) {
        if (form.invalid) {
            return;
        }
        this.router.navigate(["/themes"]);
    }

    onCancel() {
        this.router.navigate(["/home"]);
    }
}
