import { Component, Input } from "@angular/core";

@Component({
selector:'Header-C',
template:`<mat-toolbar color="primary">
<button mat-fab (click)="Sidenav.open()">
  <mat-icon>reorder</mat-icon>
</button>
 <span>My Application</span>
</mat-toolbar>`
})
export class HeaderComponent{
@Input() Sidenav:any;
}