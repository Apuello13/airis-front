import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class TokenService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = '';
    const EMPTY = 0;
    const session = sessionStorage.getItem('user');
    if (session) token = JSON.parse(session).token;
    if (token.length !== EMPTY)
      req = req.clone({
        setHeaders: {
          authorization: `Bearer ${token}`,
        },
      });
    return next.handle(req);
  }
}
