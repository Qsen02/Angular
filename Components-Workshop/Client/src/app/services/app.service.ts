import { HttpClient } from '@angular/common/http';
import { Themes } from '../types/themes';
import { Posts } from '../types/posts';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class AppService {

    constructor(private http: HttpClient) { }

    getAllThemes(): Observable<Themes[]> {
        return this.http.get<Themes[]>(`/api/themes`);
    }

    getRecentPosts(): Observable<Posts[]> {
        return this.http.get<Posts[]>(`/api/posts?limit=5`);
    }

    getThemeById(id: string): Observable<Themes> {
        return this.http.get<Themes>(`/api/themes/${id}`);
    }

    createTheme(themeName: string, postText: string): Observable<Themes> {
        return this.http.post<Themes>("/api/themes", { themeName, postText });
    }

    createComment(themeId:string,postText:string):Observable<Themes>{
        return this.http.post<Themes>(`/api/themes/${themeId}`,{postText});
    }
}
