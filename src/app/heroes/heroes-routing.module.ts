import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchHeroesComponent } from './pages/search-heroes/search-heroes.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'home',
        component: HomeComponent
      },
      {
        path:'search',
        component: SearchHeroesComponent
      },
      {
        path:'/:id',
        component: HeroeComponent
      },
      {
        path:'**',
        redirectTo:'home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
