import { HttpClient } from '@angular/common/http';
import { Themes } from '../types/themes';
import { Posts } from '../types/posts';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root"
})
export class AppService {

    constructor(private http: HttpClient) { }

    getAllThemes() {
        return this.http.get<Themes[]>(`/api/themes`);
    }

    getRecentPosts() {
        return this.http.get<Posts[]>(`/api/posts?limit=5`);
    }

    getThemeById(id: string) {
        return this.http.get<Themes>(`/api/themes/${id}`);
    }
}
