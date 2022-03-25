import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpResponseBase } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, retry } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
constructor(){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(this.AddAuthToHeader(req)).pipe(
            catchError(
                (requestError: HttpErrorResponse) => {
                    // Log Here Response Error
                    // requestError.message
                    return next.handle(req);
                }
            )
        );

    }

    AddAuthToHeader(request: HttpRequest<any>) {
        return request.clone({
            setHeaders: {
                // 'X-Api-Key': environment.ApiKey
                        }
        });
    }


}