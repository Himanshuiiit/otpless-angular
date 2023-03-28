import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class GetUserService {
  constructor() {}

  getUser(): Observable<any> {

    const userSubject = new Subject<any>();
  
    //@ts-ignore
    window.otpless = (otplessUser) => {
      userSubject.next(otplessUser);
      userSubject.complete();
    };
  
    return userSubject.asObservable();
  }
}
