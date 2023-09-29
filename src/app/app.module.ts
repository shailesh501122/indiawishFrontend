import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignupComponent } from './components/signup/signup.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { NgToastModule } from 'ng-angular-popup';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { HomeComponent } from './components/home/home.component';
import { UploadComponent } from './components/upload/upload.component';
import { AddBlogComponent } from './components/Blogs/add-blog/add-blog.component';
import { ListBlogComponent } from './components/Blogs/list-blog/list-blog.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { BlogDetailComponent } from './components/Blogs/blog-detail/blog-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ResetPasswordComponent,
    DashboardComponent,
    HomeComponent,
    UploadComponent,
    AddBlogComponent,
    ListBlogComponent,
    BlogDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgToastModule,
    HttpClientModule,
    CKEditorModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
   },],
  bootstrap: [AppComponent]
})
export class AppModule { }
