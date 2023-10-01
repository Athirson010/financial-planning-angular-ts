
import {Component} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginDTO } from 'src/app/types/autenticacaoType';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
 

export class LoginComponent {  

  public loginForm: FormGroup = this.formBuilder.group({
    email: [''],
    senha: ['']
  })

  constructor(private formBuilder: FormBuilder) {}


  logar(){
   console.log(this.loginForm)
  };
}
