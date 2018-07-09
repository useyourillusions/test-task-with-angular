import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { HomePageComponent } from './components/home-page-component/home-page.component';
import { MainComponent } from './components/main/main.component';
import { AsideComponent } from './components/aside/aside.component';
import { CardsListComponent } from './components/home-page-component/cards-list/cards-list.component';
import { CardsListItemComponent } from './components/home-page-component/cards-list-item/cards-list-item.component';
import { PreloaderComponent } from './components/main/preloader/preloader.component';
import { FilterComponent } from './components/aside/filter/filter.component';
import { PantoneComponent } from './components/home-page-component/pantone/pantone.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MainComponent,
    AsideComponent,
    CardsListComponent,
    CardsListItemComponent,
    PreloaderComponent,
    FilterComponent,
    PantoneComponent
  ],
  imports: [
    AppRoutes,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
