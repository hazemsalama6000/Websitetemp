import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MaterialsModules } from "./MaterialModules";

@NgModule({
imports:[MaterialsModules,
HttpClientModule
],
exports:[MaterialsModules]
})

export class SharedModule{


}