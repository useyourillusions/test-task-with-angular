import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page-component',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {

  errorData = null;

  constructor() {}

  ngOnInit() {}

  receiveErrorData(e) {
    this.errorData = e;
  }
}
