import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { AddThemeComponent } from './theme-list/add-theme/add-theme.component';
import { CurrentThemComponent } from './theme-list/current-them/current-them.component';
import { ProfileComponent } from './user/profile/profile.component';
import { userGuard } from './guards/user.guard';
import { guestGuard } from './guards/guest.guard';

export const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "login", component: LoginComponent, canActivate:[guestGuard] },
    { path: "register", component: RegisterComponent,canActivate:[guestGuard] },
    {
        path: "themes", children: [
            { path: "", component: ThemeListComponent },
            { path: ":id", component: CurrentThemComponent }
        ]
    },
    { path: "add-theme", component: AddThemeComponent, canActivate:[userGuard] },
    { path: "profile", component: ProfileComponent },
    { path: "404", component: NotFoundComponent },
    { path: "**", redirectTo: "/404", pathMatch: "full" }
];
