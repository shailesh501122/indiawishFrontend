import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { BlogService } from 'src/app/services/Blog/blog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss'],
})
export class AddBlogComponent implements OnInit {
  blogForm!: FormGroup; 
  response!: {dbPath: ''};
  constructor(
    private blog: BlogService,
    private fb: FormBuilder,
    private toast: NgToastService,
    private router: Router
  ) {}

  ngOnInit() {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      imgPath: ['']
    
    });
  }


  onSubmit() {
    if (this.blogForm.valid) {
      console.log(this.blogForm.value);
      let blogObj = {
        ...this.blogForm.value,
        imgPath: this.response.dbPath
      };
      this.blog.addBlog(blogObj).subscribe({
        next: (res) => {
          console.log(res);
          this.blogForm.reset();
          this.toast.success({
            detail: 'Success',
            summary: 'Blog Successfull Posted',
            duration: 5000,
          });
        },
        error: (err) => {
          console.log(err);
          this.toast.error({
            detail: 'ERROR',
            summary: err.error.message,
            duration: 50000000,
          });
        },
      });
    } else {
      console.log('err');
    }
  }

  uploadFinished = (event:any) => { 
    this.response = event; 
  }
}
