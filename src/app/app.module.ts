import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './Modules/SharedModule/SharedModule.module';
import { LoggingService } from './Services/Logging.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './Services/Interceptors/AuthInterceptor.interceptor';
import { CachingInterceptor } from './Services/Interceptors/CachingInterceptor.interceptor';
import { ErrorInterceptor } from './Services/Interceptors/ErrorInterceptor.interceptor';
import { LoggingInterceptor } from './Services/Interceptors/LoggingInterceptor.interceptor';

import { MultilevelMenuService, NgMaterialMultilevelMenuModule, ɵb } from 'ng-material-multilevel-menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolBar } from './Components/ToolBar/ToolBar.component';
import { HaederComponent } from './Components/Header/Header.component';
import { SearchComponent } from './Components/SearchBar/Search.component';
import { ListOfCardsComponent } from './Components/ListCards/ListOfCards.component';
import { FundamentalsComponent } from './Components/Fundamentals/Fundamental.component';
import { InstructorsComponent } from './Components/Instructors/Instructors.component';
import { ContactsComponent } from './Components/Contacts/Contacts.component';
import { FooterComponent } from './Components/Footer/Footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolBar,
    HaederComponent,
    SearchComponent,
    ListOfCardsComponent,
    FundamentalsComponent,
    InstructorsComponent,
    ContactsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    NgMaterialMultilevelMenuModule
  ],
  providers: [
    LoggingService, ɵb, MultilevelMenuService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
    ,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CachingInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
