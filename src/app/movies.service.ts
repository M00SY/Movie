import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(public _HttpClient: HttpClient) {}

  getMovies(): Observable<any> {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/all/day?api_key=866cd3a065ef9304a549f1d65e494940");
  }
}
