import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap, Observable } from 'rxjs';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private _authUrl:string = 'http://challenge-react.alkemy.org/';

  constructor(private http:HttpClient) { }

  login(email:string,password:string){
    const body = {email, password}
    return this.http.post<Auth>(`${this._authUrl}`, body).pipe(
      tap(resp=>{
        if(resp){
          localStorage.setItem('token', resp.token)
        }
      })
    )
  }

  validarToken():Observable<boolean>{
    if(localStorage.getItem('token')){
      return of(true)
    }else{
      return of(false)
    }
  }
}
