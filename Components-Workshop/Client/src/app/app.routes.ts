import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { AddThemeComponent } from './theme-list/add-theme/add-theme.component';

export const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "themes", component: ThemeListComponent },
    { path: "add-theme", component: AddThemeComponent },
    { path: "404", component: NotFoundComponent },
    { path: "**", redirectTo: "/404", pathMatch: "full" }
];
