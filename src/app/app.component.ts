import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-aside></app-aside>
    <app-main></app-main>
  `
})
export class AppComponent {
  title = 'app';
}
