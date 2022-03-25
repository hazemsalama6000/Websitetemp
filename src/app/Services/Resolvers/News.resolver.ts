// import { Injectable } from "@angular/core";
// import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
// import { map, Observable } from "rxjs";
// import { Article } from "src/app/Models/Article";

// @Injectable({
//     providedIn: 'root'
// })

// export class NewsResolver implements Resolve<any>{
    
//     constructor(private NewsService: NewsService) {}
    
//     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {

//         let SourceId = route.params['SourceId']
//         let SourceName=route.params['SourceName'];

//         return this.NewsService.getNewsOfSpecificSource(SourceId).pipe(
//             map(
//                 (data:any) => {
//                     return {SourceName:SourceName,articles:data['articles']};
//                               }
//                )
//                 );

//     }

// }