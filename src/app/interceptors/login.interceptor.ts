import { LoginComponent } from './../login/login.component';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest,HttpHandler,HttpEvent, HTTP_INTERCEPTORS,HttpParams } from '@angular/common/http';



export class LoginInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if(token){
      const keys = req.params.keys();
      let params = new HttpParams();
      for (let index=0;index<keys.length;index++)
      {
        params=params.append(keys[index],req.params.get(keys[index]));
      }
      params=params.append('acces_token',token);
      const clonereq = req.clone(
      {
        params
      }
      );
      return next.handle(clonereq);
    }
    else
    {
    return next.handle(req);
    }
  }
}

export const LoginInterceptorProvider ={
  provide: HTTP_INTERCEPTORS,
  useClass : LoginInterceptor,
  multi:true
}
