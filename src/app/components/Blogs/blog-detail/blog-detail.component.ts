import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/Blog/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit{
  blogItem: any;
  constructor(  private route: ActivatedRoute,
    private blogService: BlogService){}
    ngOnInit(): void {
      this.route.paramMap.subscribe((params) => {
        const blogId = params.get('id');
        if (blogId) {
          // Call your service to fetch the selected blog post based on the 'id'
          this.blogService.getBlogById(blogId).subscribe((blog) => {
            this.blogItem = blog;
          });
        }
      });
    }
    public createImgPath = (serverPath: string) => { 
      return `https://localhost:7058/${serverPath}`; 
    }
    }



