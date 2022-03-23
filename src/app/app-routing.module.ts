import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsResolver } from './Services/Resolvers/News.resolver';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
