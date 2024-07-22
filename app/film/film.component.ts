import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { GhibliFilms} from '../ghibliData';
import { GhibliService } from '../ghibli.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  film: GhibliFilms | undefined;

  constructor(
    private route: ActivatedRoute,
    private ghibliService: GhibliService,
    private location: Location
  ) {}

  ngOnInit(): void {
   this.getGhibli()
  }

  getGhibli(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.ghibliService.getGhibliFilm(id)
      .subscribe(film => this.film = film);
  }

  goBack(): void {
    this.location.back();
  }
}
