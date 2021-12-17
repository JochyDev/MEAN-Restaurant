import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import {environment} from '../../../environments/environment';
import { User } from 'src/app/models/user.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    // public headers: HttpHeaders

  ) { }

  signupUser(user: User) {
    return this.http.post(`${environment.api_url}/usuarios`, user)
  }

  loginUser(user: Partial<User>){
    return this.http.post(`${environment.api_url}/auth/login`, user)
        .pipe(
          map((rta: any) => {
            localStorage.setItem('x-token', rta.token)
            return rta['usuario'].rol
          })
        )
  } 

}
