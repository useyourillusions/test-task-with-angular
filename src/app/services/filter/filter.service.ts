import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private filterSource = new Subject<string>();
  filter = this.filterSource.asObservable();

  constructor() {}

  sendFilter(param: string) {
    this.filterSource.next(param);
  }
}
