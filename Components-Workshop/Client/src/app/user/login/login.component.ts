import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { emailPatter } from '../../utils/emailRegexp';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [RouterLink, ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
    loginForm = new FormGroup({
        email: new FormControl("", [Validators.required, Validators.pattern(emailPatter)]),
        password: new FormControl("", [Validators.required, Validators.minLength(5)])
    })

    constructor(private userService: UserService, private router: Router) { }

    get isInvalidEmail() {
        return (this.loginForm.get("email")?.touched) &&
            (
                (this.loginForm.get("email")?.errors?.["required"]) ||
                (this.loginForm.get("email")?.errors?.["pattern"])
            )
    }

    get isInvalidPassword() {
        return (this.loginForm.get("password")?.touched) &&
            (
                (this.loginForm.get("password")?.errors?.["required"]) ||
                (this.loginForm.get("password")?.errors?.["minlength"])
            )
    }

    onLogin() {
        try {
            const email = this.loginForm.value.email;
            const password = this.loginForm.value.password;
            this.userService.login(email, password);
            this.router.navigate(['/home']);
        } catch (err) {
            if (err instanceof Error) {
                alert(err.message);
            }
        }
    }
}
