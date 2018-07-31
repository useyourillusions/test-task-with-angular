import {Component, ElementRef, OnInit, AfterViewInit, QueryList, ViewChildren, ViewChild, Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilterService } from '../../../services/filter/filter.service';
import { PreloaderService } from '../../../services/preloader/preloader.service';

@Component({
  selector: 'app-cards-list',
  template: `
    <ul *ngIf="filteredCards.length" class="l-examples" #list>
      <li class="l-examples__item"
          *ngFor="let card of filteredCards;"
          [card]="card"
          #listItem>
      </li>
    </ul>
  `
})
export class CardsListComponent implements OnInit, AfterViewInit {

  cards;
  filteredCards = [];
  currentFilter = 'all';

  @ViewChild('list') list: ElementRef;
  @ViewChildren('listItem', { read: ElementRef }) listItems: QueryList<ElementRef>;
  @Output() errorEmitter: EventEmitter<object> = new EventEmitter<object>();

  constructor(
    private http: HttpClient,
    private filterService: FilterService,
    private preloaderService: PreloaderService
  ) {}

  ngOnInit() {
    this.http.get('http://localhost:5000/api/cards')
      .subscribe((res: {cards: [{}]}) => {
        this.cards = res.cards;
        this.applyFilter();

      }, err  => {
        console.log(err);

        this.preloaderService.togglePreloader(false);
        if (err.error) {
          this.errorEmitter.emit(err.error);
        }
    });

    this.filterService.filter.subscribe(res => {
      this.currentFilter = res;
      this.applyFilter();
    });
  }

  ngAfterViewInit() {
    const appearanceWithRotate = (items) => {
      this.list.nativeElement.classList.remove('_animate-opacity');
      items.forEach((li, i) => {
        li.nativeElement.classList.remove('_animate-rotate');
        setTimeout(() => li.nativeElement.classList.add('_animate-rotate'), 100 * i - 10);
      });
    },
    promises = [];

    this.listItems.changes.subscribe(res => {
      const isImagesLoaded = res.toArray()
        .every((li) => li.nativeElement.querySelector('.l-examples__img').complete);

      if (isImagesLoaded) {
        appearanceWithRotate(res);

      } else {
        this.preloaderService.togglePreloader(true);

        res.toArray().forEach(li => {
          const img = li.nativeElement.querySelector('.l-examples__img');

          promises.push(
            new Promise((resolve, reject) => {
              img.addEventListener('load', resolve);
              img.addEventListener('error', reject);
            })
          );
        });

        Promise.all(promises).then(() => {
          this.preloaderService.togglePreloader(false);
          this.list.nativeElement.classList.add('_animate-opacity');
        });
      }
    });
  }

  applyFilter(): void {
    this.filteredCards = this.cards.filter(card =>
      (this.currentFilter === 'all') || (card.filter.indexOf(this.currentFilter) > -1)
    );
  }
}
