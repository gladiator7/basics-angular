import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription : Subscription;

  constructor( private route : ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    this.paramsSubscription = this.route.params
    .subscribe(
      (params: Params) =>{
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );

    // if we dont use the params of route wiht subscirbe then clicking on the Anna link wont changethe value of template but only link in  the address bar 
  }

  ngOnDestroy(){
    this.paramsSubscription.unsubscribe();
  }
  // we need this to unsubscribe the subscription as it not tide to component 

}
