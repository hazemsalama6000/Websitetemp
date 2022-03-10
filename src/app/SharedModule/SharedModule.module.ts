import { NgModule } from "@angular/core";
import { MaterialsModules } from "./MaterialModules";

@NgModule({
imports:[MaterialsModules],
exports:[MaterialsModules]
})

export class SharedModule{


}