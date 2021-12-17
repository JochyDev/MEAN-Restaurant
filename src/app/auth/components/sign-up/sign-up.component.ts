import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
  }

  createUser(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const user = this.form.value;
      console.log(user)
      this.loginService.signupUser(user)
      .subscribe( (newUser)  => {
        console.log(newUser)
        this.router.navigate(['./home'])
      }, err => {
        console.log(err)
      })


    }
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      password: ['', [Validators.required]],
      rol: 'USER_ROLE',
    })
  }


}
