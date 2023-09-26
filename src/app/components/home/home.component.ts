import { Component, OnInit } from '@angular/core';
import { BlogModel } from 'src/app/models/Blog/blog.model';
import { BlogService } from 'src/app/services/Blog/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  blogList!: BlogModel[];
  constructor( private blog:BlogService){}

  ngOnInit(): void {
    this.getblogs();
  }

  getblogs(){
    this.blog.GetAllBlog()
    .subscribe({
      next:(res=>{
        this.blogList = res
      })
    })
  }
}
