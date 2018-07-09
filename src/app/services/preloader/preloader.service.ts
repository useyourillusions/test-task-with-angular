import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreloaderService {

  private preloaderSource = new Subject<boolean>();
  preloader = this.preloaderSource.asObservable();

  constructor() {}

  togglePreloader(param: boolean) {
    this.preloaderSource.next(param);
  }
}
