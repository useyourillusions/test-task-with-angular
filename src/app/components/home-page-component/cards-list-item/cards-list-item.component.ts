import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'li.l-examples__item',
  templateUrl: './cards-list-item.component.html'
})
export class CardsListItemComponent implements OnInit, OnChanges {

  @Input() card;

  constructor() { }

  ngOnInit(...args) {
  }

  ngOnChanges() {
  }

}
