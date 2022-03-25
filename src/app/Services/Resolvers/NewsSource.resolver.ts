// import { Injectable } from "@angular/core";
// import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
// import { map, Observable } from "rxjs";
// import { ISource } from "src/app/Models/NewsSources";
// import { NewsSourceService } from "../NewsSource.service";


// @Injectable({
//     providedIn: 'root'
// })

// export class NewsSourceResolve implements Resolve<ISource[]>{

//     constructor(private newsSourceService: NewsSourceService) { }

//     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISource[]> {
//         return this.newsSourceService.getMenuItems()
//             .pipe(
//                 map(data => { return data['sources'] })
//             );
//     }

// }