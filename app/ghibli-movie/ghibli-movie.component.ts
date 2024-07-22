import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { GhibliFilms} from '../ghibliData';
import { GhibliService } from '../ghibli.service';

@Component({
  selector: 'app-ghibli-movie',
  templateUrl: './ghibli-movie.component.html',
  styleUrls: ['./ghibli-movie.component.css']
})
export class GhibliMovieComponent implements OnInit {
  films: GhibliFilms[] = [];

  constructor(private ghibliService: GhibliService, private location: Location) { }

  ngOnInit(): void {
   this.getGhibliFilm();
  }

  getGhibliFilm(): void {
    this.ghibliService.getGhibliFilms()
    .subscribe(films => this.films = films.sort((b, a) =>parseInt(a.rt_score) - parseInt(b.rt_score)));
  }
  
  goBack(): void {
    this.location.back();
  }
}
