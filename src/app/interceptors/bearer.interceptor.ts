import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Add authorization header or any other modifications to the request
    const modifiedRequest = request.clone({
      setHeaders: {
        Authorization: 'Bearer <your-token>'
      }
    });

    // Forward the modified request to the next handler
    return next.handle(modifiedRequest);
  }
}
