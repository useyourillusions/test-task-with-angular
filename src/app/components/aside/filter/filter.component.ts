import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../../services/filter/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html'
})

export class FilterComponent implements OnInit {

  selectedFilter = 'all';

  constructor(
    private filterService: FilterService
  ) { }

  ngOnInit() {
    this.filterService.filter.subscribe(res => { this.selectedFilter = res; });
  }

  applyFilter(e: Event): void {
    const selectedFilter = e.target['dataset'].filter;
    e.preventDefault();

    this.filterService.sendFilter(selectedFilter);
  }
}
