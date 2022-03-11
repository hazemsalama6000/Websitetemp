import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ISource } from "../Models/NewsSources";

@Injectable({providedIn:'root'})

export class SideMenuService{

    constructor(private httpClient:HttpClient){}

    getMenuItems():Observable<ISource>{
     return this.httpClient.get<ISource>(environment.SourceUrl);
    }

}