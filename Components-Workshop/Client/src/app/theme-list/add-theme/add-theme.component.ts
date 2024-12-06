import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../../services/app.service';

@Component({
    selector: 'app-add-theme',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './add-theme.component.html',
    styleUrl: './add-theme.component.css'
})
export class AddThemeComponent {

    constructor(private router: Router, private app: AppService) { }

    onSubmit(form: NgForm) {
        const { themeName, postText } = form.value;
        this.app.createTheme(themeName, postText).subscribe(() => {
            this.router.navigate(["/themes"]);
        })
    }

    onCancel() {
        this.router.navigate(["/home"]);
    }
}
