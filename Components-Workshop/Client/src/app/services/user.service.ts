import { Injectable, OnDestroy } from '@angular/core';
import { AuthUser } from '../types/users';
import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService implements OnDestroy{
    private user$$ = new BehaviorSubject<AuthUser | null>(null);
    private user$ = this.user$$.asObservable();

    USER_KEY = '[user]';
    user: AuthUser | null = null;
    userSubscription: Subscription | null = null;

    get isLogged(): boolean {
        return !!this.user;
    }

    constructor(private http: HttpClient) {
        const storedUser = localStorage.getItem(this.USER_KEY);
        if (storedUser) {
            this.user = JSON.parse(storedUser);
            this.user$$.next(this.user)
        }
        this.userSubscription = this.user$.subscribe((user) => {
            this.user = user;
        });
    }

    login(email: string | null | undefined, password: string | null | undefined): Observable<AuthUser> {
        return this.http.post<AuthUser>("/api/login", { email, password }).pipe(tap((user) => {
            this.user$$.next(user);
            localStorage.setItem(this.USER_KEY, JSON.stringify(user));
        }))
    }

    register(username: string | null | undefined
        , email: string | null | undefined,
        password: string | null | undefined,
        phoneNumber: string | null | undefined
    ): Observable<AuthUser> {
        return this.http.post<AuthUser>("/api/register", { username, email, password, phoneNumber }).pipe(tap((user) => {
            this.user$$.next(user);
            localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
        }))
    }

    logout() {
        return this.http.post("/api/logout", {}).pipe(tap(() => {
            this.user$$.next(null);
            localStorage.removeItem(this.USER_KEY);
        }))
    }

    getUser() {
        return this.user;
    }

    getUserProfile(): Observable<AuthUser> {
        return this.http.get<AuthUser>("/api/users/profile").pipe(tap((user) => {
            this.user$$.next(user);
        }));
    }

    ngOnDestroy(): void {
        this.userSubscription?.unsubscribe();
    }
}
