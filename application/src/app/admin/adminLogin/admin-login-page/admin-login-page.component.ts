import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.css']
})
export class AdminLoginPageComponent implements OnInit {
  userFormGroup: FormGroup | undefined;

  constructor(private router: Router, private adminService:AdminService, private userservice: UserService) { }
  userName: string = '';
  passwordCredentials: string = '';

  ngOnInit(): void {
    this.userFormGroup = new FormGroup({
      userName: new FormControl('', [Validators.required, 
                                      Validators.minLength(2), 
                                      Validators.maxLength(10)]),
      userContact: new FormControl()
    })
    
  }

  validUserCheck(){
    //Validate using NODE JS API.
    let loginAdmin = {
     
      username: this.userName,
      passwordCredentials: this.passwordCredentials
    }
    this.userservice.login(loginAdmin).subscribe(
      (response=> {
        console.log("user logged in")
      }
    ));
    this.router.navigate(['./view-news']);
  }

}
