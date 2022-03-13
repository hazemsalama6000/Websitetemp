import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './SharedModule/SharedModule.module';
import { HeaderComponent } from './Header/Header.component';
import { SideMenuComponent } from './SideMenu/SideMenu.component';
import { LoggingService } from './Services/Logging.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './Services/Interceptors/AuthInterceptor.interceptor';
import { CachingInterceptor } from './Services/Interceptors/CachingInterceptor.interceptor';
import { ErrorInterceptor } from './Services/Interceptors/ErrorInterceptor.interceptor';
import { LoggingInterceptor } from './Services/Interceptors/LoggingInterceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    LoggingService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }
  ,
   {
     provide:HTTP_INTERCEPTORS,
     useClass:LoggingInterceptor,
     multi:true
   },
  {
  provide:HTTP_INTERCEPTORS,
  useClass:CachingInterceptor,
  multi:true
  },
  {
    provide:HTTP_INTERCEPTORS,
    useClass:ErrorInterceptor,
    multi:true
  }

],
  bootstrap: [AppComponent]
})
export class AppModule { }
