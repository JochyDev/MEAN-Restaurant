import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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

  loginUser(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const user = this.form.value;
      this.loginService.loginUser(user)
      .subscribe( rol => {
        if( rol !== 'ADMIN_ROLE'){
          this.router.navigate(['./home'])
        }else{
          this.router.navigate(['./admin'])
        }
      }, err => {
        console.log(err)
      })
    }

  }

  private buildForm(){
    this.form = this.formBuilder.group({
      correo: ['', Validators.required],
      password: ['', Validators.required]
    }) 
  }



}
