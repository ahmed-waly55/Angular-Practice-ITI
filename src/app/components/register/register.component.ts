import { JsonPipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,JsonPipe,NgFor],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
 
  UserRegisterForm:FormGroup

  constructor(){
    this.UserRegisterForm = new FormGroup({
      name:new FormControl('',[Validators.required,Validators.pattern('^[a-z-A-Z]{3,10}$')]),
      email:new FormControl(''),
      password:new FormControl(''), // this is initial value ('')
      address: new FormGroup({
        city: new FormControl(''),
        street: new FormControl('')
      }),
      phoneNumber: new FormArray([new FormControl('',[Validators.pattern('')])])
    });
  }
  ngOnInit(): void {
    // get user id >>> id in url 

    // this.UserRegisterForm.setValue({
    //   name: 'ahmed',
    //   email: 'ahmed@gmail.com',
    //   password: '123456',
    //   address: {
    //     city: 'cairo',
    //     street: '112'
    //   }
    // })

    // in the case ignore password

        this.UserRegisterForm.patchValue({
      name: 'ahmed',
      email: 'ahmed@gmail.com',
      address: {
        city: 'cairo',
        street: '112'
      }
    })
  }

  register(){
    // alert('Done')
    console.log(this.UserRegisterForm.value);
    
  }
  get name(){
    return this.UserRegisterForm.get('name');
  }

  get phones(){
    return this.UserRegisterForm.get('phoneNumber') as FormArray
  }

  addNewPhone(){
    this.phones.push(new FormControl('',[Validators.pattern('')]))
  }
}
 