import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantoneComponent } from './pantone.component';

describe('PantoneComponent', () => {
  let component: PantoneComponent;
  let fixture: ComponentFixture<PantoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
