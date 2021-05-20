import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor(private router: Router, private adminService:AdminService) { }

  usersName: string = '';
  email: string = '';
  //not the best way. 
  password: string = '';
  confirmPassword: string =''; 

  ngOnInit(): void {
  }

  createUser(){
    let newAdmin = {
      email: this.email,
      name: this.usersName,
      username: this.email,
      password: this.password
    }
    this.adminService.addAdmin(newAdmin).subscribe(
      (response)=> {
        console.log("uuser was added");
      }
    );
  }

}
