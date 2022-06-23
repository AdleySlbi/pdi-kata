import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import imdbData from '../../assets/json/imdb.json'

@Component({
  selector: 'app-all-movie',
  templateUrl: './all-movie.component.html',
  styleUrls: ['./all-movie.component.scss']
})
export class AllMovieComponent implements OnInit {
  // Avec une vraie API, j'aurai fais mon appel vers la BDD sur ce component
  public imdb: any = imdbData.imdb;

  public imdbSlice = this.imdb.slice(0,10)

  constructor() { }

  ngOnInit(): void {
    console.log(this.imdbSlice)
  }

  onPageChange(event: PageEvent) {
    console.log(event)
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.imdb.length) {
      endIndex = this.imdb.length;
    }
    this.imdbSlice = this.imdb.slice(startIndex, endIndex);
  }




}
