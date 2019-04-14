import { Component, EventEmitter, Output } from '@angular/core';
import {LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  

  constructor(private loggingService : LoggingService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus 
    // });

this.loggingService.logStatusChange(accountStatus);
    //we should not instantiate the service and this method is not recommended rat her we should use dependency injection
    //injects instance of  class into our componenet
    //const service = new LoggingService();
    //service.logStatusChange(accountStatus);

    
  }
}
