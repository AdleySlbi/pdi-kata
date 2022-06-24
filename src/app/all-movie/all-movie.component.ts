import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import imdbData from '../../assets/json/imdb.json'

@Component({
  selector: 'app-all-movie',
  templateUrl: './all-movie.component.html',
  styleUrls: ['./all-movie.component.scss']
})
export class AllMovieComponent implements OnInit {
  @Input() searchTextField = "";

  // Avec une vraie API, j'aurai fais mon appel vers la BDD sur ce component
  public imdb: any = imdbData.imdb;

  public imdbSlice = this.imdb.slice(0,12)

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChange): void {
    let imdbSearched: any;
    if(this.searchTextField !== "") {
      imdbSearched = this.imdb.filter( test => test.originalTitle.includes(this.searchTextField))
      this.imdbSlice = imdbSearched.slice(0,12)
    } else {
      this.imdbSlice = this.imdb.slice(0,12)
    }
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.imdb.length) {
      endIndex = this.imdb.length;
    }
    this.imdbSlice = this.imdb.slice(startIndex, endIndex);
  }

  updateJson(updatedFilm){
    // console.log(updatedFilm.tconst)
    // In real case project with a server side project, I would have done the PUT method at this place
  }


}
