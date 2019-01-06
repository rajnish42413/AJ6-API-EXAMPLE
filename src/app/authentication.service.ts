import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  readonly rootUrl = 'http://nextinnovation.in/api/api/Authentication';

  private httpOptions = {
     headers: new HttpHeaders({
    'x-api-key': 'rajnish@123',
    'Authorization': 'Basic YWRtaW46MTIzNA==',
    'Access-Control-Allow-Origin': 'nextinnovation.in',
    'Cache-Control': 'no-cache',
    'Postman-Token': '25b95c37-8489-dda3-0507-2cb822fd8478',
     })
     };


  constructor( private http: HttpClient ) { }

  // do login
   do_login(email: string, password: string) {
    const body = {
       'email' : email,
       'password' : password };

       return this.http.post<any>(`${this.rootUrl}/login/`, body, this.httpOptions)
            .pipe( map(user => {
                // login successful if there's a jwt token in the response
                if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
            }));

   }


   // do_signup
   do_signup(value: any) {
      const body = value;
         return this.http.post<any>(`${this.rootUrl}/registration/`, body, this.httpOptions)
              .pipe( map(user => {
                  return user;
              }));
     }

     logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
  }


}
