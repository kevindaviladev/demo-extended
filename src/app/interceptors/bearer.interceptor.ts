import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';

export const AuthInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  const modifiedRequest = req.clone({
    setHeaders: {
      Authorization: 'Bearer <your-token>',
    },
  });
  return next(modifiedRequest);
};
