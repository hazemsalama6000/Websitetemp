import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ISource } from "../Models/NewsSources";

@Injectable({providedIn:'root'})

export class NewsSourceService{

    constructor(private httpClient:HttpClient){}

    getMenuItems():Observable<any>{
     return this.httpClient.get<any>(environment.SourceUrl);
    }

}