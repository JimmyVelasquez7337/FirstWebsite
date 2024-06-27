import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ContactModel } from './model.ts/contact-model';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  // private mailApi = 'https://mailthis.to/codeninja'

  // constructor(private http: HttpClient) { }

  // PostMessage(input: any) {
  //   return this.http.post(this.mailApi, input, { responseType: 'text' })
  //     .pipe(
  //       map(
  //         (response) => {
  //           if (response) {
  //             return response;
  //           }else{
  //             return null;
  //           }
  //         },
  //         (error: any) => {
  //           return error;
  //         }
  //       )
  //     )
  // }
  private apiUrl = '/api';

  constructor(private http: HttpClient) { }

  sendEmail(formData: any) /*Observable<any>*/ {
    // return this.http.post<any>(this.apiUrl, formData)
    //   .pipe(
    //     catchError(this.handleError)
    //   );
    return this.http.post(`${this.apiUrl}/send-email`, formData);
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Error sending message:', error);
    return throwError('Error sending message: ' + error.message);
  }
}