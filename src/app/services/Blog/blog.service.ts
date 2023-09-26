import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogModel } from 'src/app/models/Blog/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private baseUrl: string = 'https://localhost:7058/api/Blog';

  constructor(private http :HttpClient) { }
  
  addBlog(blogObj: BlogModel) {
    return this.http.post<any>(`${this.baseUrl}/blogpost`, blogObj);
  }
  GetAllBlog(){
    return this.http.get<any>(`${this.baseUrl}/getblogs`)
  }
}
