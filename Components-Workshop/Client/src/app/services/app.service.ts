import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Themes } from '../types/themes';
import { Posts } from '../types/posts';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root"
})
export class AppService {

    constructor(private http: HttpClient) { }

    getAllThemes() {
        return this.http.get<Themes[]>(`${environment.apiUrl}/themes`);
    }

    getRecentPosts() {
        return this.http.get<Posts[]>(`${environment.apiUrl}/posts?limit=5`);
    }

    getThemeById(id: string) {
        return this.http.get<Themes>(`${environment.apiUrl}/themes/${id}`);
    }
}
