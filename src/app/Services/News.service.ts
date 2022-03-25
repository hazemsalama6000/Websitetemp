// import { HttpClient } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Observable } from "rxjs";
// import { environment } from "src/environments/environment";
// import { ApiPaths } from "../Enums/ApiPaths";

// @Injectable({
//     providedIn: "root"
// })

// export class NewsService {
//     constructor(private httpClient: HttpClient) { }

//     getNewsOfSpecificSource(SourceId: string): Observable<any> {
//         return this.httpClient.get<any>(environment.SourceUrl + ApiPaths.News + `?sources=${SourceId}`)
//     }

// }