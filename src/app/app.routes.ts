import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page-component/home-page.component';


const appRoutes: Routes = [
  { path: '', component: HomePageComponent }
];


@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(appRoutes)
  ]
})

export class AppRoutes {}
