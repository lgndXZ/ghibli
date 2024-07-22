import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { GhibliFilm, GhibliFilms } from './ghibliData';

@Injectable({ providedIn: 'root' })
export class GhibliService {

  private ghibliFilmUrl = 'https://ghibliapi.herokuapp.com/films'

  constructor(
    private http: HttpClient,) { }

  getGhibliFilms(): Observable<GhibliFilms[]> {
    return this.http.get<GhibliFilms[]>(this.ghibliFilmUrl)
  }

  getGhibliFilm(id: string | null): Observable<GhibliFilm> {
    return this.http.get<GhibliFilm>(this.ghibliFilmUrl + "/" + id)
  }
}
