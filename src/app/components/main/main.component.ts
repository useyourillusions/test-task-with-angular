import { Component, OnInit } from '@angular/core';
import { PreloaderService } from '../../services/preloader/preloader.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  isPreloaderVisible = true;

  constructor(
    private filterService: PreloaderService
  ) {}

  ngOnInit() {
    this.filterService.preloader.subscribe(res => {
      this.isPreloaderVisible = res;
    });
  }
}
