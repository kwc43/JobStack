import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { HeaderComponent } from './shared/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/coure.module';
import { SharedModule } from './shared/shared.module';
import { AccountModule } from './modules/account/account.module';
import { AccountService } from './core/services/account/account.service';
import { AuthenticationCallbackComponent } from './authentication-callback/authentication-callback.component';

@NgModule({
  imports: [
    AccountModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    HomeModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    AuthenticationCallbackComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
