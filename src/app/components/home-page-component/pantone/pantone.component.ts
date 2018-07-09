import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-pantone',
  templateUrl: './pantone.component.html'
})
export class PantoneComponent implements OnInit, AfterViewInit {

  colorSchemeClass = localStorage.getItem('colorScheme') || 'color-scheme-default';
  colors;

  constructor(
    private elRef: ElementRef
  ) {}

  ngOnInit() {
    document.body.classList.add(this.colorSchemeClass);
  }

  ngAfterViewInit() {
    this.colors = Array.from(this.elRef.nativeElement.getElementsByClassName('l-colors__item'));
  }

  applyScheme(e: any, colorScheme: string) {
    const pantoneParent = e.target.parentNode.parentNode.parentNode,
      colorFlash = document.createElement('div');
      colorFlash.classList.add('b-pantone__flash');

    pantoneParent.appendChild(colorFlash);
    setTimeout(() => colorFlash.remove(), 400);

    this.colorSchemeClass = colorScheme;
    this.colors.reduce((delay, li) => {
      if (li !== e.target) {
        delay += 0.05;
        li.setAttribute('style', `transition-delay: ${delay}s`);
      } else {
        li.setAttribute('style', `transition-delay: 0s`);
      }
      return delay;
    }, 0);

    setTimeout(() =>
        this.colors.forEach((li, i) => li.setAttribute('style', `transition-delay: ${i * 0.05}s`)),
      250
    );

    localStorage.setItem('colorScheme', this.colorSchemeClass);
    document.body.removeAttribute('class');
    document.body.classList.add(this.colorSchemeClass);
  }
}
