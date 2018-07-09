import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preloader',
  template: `
    <div class="b-preloader">
      <div class="b-preloader__inner c1"></div>
      <div class="b-preloader__inner c2"></div>
      <div class="b-preloader__inner c3"></div>
      <div class="b-preloader__inner c4"></div>
    </div>
  `
})
export class PreloaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
