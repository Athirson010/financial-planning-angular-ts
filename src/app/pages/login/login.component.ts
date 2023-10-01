
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
    email: ['', [Validators.email, Validators.minLength(1)]],
    senha: ['']
  })

  constructor(private formBuilder: FormBuilder) {}


  logar(){
    console.log('testeeeeeeeeeee')
   console.log(this.loginForm)
  };
}
