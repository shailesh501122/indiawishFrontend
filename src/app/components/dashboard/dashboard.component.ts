import { UserService } from './../../services/user.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserStoreService } from 'src/app/services/user-store.service';
import { forkJoin } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  fullName!: string;
  users!: User[];
  constructor(public userStore: UserStoreService, public auth: AuthService, private userService: UserService,    private toast: NgToastService,) { }

  ngOnInit() {
    this.userStore.getFullName()
    .subscribe(res=>{
      let value = this.auth.getFullNameFromToken();
      this.fullName = res || value;
    })
    this.getUsers();
  }

  logOut(){
    this.auth.signOut();
  }

  loadFullName(){

  }

  getUsers(){
    this.userService.getAllUsers()
    .subscribe({
      next:(res=>{
        this.users = res
      })
    })
  }

  public createImgPath = (serverPath: string) => { 
    return `https://localhost:7058/${serverPath}`; 
  }

  deleteUser(userId: number | undefined) {
    if (userId !== undefined) {
      this.userService.deleteUser(userId).subscribe(() => {
        this.toast.success({
          detail: 'Success',
          summary: 'User Deleted',
          duration: 5000,
        });
        this.getUsers();
      });
    }
  }
  }


