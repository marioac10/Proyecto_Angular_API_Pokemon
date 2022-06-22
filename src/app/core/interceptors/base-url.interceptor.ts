import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {

  constructor( @Inject('BASE_URL_API') private baseUrl: string) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    console.log("Tres")
    const apiReq = request.clone({
      url: `${this.baseUrl}/${request.url}`
    });
    console.log("api:"+apiReq)
    return next.handle(apiReq);
  }

}
