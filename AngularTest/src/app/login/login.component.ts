import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { UsuariosService } from "../usuarios.service";
import { HttpHeaderResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsuariosService]
})
export class LoginComponent implements OnInit {
  public loginForm
  constructor(public fb: FormBuilder, public usuariosService: UsuariosService) {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(5)]]
    });
  }

  doLogin() {
    console.log(this.loginForm.value.email);
    console.log(this.loginForm.value.password);
    this.usuariosService.getUsuarios().subscribe(function () { console.log("Listo") });
    //this.usuariosService.createUsuario(this.loginForm.value.email, this.loginForm.value.password).subscribe();
  }

  ngOnInit() {
  }

}
