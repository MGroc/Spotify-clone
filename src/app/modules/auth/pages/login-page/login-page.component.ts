import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  
  errorSession: boolean = false
  formLogin: FormGroup = new FormGroup({})

  constructor(private AuthService: AuthService, private cookie: CookieService, 
    private router: Router) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('',
        [
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ]
        )
      })
  }
  sendLogin(): void {
    const {email, password} = this.formLogin.value
    
    this.AuthService.sendCredentials(email, password)
    .subscribe(responseOk => {
      console.log('Sesion iniciada correcta', responseOk)
      const { tokenSession, data } = responseOk
      const now = new Date()
      const expires = new Date(now.getTime() + 1 * 3600 * 1000);
      
      // console.log(expires)
      this.cookie.set('token', tokenSession, expires, '/')
      this.cookie.set('role', data.role, expires, '/')
      this.router.navigate(['/', 'tracks'])
    },
    err => {
      this.errorSession = true
      console.log('Ocurrió un error con tu email o password')
    })
  }
}
