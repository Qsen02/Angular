import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.development';

export class AppService {

  constructor(private http:HttpClient) { }

  getAllThemes(){
    return this.http.get(`${environment.apiUrl}/themes`);
  }

  getAllPosts(){
    return this.http.get(`${environment.apiUrl}/posts?limit=5`);
  }
}
