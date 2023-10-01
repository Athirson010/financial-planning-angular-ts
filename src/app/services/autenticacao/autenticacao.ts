import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDTO, TokenResponse } from 'src/app/types/autenticacaoType';

@Injectable({
    providedIn: 'root'
})
export class AutenticacaoService {
    private urlBase: string = '';

    constructor(private http: HttpClient){
        this.urlBase = "http://localhost:8080/";
    }

    autenticar(loginDTO: LoginDTO): Observable<TokenResponse>{
        let url = this.urlBase.concat('autenticar');
        return this.http.post<TokenResponse>(url, loginDTO)
    }

}