import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';

import { LoggingService } from './logging.service';
import { AccountService } from './account.service';


// there is hierarchial service instances.ex parent and its child has same instance of service but if we add new instance to provider in a component then new instance is add so lead to new instance and values will be different
@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AccountService,
    LoggingService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
