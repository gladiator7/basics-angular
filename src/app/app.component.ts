import { Component, OnInit } from '@angular/core';
import { AccountsServics } from './accounts.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsServics]
})
export class AppComponent implements OnInit{

  accounts: {name: string, status: string}[] = [];

constructor(private accountsService: AccountsServics){}
  ngOnInit(){
  this.accounts = this.accountsService.accounts;
  }
 
}
