import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  userFormGroup: any;

  email:string = "";
  emailBody:String = "";
  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  sendEmail(){
    alert("place email somewhere in database?" + " \n emailer " + this.email + "\n message pasted \n" + this.emailBody);
    this.router.navigate(['/homepage']);
  }
}
