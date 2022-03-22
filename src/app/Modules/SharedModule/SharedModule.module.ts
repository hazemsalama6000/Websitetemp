import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ɵb } from "ng-material-multilevel-menu";
import { MaterialsModules } from "./MaterialModules";

@NgModule({
imports:[
    MaterialsModules,
    HttpClientModule
],
exports:[MaterialsModules],
})

export class SharedModule
{


}