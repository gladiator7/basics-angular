import { Component, EventEmitter, Output } from '@angular/core';
import {LoggingService } from '../logging.service';
import {AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: []
})
export class NewAccountComponent {
  

  constructor(private loggingService : LoggingService,
  private accountService: AccountService
  ){}

  onCreateAccount(accountName: string, accountStatus: string) {

this.accountService.addAccount(accountName, accountStatus ); 
//this.loggingService.logStatusChange(accountStatus);
    //we should not instantiate the service and this method is not recommended rat her we should use dependency injection
    //injects instance of  class into our componenet
    //const service = new LoggingService();
    //service.logStatusChange(accountStatus);

    
  }
}
