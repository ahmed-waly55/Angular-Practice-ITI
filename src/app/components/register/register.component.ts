import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
 
  UserRegisterForm:FormGroup

  constructor(){
    this.UserRegisterForm = new FormGroup({
      name:new FormControl('',[Validators.required,Validators.pattern('^[a-z-A-Z]{3,10}$')]),
      email:new FormControl(''),
      password:new FormControl(''), // this is initial value ('')
      address: new FormGroup({
        city: new FormControl(''),
        street: new FormControl('')
      })
    });
  }

  register(){
    alert('Done')
  }
}
