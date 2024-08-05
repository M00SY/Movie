import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Result } from './../post';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  imgPath: string = 'https://image.tmdb.org/t/p/w500/';
  MovieResult!: Result[];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe({
      next: (res) => {
        this.MovieResult = res.results; 
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
