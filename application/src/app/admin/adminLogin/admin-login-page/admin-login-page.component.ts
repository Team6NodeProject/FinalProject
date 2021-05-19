import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.css']
})
export class AdminLoginPageComponent implements OnInit {
  userFormGroup: FormGroup | undefined;

  constructor() { }
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

  }

}
