import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class GetUserService {
  constructor(private http: HttpClient) {}

  private userSubject = new Subject<any>();
  user$ = this.userSubject.asObservable();

  setUser(user: any) {
    this.userSubject.next(user);
    this.userSubject.complete();
  }

  getUser(userNumber: string | undefined): Observable<any> {
    return this.http.get(" http://localhost:3000/users?number=" + userNumber);
  }
}
