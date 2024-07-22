import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilmComponent } from './film/film.component';
import { GhibliComponent } from './ghibli/ghibli.component';
import { GhibliMovieComponent } from './ghibli-movie/ghibli-movie.component';

const routes: Routes = [
  { path: '', redirectTo: '/ghibli', pathMatch: 'full' },
  { path: 'ghibli', component: GhibliComponent },
  { path: 'film/:id', component: FilmComponent },
  { path: 'ghibliMovie', component: GhibliMovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
