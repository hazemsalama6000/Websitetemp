import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './Components/News/News.component';
import { NewsResolver } from './Services/Resolvers/News.resolver';

const routes: Routes = [
  {path:'News/:SourceId/:SourceName',component:NewsComponent,resolve:{articles:NewsResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
