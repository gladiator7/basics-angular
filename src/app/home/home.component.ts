import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

onLoadServers(){
  this.router.navigate(['/servers']);

  // if path is "/servers" then it is absolute path
  // if "servers" it is relative path
}
}
