import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SearchHeroesComponent } from './pages/search-heroes/search-heroes.component';
import { HeroeComponent } from './pages/heroe/heroe.component';


@NgModule({
  declarations: [
    HomeComponent,
    SearchHeroesComponent,
    HeroeComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
