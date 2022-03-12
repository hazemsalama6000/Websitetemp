import { Injectable } from "@angular/core";

@Injectable()

export class LoggingService {
   LogRequestsMessage(msg:string){

   }
   LogRequestError(msg:{severity:string,summary:string,detail:string}){

   }
} 