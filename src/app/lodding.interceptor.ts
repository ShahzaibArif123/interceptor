import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class LoddingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
request = request.clone({
    setHeaders: {
        'api-key': "shahzaib",
        'token_id': '1234'
    }
})
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('Error occurred:', error);
        return throwError(error);
      })
    );
  }
}
